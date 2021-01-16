import React from 'react'

import styles from './index.module.css'


function Box({children, ...rest}) {
    return (
        <div className={styles.box} {...rest}>
            {children}
        </div>
    )
}

export default Box
