'use server';

import { Ed25519Keypair } from '@iota/iota-sdk/keypairs/ed25519';
import { Transaction } from '@iota/iota-sdk/transactions';
import { decodeIotaPrivateKey } from '@iota/iota-sdk/cryptography';
import { IotaClient, IotaTransactionBlockResponse } from '@iota/iota-sdk/client';
import { KioskClient, KioskTransaction } from '@iota/kiosk';
import { MultiSigPublicKey } from '@iota/iota-sdk/multisig';

import { addresses, kioskCaps, activeNetwork } from '@/constants';

const client = new IotaClient({
    url: `https://rpc.ankr.com/iota_testnet/${process.env.RPC_API_KEY}`,
});

const kioskClient = new KioskClient({
    client,
    network: activeNetwork,
});

export async function findProduct(
    kiosk: string,
    productColor: string
): Promise<string | undefined> {
    const res = await kioskClient.getKiosk({
        id: kiosk,
        options: {
            withKioskFields: true,
            objectOptions: {
                showType: true,
            },
        },
    });

    for (let i = 0; i < res.items.length; i++) {
        const item = res.items[i];
        if (item.type.includes(`${addresses.package}::${productColor.toLowerCase()}`))
            return item.objectId;
    }
}

export async function processOrder(
    action: 'pick' | 'pack' | 'deliver',
    orderId: string
): Promise<IotaTransactionBlockResponse> {
    const approvalKeypair = new Ed25519Keypair();
    const ownerKeypair = owner();
    const multiSigPublicKey = MultiSigPublicKey.fromPublicKeys({
        threshold: 1,
        publicKeys: [
            {
                publicKey: ownerKeypair.getPublicKey(),
                weight: 1,
            },
            {
                publicKey: approvalKeypair.getPublicKey(),
                weight: 1,
            },
        ],
    });

    const tx = new Transaction();
    tx.moveCall({
        package: addresses.package,
        module: 'robots',
        function: `${action}_order`,
        arguments: [
            tx.object(addresses.random),
            tx.object(addresses.storage),
            tx.pure.string(orderId),
        ],
    });

    const kindBytes = await tx.build({ client, onlyTransactionKind: true });
    const coins = await client.getCoins({
        owner: ownerKeypair.toIotaAddress(),
        coinType: '0x2::iota::IOTA',
    });
    const sponsoredtx = Transaction.fromKind(kindBytes);
    sponsoredtx.setSender(multiSigPublicKey.toIotaAddress());
    sponsoredtx.setGasOwner(ownerKeypair.toIotaAddress());
    sponsoredtx.setGasPayment([
        {
            objectId: coins.data[0].coinObjectId,
            ...coins.data[0],
        },
    ]);

    const bytes = await sponsoredtx.build({ client });
    const ownerSignature = await ownerKeypair.signTransaction(bytes);
    const approvalSignature = await approvalKeypair.signTransaction(bytes);
    const combinedSignatureBytes = multiSigPublicKey.combinePartialSignatures([
        ownerSignature.signature,
        approvalSignature.signature,
    ]);

    const result = await client.executeTransactionBlock({
        transactionBlock: bytes,
        signature: [ownerSignature.signature, combinedSignatureBytes],
    });

    const receipt = await client.waitForTransaction({ digest: result.digest });

    return receipt;
}

export async function moveOrder(
    kioskFrom: string,
    kioskTo: string,
    productId: number,
    orderId: string
): Promise<IotaTransactionBlockResponse> {
    const color = productId == 0 ? 'green' : productId == 1 ? 'purple' : 'blue';

    const productAddressId = await findProduct(kioskFrom, color.toUpperCase());
    if (!productAddressId) throw new Error('Could not find an object');

    const tx = new Transaction();
    tx.moveCall({
        package: addresses.package,
        module: 'warehouse',
        function: 'move_product',
        arguments: [
            tx.object(kioskFrom),
            tx.object(kioskCaps[kioskFrom]),
            tx.object(kioskTo),
            tx.object(kioskCaps[kioskTo]),
            tx.pure.string(orderId),
            tx.pure.id(productAddressId),
        ],
        typeArguments: [`${addresses.package}::${color}_product::${color.toUpperCase()}_PRODUCT`],
    });
    tx.setSender(addresses.owner);

    const bytes = await tx.build({ client });

    const result = await client.executeTransactionBlock({
        transactionBlock: bytes,
        signature: (await owner().signTransaction(bytes)).signature,
    });

    const receipt = await client.waitForTransaction({ digest: result.digest });

    return receipt;
}

export async function shipOrder(
    orderId: string,
    productId: number
): Promise<IotaTransactionBlockResponse> {
    const tx = new Transaction();
    const kiosk = addresses.kiosks.zones.delivery;

    const color = productId == 0 ? 'green' : productId == 1 ? 'purple' : 'blue';

    const productAddressId = await findProduct(kiosk, color.toUpperCase());
    if (!productAddressId) throw new Error('Could not find an object');

    tx.moveCall({
        package: addresses.package,
        module: 'warehouse',
        function: 'ship_order',
        arguments: [
            tx.object(kiosk),
            tx.object(kioskCaps[kiosk]),
            tx.object(addresses.storage),
            tx.pure.string(orderId),
            tx.pure.id(productAddressId),
        ],
        typeArguments: [`${addresses.package}::${color}_product::${color.toUpperCase()}_PRODUCT`],
    });
    tx.setSender(addresses.owner);

    const bytes = await tx.build({ client });

    const result = await client.executeTransactionBlock({
        transactionBlock: bytes,
        signature: (await owner().signTransaction(bytes)).signature,
    });

    const receipt = await client.waitForTransaction({ digest: result.digest });

    return receipt;
}

function owner(): Ed25519Keypair {
    const { secretKey } = decodeIotaPrivateKey(process.env.ADMIN_PK as string);
    return Ed25519Keypair.fromSecretKey(secretKey);
}

//! Developer purposes only
export async function createKiosksForTesting() {
    const tx = new Transaction();
    tx.setSender(addresses.owner);

    const kioskTx = new KioskTransaction({ transaction: tx, kioskClient });

    for (let i = 1; i <= 18; i++) {
        kioskTx.create();
        kioskTx.shareAndTransferCap(addresses.owner);
    }

    kioskTx.finalize();

    const bytes = await tx.build({ client });
    const ownerSig = (await owner().signTransaction(bytes)).signature;

    const result = await client.executeTransactionBlock({
        transactionBlock: bytes,
        signature: [ownerSig],
        options: { showObjectChanges: true },
    });

    await client.waitForTransaction({ digest: result.digest });

    const { kioskOwnerCaps } = await kioskClient.getOwnedKiosks({ address: addresses.owner });

    const ids: any = [];
    const caps: any = {};

    kioskOwnerCaps.map((kiosk) => {
        if (!Object.values(addresses.kiosks.shelfs).includes(kiosk.kioskId)) {
            ids.push(kiosk.kioskId);
            caps[kiosk.kioskId] = kiosk.objectId;
        }
    });

    console.log(ids, caps);
}
//!
