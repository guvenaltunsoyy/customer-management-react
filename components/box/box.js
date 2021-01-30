import clsx from 'clsx'
import React from 'react'

import styles from './index.module.css'

function Box({ children, className, ...rest }) {
  return (
    <div className={clsx(styles.box, className)} {...rest}>
      {children}
    </div>
  )
}

export default Box
