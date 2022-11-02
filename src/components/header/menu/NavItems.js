import React from 'react'

import './NavItems.css'

export function NavLinks({ inText, herfLink }) {
  return (
    <>
      <li className='nav-item'>
        <div className='nav-link cursor-point' href={herfLink}>
          {inText}
        </div>
      </li>
    </>
  )
}

export function NavIcons({ imgSrc, imgAlt }) {
  return (
    <>
      <li className='nav-item'>
        <div className='nav-icon cursor-point'>
          <img src={imgSrc} alt={imgAlt}></img>
        </div>
      </li>
    </>
  )
}

export function Logo({ imgSrc, imgAlt }) {
  return (
    <>
      <div className='header-logo-container' href='#'>
        <div className='icon-logo cursor-point'>
          <img src={imgSrc} alt={imgAlt}></img>
        </div>
      </div>
    </>
  )
}
