import React from 'react'
import cn from 'classnames'
import Link from 'next/link'

import styles from './index.module.css'


function LinkButton({href, children, ...props}) {
    return (
        <Link href={href}>
            <a {...props}>{props?.startIcon}{children}</a>
        </Link>
    )
}

function BaseButton({children, startIcon, ...props}) {
    return (
        <button type="button" {...props}>
            {startIcon} {children}
        </button>
    )
}

function Button({full = false, children, className, startIcon, ...rest}) {
    const Comp = rest.href ? LinkButton : BaseButton

    return (
        <Comp
            className={cn(styles.button, rest.active && styles.active, className)}
            startIcon={startIcon}
            {...rest}
        >
            {children}
        </Comp>
    )
}

export default Button
