import { getFullnodeUrl, IotaClient } from '@iota/iota-sdk/client';

export const networks = {
    devnet: { url: getFullnodeUrl('devnet') },
    testnet: { url: getFullnodeUrl('testnet') },
};

export const activeNetwork = (process.env.NEXT_PUBLIC_NETWORK as 'devnet' | 'testnet') ?? 'devnet';

export const client = new IotaClient({
    url: networks[activeNetwork].url,
});

export const digestNames = [
    'Warehouse received order',
    'Picking in progress',
    'PRODUCT from PRODUCT_COLOR Shelf to Picking Robot ROBOT_ID',
    'PRODUCT from Picking Robot ROBOT_ID to Order Buffer Zone',
    'Packing in progress',
    'PRODUCT from Order Buffer Zone to Packing Robot ROBOT_ID',
    'PRODUCT from Packing Robot ROBOT_ID to Packout Zone',
    'Delivery in progress',
    'PRODUCT from Packout Zone to Delivery Robot ROBOT_ID',
    'PRODUCT from Delivery Robot ROBOT_ID to Delivery Zone',
    'Shipping in progress',
];

export const addresses = {
    owner: '0x729afd8dbb1a3c2f136d0bc5fee55b687b668a4f6ff267d9f5f3a6ed18efb008',
    package: '0x32791c7fc9f6208040417d79219eeb6ed6f23b19a1ce9ac6f6723b1f1e7605b0',
    storage: '0x0db714cae9779dfa14ffcde0a102f3e43169f0e5a5884e34fe3cb717c18e70df',
    random: '0x8',
    products: [
        '0x79f23aaa9c8dfa523cff5c02583b271097367ccaeee9e1ef1e3654471ddbc99f',
        '0x5c5dcbcd3f7277adf24249764ee3218a8d0902e83aeef5b0b71836f09561b557',
        '0x8235d15fe27e857fb5e5f4d4ef34c270f07d7ccf4a555a2688b590ad2f63c919',
    ],
    kiosks: {
        shelfs: {
            green: '0xb2d0f4011e94c50d728034a9a4ca0897bc1612b6854dbe4deb1a62613c584851',
            purple: '0x6ce573dd560698cb9a9dcae3bccc705985b050aa0a2cc43f34092f10c1f363bb',
            blue: '0xf386ffbbaf7e4d421080bee666b5a154917da47073fb7cd3ff09f0525988e292',
        },
        pickingRobots: [
            '0xcf7b07c4590dfd4a82bcabbe2d3df42164a425088464042c3d075495a3ee17e9',
            '0x2b4e39ea37d1bda9959d1ec7531dc1b365eb4758f8239e7d49966a23dabcad85',
            '0x01b93229ebf993a30e6523abd3bfdd0a7b2659fd498d499d60af63c4038ef007',
            '0x3ad6033596c69d61b71efda1e6334fbda0f8dc8bbdf96a56cde247bad0c4068c',
            '0xc3fdb5d1433831260f822da16544d04fe70b571a201b427462675343f65ca347',
        ],
        packingRobots: [
            '0x466236ae54754d021b8a37174832819152aabd62abeb6b29b921c8169e67bb49',
            '0xe6267c8a43e006e1085a1a9de5e42e64d955e7080ab96695bd59493d7560ec04',
            '0x439296496c8d984208df586fcd55265763d1fac5502ae305ed4b02d4bd58e2d5',
            '0x4a4f3f5f3f88e2201c54033c412b306e7816c8208d74a0bc2fe142b219cf01ad',
            '0x5aff598de439ae07dd4a6805794a380cbb5fd4a894a0dc20e77b29d353969bab',
        ],
        deliveringRobots: [
            '0xead164d39b1985233c88197a242c5f0861fc2af12aeb87dffe5a884094129aa2',
            '0x6d0c0b52af4de4010e2d7a8b24dc6bbebbb241d84d60bbfd54427546cd3f63fb',
            '0xcc5955119c4e1b892dfa2a03c063917129ea7d86f0ed79129f202d4a86c11285',
            '0xde7ff6da5d868a7b955ee70f72f2948fea6815227d715cd017c6997296bfaa36',
            '0xc8858e914b84c2cad48be85bfeda16237c221adddc04276da41d9b1c298ade6c',
        ],
        zones: {
            buffer: '0x37b35fe7d7c172ae7d1536c51412c6c344611f8ca320bc68c3fd6a14bde32a04',
            packing: '0xf17c95caec2ce02a4d4d84fc50d0e74008b85dfa396ec64a1fd0e67518f4ae37',
            delivery: '0xfe53fae7099899a4e724b9c4c6cf34193443774968dbd0383710517bdf96967f',
        },
    },
};

