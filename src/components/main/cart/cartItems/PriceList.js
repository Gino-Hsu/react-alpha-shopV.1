import React from 'react'

import './PriceList.css'

export default function PriceList({ text, price }) {
  return (
    <section className='cart-info'>
      <div className='text'>{text}</div>
      {/* price will render from state */}
      <div className='price'>${price}</div>
    </section>
  )
}
