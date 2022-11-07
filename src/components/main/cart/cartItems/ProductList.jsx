import React from 'react'

import './ProductList.css'

export default function ProductList({ dataPrice, imgSrc, productName }) {
  return (
    <div
      className='product-container col col-12'
      data-count='0'
      data-price={dataPrice}
    >
      <div className='img-container'>
        <img src={imgSrc} alt={productName} />
      </div>
      <div className='product-info'>
        <div className='product-name'>{productName}</div>
        <div className='product-control-container'>
          <div className='product-control'>
            <Button intext='-' />
            {/* count will render by state */}
            <p className='count'>0</p>
            <Button intext='+' />
          </div>
        </div>
        <div className='price'>{`$${dataPrice.toLocaleString()}`}</div>
      </div>
    </div>
  )
}

function Button({ intext }) {
  return <div className='btn'>{intext}</div>
}
