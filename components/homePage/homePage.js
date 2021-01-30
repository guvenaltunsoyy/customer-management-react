import React from 'react'
import styles from './index.module.css'
import Head from 'next/head'
import { Box, BoxDescription, BoxTitle } from '../../components'
import UserActivities from './userActivities'

function Home(props) {
  return (
    <div className={styles.mainContainer} {...props}>
      <Head>
        <title>Home Page</title>
      </Head>

      <div className={styles.subContainer}>
        <UserActivities />
        <Box>
          <BoxTitle>Discount Offers</BoxTitle>
          <BoxDescription>
            Hoo - is an adaptive Online Courses Application with a wide range of
            course directions. The students will have a great possibility to
            study.
          </BoxDescription>
        </Box>
        <Box>
          <BoxTitle>Discount Offers</BoxTitle>
          <BoxDescription>
            Hoo - is an adaptive Online Courses Application with a wide range of
            course directions. The students will have a great possibility to
            study.
          </BoxDescription>
        </Box>
      </div>
    </div>
  )
}

export default Home
