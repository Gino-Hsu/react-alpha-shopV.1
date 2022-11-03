import React from 'react'
import Register from './register/Register'
import Cart from './cart/Cart'
import Footer from '../footer/Footer'

import style from './Main.module.css'

export default function Main() {
  return (
    <main className={style.site__main}>
      <div className={`${style.main__container} container`}>
        <Register />
        <Cart />
      </div>
      <Footer />
    </main>
  )
}
