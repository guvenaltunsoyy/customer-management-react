import React from 'react';
import styles from './transactions.module.css'

import {Box, BoxDescription, BoxTitle} from '../../../..'
import Button from "../../../../button";
import {AmericanExpress, Mastercard, Paypal, Visa} from "../../../../icons";
import clsx from "clsx";

const statusesMapper = {
    active: 1,
    waiting: 2,
    rejected: 0
}
const transactions = [
    {
        icon: <Visa/>,
        label: 'Visa',
        info: 'Payment Received',
        price: 3945,
        currency: 'eur',
        status: statusesMapper.active
    },
    {
        icon: <Mastercard/>,
        label: 'MasterCard',
        info: 'Account Deposit',
        price: 1234,
        currency: 'try',
        status: statusesMapper.waiting
    },
    {
        icon: <AmericanExpress/>,
        label: 'American Express',
        info: 'Payment Waiting',
        price: 53.43,
        currency: 'try',
        status: statusesMapper.waiting
    },
    {
        icon: <Paypal/>,
        label: 'Paypal',
        info: 'Payment Cancelled',
        price: 4000,
        currency: 'eur',
        status: statusesMapper.rejected
    },
]
export default function transaction({animationDelay = 1.2, ...rest}) {

    const locale = typeof window !== 'undefined' ? window?.navigator?.language : 'tr-TR';
    return <Box className={styles.root} style={{'--delay': `${animationDelay}s`}}>
        <BoxTitle className={styles.title}>
            <h5>Transactions</h5>
            <Button className={styles.viewAllButton}>View All</Button>
        </BoxTitle>
        <BoxDescription style={{flexDirection: 'column', gap: '30px', width: '100%'}}>
            {
                transactions.map(transaction =>
                    <div className={styles.transaction}>
                        <div className={styles.infoContainer}>
                            {transaction.icon}
                            <div className={styles.name}>
                                {transaction.label}
                                <div className={styles.info}>
                                    {transaction.info}
                                </div>
                            </div>
                        </div>
                        <div
                            className={clsx(styles.price,
                                transaction.status === statusesMapper.active && styles.green,
                                transaction.status === statusesMapper.waiting && styles.blue,
                                transaction.status === statusesMapper.rejected && styles.red)

                            }>
                            +{transaction?.price?.toLocaleString(locale, {
                            style: 'currency',
                            currency: transaction.currency
                        })}
                        </div>
                    </div>
                )
            }

        </BoxDescription>
    </Box>
}