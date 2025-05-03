'use server';

import { PinataSDK } from 'pinata';

const pinata = new PinataSDK({
    pinataJwt: process.env.PINATA_JWT,
    pinataGateway: process.env.NEXT_PUBLIC_GATEWAY,
});

export const uploadReceipt = async (order: Order): Promise<string> => {
    const response = await pinata.upload.public.json(order);
    return response.cid;
};
