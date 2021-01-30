import React, { useContext, useState } from 'react'

import styles from './index.module.css'
import * as Icons from '../icons'
import Button from '../button'
import StoreContext from '../../store'
import { THEME } from '../../constants'
import { v4 as uuid } from 'uuid'
import clsx from 'clsx'

const tabs = [
  {
    label: 'Bookings',
    icon: <Icons.Bookings />
  },
  {
    label: 'Controller',
    icon: <Icons.Controller />
  },
  {
    label: 'Map',
    icon: <Icons.Map />
  },
  {
    label: 'Reports',
    icon: <Icons.Reports />
  }
]

function TopBar(props) {
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  const store = useContext(StoreContext)
  const handleTabChange = (tab) => {
    setSelectedTab(tab)
  }
  return (
    <div className={styles.topBar} {...props}>
      <div className={styles.logo}>
        Rent <span className={styles.logoDet}>Cr</span>
      </div>
      {tabs.map((tab) => (
        <Button
          startIcon={tab.icon}
          onClick={() => handleTabChange(tab)}
          className={clsx(
            styles.topBarLink,
            tab === selectedTab && styles.active
          )}
          href="/"
          key={uuid()}
        >
          {tab.label}
        </Button>
      ))}
      <div className={styles.userInfo}>
        <Button className={styles.allButton}>All</Button>
        <div className={styles.userInfo}>Mike J</div>
        <Icons.User />
        <div>08.20 pm</div>
        <Button
          onClick={() =>
            store.changeTheme(
              store.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
            )
          }
        >
          {store.theme === THEME.LIGHT ? 'Dark' : 'Light'}
        </Button>
      </div>
    </div>
  )
}

export default TopBar
