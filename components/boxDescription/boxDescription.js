import React from 'react'

import styles from './index.module.css'


function BoxDescription({children, ...rest}) {
    return (
        <div className={styles.subtitle} {...rest}>
            {children}
        </div>
    )
}

export default BoxDescription
