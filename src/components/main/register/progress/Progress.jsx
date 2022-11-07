import React from 'react'
import ProgressGroups from './ProgressGroups'

import styles from './Progress.module.css'

export default function Progress() {
  return (
    <section className={styles.progress__container}>
      <ProgressGroups step='1' label='寄送地址' />
      <span className={styles.progress__bar} data-order='1'></span>
      <ProgressGroups step='2' label='運送方式' />
      <span className={styles.progress__bar} data-order='2'></span>
      <ProgressGroups step='3' label='付款資訊' />
    </section>
  )
}
