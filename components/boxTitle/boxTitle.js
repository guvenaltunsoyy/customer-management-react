import clsx from 'clsx'
import React from 'react'

import styles from './index.module.css'

function BoxTitle({ children, className, ...rest }) {
  return (
    <div className={clsx(styles.title, className)} {...rest}>
      {children}
    </div>
  )
}

export default BoxTitle
