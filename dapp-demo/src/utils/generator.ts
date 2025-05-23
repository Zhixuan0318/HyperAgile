import { createHash } from 'crypto';

export const names = ['James', 'John', 'David'];
export const phones = ['123', '5331', '21312'];
export const addresses = ['Green Street', 'Yellow Street'];

export const generateOrderId = (address: string): string => {
    const hash = createHash('sha256')
        .update(address + Date.now())
        .digest('hex');
    return hash.slice(2, 8);
};

export const generateRandomValue = (id: string): string => {
    if (id == 'name') return names[Math.floor(Math.random() * names.length)];
    if (id == 'phone') return phones[Math.floor(Math.random() * phones.length)];
    return addresses[Math.floor(Math.random() * addresses.length)];
};
