import React from 'react'
import Address from './Address'

// Add when using useState
// import Ship from './Ship'
// import CreditCard from './CreditCard'

import './Forms.css'

export default function Forms() {
  return (
    <section className='form-container'>
      <Address />
      {/* Ship & CreditCard by state */}
      {/* <Ship /> */}
      {/* <CreditCard /> */}
    </section>
  )
}
