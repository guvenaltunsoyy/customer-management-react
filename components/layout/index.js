import React from 'react'

import styles from './index.module.css'

import Nav from '../nav'

function Layout({children}) {
    return (
        <div className={styles.layout}>
            <Nav/>
            <main style={{width: '100%'}}>{children}</main>
        </div>
    )
}

export default Layout
