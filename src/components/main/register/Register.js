import React from 'react'
import Progress from './progress/Progress'
import Forms from './forms/Forms'

import './Register.css'

export default function Register() {
  return (
    <section className='register-container'>
      {/* register title */}
      <h2 className='register-title'>結帳</h2>
      <Progress />
      <Forms />
    </section>
  )
}
