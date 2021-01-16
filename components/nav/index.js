import React from 'react'
import { PAGES } from '../../constants'
import {v4 as uuid} from 'uuid';
import styles from './index.module.css'
import Button from "../button";
import {useRouter} from "next/router";

function Nav() {
  const router = useRouter();
  return (
    <nav className={styles.navigationBar}>
      {Object.keys(PAGES).map((key) => {
        const PAGE = PAGES[key]
        return (
          <Button href={PAGE.path} key={uuid()} startIcon={PAGE.icon} active={PAGE.path === router.pathname}>
          </Button>
        )
      })}
    </nav>
  )
}

export default Nav
