import React from 'react'
import styles from './user.module.css'
import { Box, BoxDescription, BoxTitle } from '../../../..'
export default function user({ animationDelay = 0.8 }) {
  return (
    <div className={styles.root} style={{ '--delay': `${animationDelay}s` }}>
      <div className={styles.accountProfile}>
        <img
          src="https://images.unsplash.com/photo-1550314124-301ca0b773ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2215&q=80"
          alt=""
        />
        <div>
          <div className={styles.blob}></div>
          <div className={styles.blob}></div>
          <div className={styles.blob}></div>
        </div>
        <div className={styles.accountName}>Mike J Morgan</div>
        <div className={styles.accountTitle}>Taxi Driver</div>
      </div>
      <Box className={styles.creditCard}>
        <div className={styles.accountCash}>$ 5637.04</div>
        <div className={styles.income}>Total Income</div>
        <div className={styles.iban}>**** **** **** 3060</div>
      </Box>
    </div>
  )
}
