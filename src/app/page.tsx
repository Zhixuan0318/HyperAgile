'use client';

import Image from 'next/image';
import { RainbowButton } from '@/components/ui/rainbow-button';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useConnectWallet, useCurrentWallet, useWallets } from '@iota/dapp-kit';

export default function Connection() {
    const router = useRouter();

    const wallets = useWallets();
    const { isConnected } = useCurrentWallet();
    const { mutate: connect } = useConnectWallet();

    useEffect(() => {
        if (isConnected) router.push('/home/store');
    }, [isConnected]);

    return (
        <main className='h-dvh flex flex-col items-center justify-center gap-y-10'>
            <Image src={'/images/logo.svg'} alt='logo' width={120} height={100} />
            <h1 className='text-6xl font-bold'>
                The Ecommerce Warehouse <br /> Automation Run By Robots.{' '}
            </h1>
            <section className='flex items-center gap-x-3'>
                <h3 className='p-6 flex items-center gap-x-3 border border-tetriary rounded-full'>
                    <Image src={'/images/iota.svg'} alt='iota' width={40} height={40} />
                    Deployed on IOTA Rebased Testnet
                </h3>
                <h3 className='p-6 flex items-center gap-x-3 border border-tetriary rounded-full'>
                    <Image src={'/images/icons/energy.svg'} alt='energy' width={40} height={40} />A
                    showcase run by HyperAgile
                </h3>
            </section>
            <RainbowButton
                className='mt-5 px-14 py-6 primary-button text-2xl font-normal'
                onClick={() => connect({ wallet: wallets[0] })}
            >
                <h3>Connect with IOTA Wallet</h3>
            </RainbowButton>
        </main>
    );
}
