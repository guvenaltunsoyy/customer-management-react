import React from 'react'

import styles from './userActivities.module.css'
import { Box, BoxDescription, BoxTitle } from '../../../..'
import Button from '../../../../button'
import clsx from 'clsx'
import { Location } from '../../../../icons'
export default function userActivities({animationDelay=0.2}) {
  return (
    <Box className={styles.root} style={{ '--delay': `${animationDelay}s` }}>
      <BoxTitle>User activities</BoxTitle>
      <BoxDescription>
        Hoo - is an adaptive Online Courses Application with a wide range of
        course directions. The students will have a great possibility to study.
      </BoxDescription>
      <div className={styles.activityLinks}>
        <Button className={clsx(styles.activityLink, styles.active)} href="#">
          Current User
        </Button>
        <Button className={clsx(styles.activityLink)} href="#">
          User Request
        </Button>
      </div>
      <div className={styles.profiles}>
        <Box className={styles.profileContainer}>
          <div className={styles.profile}>
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              loading="lazy"
              alt="profile-picture"
            />
            <div className={styles.destinationLength}>
              <Location />
              <h6>42.8m</h6>
            </div>
          </div>
          <h5>traffic point</h5>
          <h6>istanbul</h6>
        </Box>
        <Box className={styles.profileContainer}>
          <div className={styles.profile}>
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
              loading="lazy"
              alt="profile-picture"
            />
            <div className={styles.destinationLength}>
              <Location />
              <h6>42.8m</h6>
            </div>
          </div>

          <h5>pickup point</h5>
          <h6>istanbul</h6>
        </Box>
      </div>
    </Box>
  )
}
