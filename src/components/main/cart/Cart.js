import React from 'react'
import ProductList from './cartItems/ProductList'
import PriceList from './cartItems/PriceList'

// import image
import product_01 from '../../../images/product_01@2x.png'
import product_02 from '../../../images/product_02@2x.png'

import styles from './Cart.module.css'

const PRODUCTS = [
  {
    id: 1,
    name: '破壞補丁修身牛仔褲',
    price: 3999,
    image: product_01,
  },
  {
    id: 2,
    name: '刷色直筒牛仔褲',
    price: 1299,
    image: product_02,
  },
]

export default function Cart() {
  return (
    <section className={styles.cart__container}>
      <h3 className={styles.cart__title}>購物籃</h3>
      <section className='product__list' data-total-price='0'>
        {PRODUCTS.map(product => {
          return (
            <ProductList
              key={product.id}
              dataPrice={product.price}
              imgSrc={product.image}
              productName={product.name}
            />
          )
        })}
      </section>
      {/* price will render from state */}
      <PriceList text='運費' price='0' />
      <PriceList text='小計' price='0' />
    </section>
  )
}
