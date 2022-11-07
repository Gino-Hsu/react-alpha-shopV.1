import React from 'react'
import Register from './register/Register'
import Cart from './cart/Cart'

import style from './Main.module.scss'

export default function Main() {
  return (
    <main className={style.site__main}>
      <div className={`${style.main__container} container`}>
        <Register />
        <Cart />
      </div>
    </main>
  )
}
