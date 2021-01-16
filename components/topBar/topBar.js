import React, {useContext, useState} from 'react'

import styles from './index.module.css'
import StoreContext from '../../store'
import * as Icons from "../icons";
import Button from "../button";
import {useRouter} from "next/router";
import cn from "classnames";

const tabs = [
    {
        label: 'Bookings',
        icon: <Icons.Bookings/>
    }, {
        label: 'Controller',
        icon: <Icons.Controller/>
    }, {
        label: 'Map',
        icon: <Icons.Map/>
    }, {
        label: 'Reports',
        icon: <Icons.Reports/>
    },
]

function TopBar(props) {
    const store = useContext(StoreContext)
    const router = useRouter();
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };
    return (
        <div className={styles.topBar} {...props}>
            <div className={styles.logo}>Rent <span className={styles.logoDet}>Cr</span></div>
            {
                tabs.map(tab => <Button startIcon={tab.icon} onClick={() => handleTabChange(tab)}
                                        className={cn({
                                            [styles.topBarLink]: true,
                                            [styles.active]: tab === selectedTab
                                        })}>
                    {tab.label}
                </Button>)
            }
            <div className={styles.userInfo}>
                <Button className={styles.allButton}>
                    All
                </Button>
                <div className={styles.userInfo}>Mike J</div>
                <Icons.User/>
                <div className="hour">08.20 pm</div>
            </div>
        </div>
    )
}

export default TopBar
