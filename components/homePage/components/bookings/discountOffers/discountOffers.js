import React, { useState, useEffect } from 'react'
import styles from './discountOffers.module.css'
import { Box, BoxDescription, BoxTitle } from '../../../..'
import Button from '../../../../button'
import clsx from 'clsx'
export default function discountOffers({ animationDelay = 0.4 }) {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    let count = 0
    setCounter(0)
    const interval = setInterval(() => {
      setCounter((s) => s + 1)
      count++
      if (count >= 92) {
        clearInterval(interval)
      }
    }, 42)
    return () => clearInterval(interval)
  }, [])
  return (
    <Box className={styles.root} style={{ '--delay': `${animationDelay}s` }}>
      <BoxTitle>Discount Offers</BoxTitle>
      <BoxDescription
        style={{
          justifyContent: 'space-between',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <div className={styles.offerContainer}>
          <div className={styles.offerInfo}>
            <h5>The best Offer is:</h5>
            <div className={styles.price}>$5</div>
            <h5>Distance:</h5>
            <div className={styles.dist}>4.5km</div>
          </div>
          <div className={styles.circle}>
            <div className={styles.pie}>
              <svg>
                <circle cx="60" cy="60" r="50"></circle>
              </svg>
            </div>
            <div className={styles.counter}>{counter}</div>
          </div>
        </div>
        <div className={styles.discountProfile}>
          <span>By:</span>
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            alt=""
          />
          <div className={styles.discountDetail}>
            <div className={styles.discountName}>Johnny Cauld</div>
            <div className={styles.discountType}>Micro bus & Travel Bus</div>
          </div>
        </div>
        <Button className={styles.offerButton}>Get Offer</Button>
      </BoxDescription>
    </Box>
  )
}
