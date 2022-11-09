import React from 'react'
import Register from './register/Register'
import Cart from './cart/Cart'

import style from './Main.module.scss'

// const SHIPPINGDATA = [
//   {
//     id: 1,
//     name: '標準運送',
//     price: 0,
//     period: '約 3~7 個工作天',
//   },
//   {
//     id: 2,
//     name: 'DHL 貨運',
//     price: 500,
//     period: '48 小時內送達',
//   },
// ]

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
