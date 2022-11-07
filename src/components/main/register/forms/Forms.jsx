import React from 'react'
import Address from './Address'

// Add when using useState
// import Ship from './Ship'
// import CreditCard from './CreditCard'

import styles from './Forms.module.scss'

export default function Forms() {
  return (
    <section className={styles.form__container}>
      <Address />
      {/* Ship & CreditCard by state */}
      {/* <Ship /> */}
      {/* <CreditCard /> */}
    </section>
  )
}
