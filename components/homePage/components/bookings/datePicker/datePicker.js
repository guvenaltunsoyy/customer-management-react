import React, { useState } from 'react'

import styles from './datePicker.module.css'
import { Box, BoxDescription, BoxTitle } from '../../../..'
import Button from '../../../../button'
import { LeftArrow, RightArrow } from '../../../../icons'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import clsx from 'clsx'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const Picker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const handleDayClick = (date) => setSelectedDate(date)
  const checkDate = (date) => {
    return selectedDate.toDateString() === date.toDateString()
      ? styles.selectedDay
      : styles.day
  }
  return (
    <DatePicker
      inline
      onChange={handleDayClick}
      className={styles.datepicker}
      renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
        <BoxTitle className={styles.title}>
          <Button onClick={decreaseMonth}>
            <LeftArrow />
          </Button>
          {`${months[date.getMonth()]} ${date.getFullYear()}`}
          <Button onClick={increaseMonth}>
            <RightArrow />
          </Button>
        </BoxTitle>
      )}
      calendarContainer={({ className, children }) => (
        <div className={styles.pickerContainer}>{children}</div>
      )}
      dayClassName={checkDate}
    />
  )
}
export default function datePicker({ animationDelay = 0.6 }) {
  return (
    <Box className={styles.root} style={{ '--delay': `${animationDelay}s` }}>
      <Picker />
    </Box>
  )
}
