import React from 'react'
import ProgressBtn from './ProgressBtn'

import style from './ProgressControl.module.css'

export default function ProgressControl() {
  return (
    <section className={style.progress__control__container}>
      <section
        className={style.progress__control__button__group}
        data-phase='address'
      >
        <ProgressBtn
          type='progress__control__btn btn__back'
          intext='&larr; 上一步'
          disabled='disabled'
        />
        <ProgressBtn
          type='progress__control__btn btn__prinary btn__fallwidth'
          intext='下一步 &rarr;'
          disabled=''
        />
      </section>
    </section>
  )
}
