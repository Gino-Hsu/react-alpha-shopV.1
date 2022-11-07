import React from 'react'

import styles from './ProgressGroups.module.css'

export default function ProgressGroups({ step, label }) {
  return (
    <span className={styles.progress__group}>
      <div className={styles.progress__icon}>
        <span className='text'>{step}</span>
      </div>
      <span className={styles.progress__label}>{label}</span>
    </span>
  )
}
