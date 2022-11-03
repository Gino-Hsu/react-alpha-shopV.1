import React from 'react'

import styles from './NavItems.module.css'

export function NavLinks({ inText, herfLink }) {
  return (
    <>
      <li className={styles.nav__item}>
        <div className={`${styles.nav__link} cursor-point`} href={herfLink}>
          {inText}
        </div>
      </li>
    </>
  )
}

export function NavIcons({ imgSrc, imgAlt }) {
  return (
    <>
      <li className={styles.nav__item}>
        <div className={`${styles.nav__icon} cursor-point`}>
          <img src={imgSrc} alt={imgAlt}></img>
        </div>
      </li>
    </>
  )
}

export function Logo({ imgSrc, imgAlt }) {
  return (
    <>
      <div className='header__logo__container' href='#'>
        <div className={`${styles.icon__logo} cursor-point`}>
          <img src={imgSrc} alt={imgAlt}></img>
        </div>
      </div>
    </>
  )
}
