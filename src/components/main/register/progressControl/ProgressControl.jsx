import React from 'react'

import { useConfirmed } from '../../../../context/ShoppingSheetContext'

import style from './ProgressControl.module.scss'

export default function ProgressControl({
  step,
  handleClickNext,
  handleClickPre,
}) {
  const handleConfirmed = useConfirmed()

  return (
    <section className={style.progress__control__container}>
      <section
        className={style.progress__control__button__group}
        data-phase='address'
      >
        <ProgressBtn
          type='progress__control__btn btn__back'
          intext='← 上一步'
          disabled={step === 1 && 'disabled'}
          handleOnClick={handleClickPre}
        />
        <ProgressBtn
          type={`progress__control__btn btn__prinary ${
            step === 1 && 'btn__fallwidth'
          }`}
          intext={step < 3 ? '下一步 →' : '確認下單'}
          handleOnClick={step < 3 ? handleClickNext : handleConfirmed}
        />
      </section>
    </section>
  )
}

function ProgressBtn({ type, intext, disabled, handleOnClick }) {
  return (
    <button className={type} disabled={disabled} onClick={handleOnClick}>
      {intext}
    </button>
  )
}
