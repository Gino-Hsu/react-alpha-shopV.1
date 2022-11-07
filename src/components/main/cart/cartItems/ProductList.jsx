import React from 'react'

import styles from './ProductList.module.scss'

export default function ProductList({ dataPrice, imgSrc, productName }) {
  return (
    <div
      className={styles.product__container}
      data-count='0'
      data-price={dataPrice}
    >
      <div className={styles.img__container}>
        <img src={imgSrc} alt={productName} />
      </div>
      <div className={styles.product__info}>
        <div className={styles.product__name}>{productName}</div>
        <div className={styles.product__control__container}>
          <div className={styles.product__control}>
            <Button intext='-' />
            {/* count will render by state */}
            <p className={styles.count}>0</p>
            <Button intext='+' />
          </div>
        </div>
        <div className={styles.price}>{`$${dataPrice.toLocaleString()}`}</div>
      </div>
    </div>
  )
}

function Button({ intext }) {
  return <div className={styles.btn}>{intext}</div>
}
