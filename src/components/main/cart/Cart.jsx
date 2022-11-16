import React from 'react'
import ProductList from './cartItems/ProductList'
import PriceList from './cartItems/PriceList'

import { useProducts, useProductsDispatch } from './CartContext'

import styles from './Cart.module.scss'

export default function Cart({ checkedData }) {
  const products = useProducts()
  const dispatch = useProductsDispatch()

  return (
    <section className={styles.cart__container}>
      <h3 className={styles.cart__title}>購物籃</h3>
      <section className='product__list' data-total-price='0'>
        {products.map(product => {
          return (
            <ProductList
              key={product.id}
              imgSrc={product.img}
              productId={product.id}
              productName={product.name}
              productPrice={product.price}
              productQuantity={product.quantity}
              dispatch={dispatch}
            />
          )
        })}
      </section>
      {/* price will render from state */}
      <PriceList
        text='運費'
        price={checkedData === 0 ? '免費' : `$${checkedData}`}
      />
      {/* <PriceList text='小計' price='0' /> */}
      <CalculatePrice products={products} shippingPrice={checkedData} />
    </section>
  )
}

function CalculatePrice({ products, shippingPrice }) {
  function sumTotalPrice() {
    let totalPrice = null
    products.map(p => (totalPrice = totalPrice + p.price * p.quantity))
    totalPrice += shippingPrice
    return totalPrice
  }

  return (
    <PriceList
      text='小計'
      price={
        products.length > 0
          ? `$${sumTotalPrice().toLocaleString()}`
          : '購物籃是空的'
      }
    />
  )
}
