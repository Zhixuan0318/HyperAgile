import { NextRequest, NextResponse } from 'next/server';

import { addresses } from '@/constants';

import { moveOrder, processOrder, shipOrder } from '@/helpers/contract-server';

export async function POST(request: NextRequest) {
    try {
        const { orderId, robotId, productId, processId } = await request.json();

        if (!orderId) throw new Error('No order id was provided');
        if (processId == undefined) throw new Error('Process id was not provided');
        if (processId > 3) throw new Error('Wrong process id');
        if (productId == undefined) throw new Error('No productId was provided');

        if (robotId == undefined && processId > 0) throw new Error('No robot id was provided');
        if (processId == undefined && processId == 0) throw new Error('No product id was provider');

        const color = productId == 0 ? 'green' : productId == 1 ? 'purple' : 'blue';

        switch (processId) {
            case 0:
                await processOrder('pick', orderId);
                break;
            case 1:
                await moveOrder(
                    addresses.kiosks.shelfs[color],
                    addresses.kiosks.pickingRobots[robotId],
                    productId,
                    orderId
                );
                await moveOrder(
                    addresses.kiosks.pickingRobots[robotId],
                    addresses.kiosks.zones.buffer,
                    productId,
                    orderId
                );
                await processOrder('pack', orderId);
                break;
            case 2:
                await moveOrder(
                    addresses.kiosks.zones.buffer,
                    addresses.kiosks.packingRobots[robotId],
                    productId,
                    orderId
                );
                await moveOrder(
                    addresses.kiosks.packingRobots[robotId],
                    addresses.kiosks.zones.packing,
                    productId,
                    orderId
                );
                await processOrder('deliver', orderId);
                break;
            case 3:
                await moveOrder(
                    addresses.kiosks.zones.packing,
                    addresses.kiosks.deliveringRobots[robotId],
                    productId,
                    orderId
                );
                await moveOrder(
                    addresses.kiosks.deliveringRobots[robotId],
                    addresses.kiosks.zones.delivery,
                    productId,
                    orderId
                );
                await shipOrder(orderId, productId);
                break;
        }

        return NextResponse.json({}, { status: 200 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}
