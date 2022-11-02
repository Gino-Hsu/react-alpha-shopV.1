import React from 'react'

export default function ProductList({ dataPrice, imgSrc, productName }) {
  return (
    <div
      className='product-container col col-12'
      data-count='0'
      data-price={dataPrice}
    >
      <img className='img-container' src={imgSrc} alt={productName} />
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
  return (
    <button className='btn dtn-minus d-flex justify-content-center align-items-center'>
      {intext}
    </button>
  )
}
