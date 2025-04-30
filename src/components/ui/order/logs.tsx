'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CopyButton } from '@lobehub/ui';

import { digestNames } from '@/constants';

import { formatLog, sliceDigest } from '@/utils/formatter';
import { cn } from '@/lib/utils';

interface Props {
    order: Order;
    className?: string;
}

export default function Logs({ order, className }: Props) {
    return (
        <section className={cn('detail-log', className)}>
            <section className='mb-4 flex items-center gap-x-2.5'>
                <h4>Detail Log</h4>
                <figure className='order-note'>
                    <Image
                        src={'/images/icons/important.svg'}
                        alt='important'
                        height={8}
                        width={8}
                    />
                    <h6>Click to view on IOTA Scan</h6>
                </figure>
            </section>
            <section className='flex flex-col gap-y-1.5 h-[400px] overflow-y-scroll'>
                {order.digests.map((digest, index) => (
                    <figure
                        key={index}
                        className='p-3.5 flex items-center justify-between border border-secondary rounded-lg'
                    >
                        <section className='flex flex-col gap-y-3'>
                            <div className='flex items-center gap-x-2 flex-wrap'>
                                {formatLog(order, digestNames[index])}
                            </div>
                            <div className=' flex items-center gap-x-2 text-xs font-light text-secondary'>
                                {digest.length > 1 ? (
                                    <>
                                        <h5>Digest: {sliceDigest(digest)}</h5>
                                        <CopyButton content={digest} />
                                    </>
                                ) : (
                                    <h5>Executing...</h5>
                                )}
                            </div>
                        </section>
                        {digest.length > 1 && (
                            <Link
                                href={`${process.env.NEXT_PUBLIC_EXPLORER}/tx/${digest}`}
                                target='_blank'
                                className='log'
                            >
                                <Image
                                    className='min-w-[24px]'
                                    src={'/images/icons/redirect-button.svg'}
                                    alt='link'
                                    width={24}
                                    height={40}
                                />
                            </Link>
                        )}
                    </figure>
                ))}
            </section>
        </section>
    );
}
