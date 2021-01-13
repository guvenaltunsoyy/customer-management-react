import React from 'react'
import cn from 'classnames'
import Link from 'next/link'

import styles from './index.module.css'


function LinkButton({ href, children, ...props }) {
  return (
      <Link href={href}>
        <a {...props}>{children}</a>
      </Link>
  )
}

function BaseButton({ children, ...props }) {
  return (
      <button type="button" {...props}>
        {children}
      </button>
  )
}

function Button({ full = false, children, className, ...rest }) {
  const Comp = rest.href ? LinkButton : BaseButton

  return (
      <Comp
          className={cn(styles.button, className)}
          {...rest}
      >
        {children}
      </Comp>
  )
}

export default Button
