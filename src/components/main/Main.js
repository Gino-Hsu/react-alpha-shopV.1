import React from 'react'
import Register from './register/Register'
import Cart from './cart/Cart'

import './Main.css'

export default function Main() {
  return (
    <main className='site-main'>
      <div className='main-container container'>
        <Register />
        <Cart />
      </div>
    </main>
  )
}
