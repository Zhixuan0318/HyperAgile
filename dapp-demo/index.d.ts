export {};

declare global {
    interface Product {
        id: number;
        stock: number;
    }

    type RobotType = 'Picking' | 'Packing' | 'Delivery';

    interface TwinsRobot {
        id: string;
        type: RobotType;
        isActive: boolean;
    }

    type SimulatorStatus = 'processing' | 'picking' | 'packing' | 'delivery' | 'completed';

    interface RobotReceipt {
        id: number;
        digest?: string;
    }

    interface ApprovalReceipt {
        digest: string;
        address?: string;
    }

    interface Order {
        id: string;
        status: 'processing' | 'completed' | 'cancelled';

        productId: number;

        mailingInfo: {
            name: string;
            phone: string;
            address: string;
        };
        wallet: string;

        digests: string[];
        approvals: ApprovalReceipt[];
        robots: RobotReceipt[];

        timestamp: number;

        receipt?: string;
    }
}
