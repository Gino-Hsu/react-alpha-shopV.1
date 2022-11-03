import React from 'react'
import Progress from './progress/Progress'
import Forms from './forms/Forms'
import ProgressControl from './progressControl/ProgressControl'

import style from './Register.module.css'

export default function Register() {
  return (
    <section className={style.register__container}>
      {/* register title */}
      <h2 className={style.register__title}>結帳</h2>
      <Progress />
      <Forms />
      <ProgressControl />
    </section>
  )
}