export const kioskCaps: { [key: string]: string } = {
    '0x6ce573dd560698cb9a9dcae3bccc705985b050aa0a2cc43f34092f10c1f363bb':
        '0x132de3406fca8551e76fb426746865ce2955662e0fb19b0c337985d5d55a6cf4',
    '0xf386ffbbaf7e4d421080bee666b5a154917da47073fb7cd3ff09f0525988e292':
        '0x4751ea39f8ecb908213dd738a5a28ce75f9a0267e5d12706c0c55f7573c4e70b',
    '0xb2d0f4011e94c50d728034a9a4ca0897bc1612b6854dbe4deb1a62613c584851':
        '0x2ad31aea0faa0e8546d3180906688b5b3a09f8c06c4646eae11fb0db23a051f7',
    '0x466236ae54754d021b8a37174832819152aabd62abeb6b29b921c8169e67bb49':
        '0x0a9e259ff72a5b9a195da4087b6eda4c313093e1daeb3187702b265b41a05689',
    '0xe6267c8a43e006e1085a1a9de5e42e64d955e7080ab96695bd59493d7560ec04':
        '0x1c8ba4fa619abd09e4cc3106de44a28450107955d53f175615ceb6fb89e7e0f0',
    '0x439296496c8d984208df586fcd55265763d1fac5502ae305ed4b02d4bd58e2d5':
        '0x2a738bfedac98784c5ab68ce311e6aaf4424a20104ee0f34755c595ce10a329f',
    '0x4a4f3f5f3f88e2201c54033c412b306e7816c8208d74a0bc2fe142b219cf01ad':
        '0x2c26ba4f61712965d162bec8f58f2e63622749813599e1eb600c0dfc5a87d917',
    '0x5aff598de439ae07dd4a6805794a380cbb5fd4a894a0dc20e77b29d353969bab':
        '0x2f78603cf3d2b42fefd60df0b535ef5e30b93cc3d087e99dece2bae352605b2e',
    '0xead164d39b1985233c88197a242c5f0861fc2af12aeb87dffe5a884094129aa2':
        '0x34f70f218d7b451e635b8487f62c7bc7cf82838c4899f33b435fef1dcc7daf26',
    '0x6d0c0b52af4de4010e2d7a8b24dc6bbebbb241d84d60bbfd54427546cd3f63fb':
        '0x4a3e60e591af48bdb58a96628e2a8210fa5d2790f62ad2163c4dfa109316a861',
    '0xcc5955119c4e1b892dfa2a03c063917129ea7d86f0ed79129f202d4a86c11285':
        '0x5bcfd59720ce77c052902e2b47f74db149f149519aa5c28c8d04873bd21ce3d1',
    '0xde7ff6da5d868a7b955ee70f72f2948fea6815227d715cd017c6997296bfaa36':
        '0x6352b28eac5428cc87d250ac5e7fff1f8180628b3563ffa27c1b389259963422',
    '0xc8858e914b84c2cad48be85bfeda16237c221adddc04276da41d9b1c298ade6c':
        '0x8c8361d5e29ec5e07da3053bea126ba87fa3948daba0959aed1ae71b783462d2',
    '0xcf7b07c4590dfd4a82bcabbe2d3df42164a425088464042c3d075495a3ee17e9':
        '0xa359c211bd2bd3d56bb1da33f26ba4d6e317005e141bc23addbe605980ce127e',
    '0x2b4e39ea37d1bda9959d1ec7531dc1b365eb4758f8239e7d49966a23dabcad85':
        '0xa75a85b96b9a84bf2d19ca6f8f85f293a7da36951dfe7ce0db0294f0576acf36',
    '0x01b93229ebf993a30e6523abd3bfdd0a7b2659fd498d499d60af63c4038ef007':
        '0xaa366351fa0f5bd51633b7448ccedf472d5789d8cf4d3b354d4a5baccacc4942',
    '0x3ad6033596c69d61b71efda1e6334fbda0f8dc8bbdf96a56cde247bad0c4068c':
        '0xd09256f55b5caa54bb9c558490d4d75bb5c38c9dd91bda45794e296a4b69e190',
    '0xf17c95caec2ce02a4d4d84fc50d0e74008b85dfa396ec64a1fd0e67518f4ae37':
        '0xd0c5d07f3ce81bf0ceda90715239c04f6e5b8000c3dd4ebcc17398b6215155ac',
    '0xfe53fae7099899a4e724b9c4c6cf34193443774968dbd0383710517bdf96967f':
        '0xdd1562826ec4fc7e05c12b28d9d90730a442e8115a696deaa332c57507c57d8b',
    '0xc3fdb5d1433831260f822da16544d04fe70b571a201b427462675343f65ca347':
        '0xe13982882b7b34e8803c3fdbc7dde51201acbffd1188134f8be5dfbe99d2b5e6',
    '0x37b35fe7d7c172ae7d1536c51412c6c344611f8ca320bc68c3fd6a14bde32a04':
        '0xe72454e07e826483c4325db17598d8b2d9c4fafdfa63ae517604d164c963542e',
};
