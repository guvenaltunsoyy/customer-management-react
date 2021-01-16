import React from 'react'

import styles from './index.module.css'


function BoxTitle({children, ...rest}) {
    return (
        <div className={styles.title} {...rest}>
            {children}
        </div>
    )
}

export default BoxTitle
