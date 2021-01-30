import React from 'react'
import styles from './index.module.css'
import Head from 'next/head'
import { Box, BoxDescription, BoxTitle } from '../../components'
import { UserActivities, DiscountOffers, DatePicker } from './components'

function Home(props) {
  return (
    <div className={styles.mainContainer} {...props}>
      <Head>
        <title>Home Page</title>
      </Head>

      <div className={styles.subContainer}>
        <UserActivities />
        <DiscountOffers />
        <DatePicker />
      </div>
    </div>
  )
}

export default Home
