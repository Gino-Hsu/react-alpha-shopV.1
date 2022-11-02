import React from 'react'

import './Input.css'

export function Input({ id, label, children }) {
  return (
    <div className={`input-group input-${id}`}>
      <div className='input-label'>{label}</div>
      {children}
    </div>
  )
}

export function InputRadio({ radioId, price, name, period }) {
  return (
    <label className='radio-group' data-price={price}>
      <input
        id={`shipping-standard${radioId}`}
        type='radio'
        name='shipping'
        checked
      />
      <div className='radio-info'>
        <div className='col col-12'>
          <div className='text'>{name}</div>
          <div className='price'></div>
        </div>
        <div className='period'>{period}</div>
      </div>
      <div className='radio-box-border'></div>
    </label>
  )
}
