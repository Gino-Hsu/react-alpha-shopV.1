import React from 'react'

export default function PriceList({ text, price }) {
  return (
    <section class='cart-info shipping col col-12'>
      <div class='text'>{text}</div>
      {/* price will render from state */}
      <div class='price'>{price}</div>
    </section>
  )
}
