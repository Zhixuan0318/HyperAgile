'use client';

import { IotaClientProvider, WalletProvider } from '@iota/dapp-kit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { networks } from '@/constants';

import '@iota/dapp-kit/dist/index.css';

const queryClient = new QueryClient();

function IotaProvider({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <IotaClientProvider
                networks={networks}
                defaultNetwork={process.env.NEXT_PUBLIC_NETWORK as any}
            >
                <WalletProvider autoConnect>{children}</WalletProvider>
            </IotaClientProvider>
        </QueryClientProvider>
    );
}

export default IotaProvider;
