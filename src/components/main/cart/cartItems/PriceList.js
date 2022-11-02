import React from 'react'

import './PriceList.css'

export default function PriceList({ text, price }) {
  return (
    <section className='cart-info'>
      <div className='cart__text'>{text}</div>
      {/* price will render from state */}
      <div className='cart__price'>${price}</div>
    </section>
  )
}
