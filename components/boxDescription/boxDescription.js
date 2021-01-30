import clsx from 'clsx'
import React from 'react'

import styles from './index.module.css'

function BoxDescription({ children, className, ...rest }) {
  return (
    <div className={clsx(styles.subtitle, className)} {...rest}>
      {children}
    </div>
  )
}

export default BoxDescription
