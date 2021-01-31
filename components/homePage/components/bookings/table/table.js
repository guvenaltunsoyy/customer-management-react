import React from 'react'
import styles from './table.module.css'

import {Box, BoxDescription, BoxTitle} from '../../../..'
import Button from "../../../../button";
import {Active, Calender, Fire, LeftArrow, Rejected, RightArrow, Waiting, Wave} from "../../../../icons";
import clsx from "clsx";

const statusesMapper = {
    active: 1,
    waiting: 2,
    rejected: 0
}
const statuses = {
    1: <div className={styles.status}>
        <Active/>
        Active
    </div>,
    2: <div className={clsx(styles.status, styles.isWait)}>
        <Waiting/>
        Waiting
    </div>,
    0: <div className={clsx(styles.status, styles.isRed)}>
        <Rejected/>
        Rejected
    </div>,
}
const results = [
    {
        time: '17:00',
        name: 'John D',
        from: 'Sudbury Station Center',
        to: 'Plaza',
        v: 'N',
        b: '',
        c: '€',
        a: '',
        w: <Fire/>,
        status: statusesMapper.active
    },
    {
        time: '13:00',
        name: 'John D',
        from: 'Sudbury Station Center',
        to: 'Plaza',
        v: 'N',
        b: '',
        c: '€',
        a: '',
        w: <Fire/>,
        status: statusesMapper.active
    },
    {
        time: '14:00',
        name: 'John D',
        from: 'Sudbury Station Center',
        to: 'Plaza',
        v: 'N',
        b: '',
        c: '€',
        a: '',
        w: <Fire/>,
        status: statusesMapper.active
    },
    {
        time: '17:00',
        name: 'John D',
        from: 'Station Center',
        to: 'Plaza',
        v: 'N',
        b: '',
        c: '$',
        a: '',
        w: <Fire/>,
        status: statusesMapper.waiting
    },
    {
        time: '17:00',
        name: 'John D',
        from: 'Sudbury Station Center',
        to: 'Plaza',
        v: 'N',
        b: '',
        c: '€',
        a: '',
        w: <Wave/>,
        status: statusesMapper.rejected
    },

    {
        time: '19:00',
        name: 'John D',
        from: 'Station Center',
        to: 'Plaza',
        v: 'N',
        b: '',
        c: '$',
        a: '',
        w: <Fire/>,
        status: statusesMapper.waiting
    },
    {
        time: '20:00',
        name: 'John D',
        from: 'Station Center',
        to: 'Plaza',
        v: 'N',
        b: '',
        c: '$',
        a: '',
        w: <Fire/>,
        status: statusesMapper.waiting
    },
]
export default function table({animationDelay = 1}) {
    const [date, setDate] = React.useState(new Date());
    const handleDecreaseMonth = () => {
    };
    const handleIncreaseMonth = () => {

    };
    return (
        <Box className={styles.root} style={{'--delay': `${animationDelay}s`}}>
            <BoxTitle className={styles.title}>
                <div className={styles.calender}>
                    <Calender/>
                    <h4>
                        Calender View
                    </h4>
                    <h4>Today</h4>
                </div>
                <div className={styles.calenderSetter}>
                    <Button onClick={handleDecreaseMonth}>
                        <LeftArrow/>
                    </Button>
                    {date.toDateString()}
                    <Button onClick={handleIncreaseMonth}>
                        <RightArrow/>
                    </Button>
                </div>
                <Button className={styles.createButton}>
                    + create
                </Button>
            </BoxTitle>
            <BoxDescription>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>T</th>
                        <th>Name</th>
                        <th>From</th>
                        <th>To</th>
                        <th>V</th>
                        <th>B</th>
                        <th>C</th>
                        <th>A</th>
                        <th>W</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        results.map(result => <tr>
                            <td>
                                <input type="checkbox" id="row1" className="table-row"/>
                                <div
                                    className={clsx(styles.time, result.status === statusesMapper.waiting && styles.isWait)}>{result.time}</div>
                            </td>
                            <td>{result.name}</td>
                            <td>{result.from}</td>
                            <td>{result.to}</td>
                            <td>{result.v}</td>
                            <td>{result.b}</td>
                            <td>{result.c}</td>
                            <td>{result.a}</td>
                            <td>{result.w}</td>
                            <td>{
                                statuses[result.status]
                            }</td>

                        </tr>)
                    }
                    </tbody>
                </table>

            </BoxDescription>
        </Box>
    )
}
