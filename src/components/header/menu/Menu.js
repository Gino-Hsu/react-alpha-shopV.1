import React from 'react'
import { NavLinks, NavIcons, Logo } from './NavItems'

// import images
import search from '../../../images/icon-search@2x.png'
import shop from '../../../images/icon-shop@2x.png'
import theme from '../../../images/icon-toDark@2x.png'
import logo from '../../../images/Logo@2x.png'
import hamburger from '../../../images/hamburger@2x.png'

// import css
import styles from './Menu.module.css'

export default function Menu() {
  return (
    <>
      <label className={styles.hamburger} for='menu__checkbox'>
        <img
          className={styles.hamburger__img}
          src={hamburger}
          alt='Toggle Menu'
        />
      </label>
      <input
        type='checkbox'
        id='menu__checkbox'
        className={styles.menu__checkbox}
      />

      <nav className={styles.navbar__menu}>
        <ul className={styles.nav__links}>
          <NavLinks inText='男款' herfLink='#' />
          <NavLinks inText='女款' herfLink='#' />
          <NavLinks inText='最新消息' herfLink='#' />
          <NavLinks inText='客製商品' herfLink='#' />
          <NavLinks inText='聯絡我們' herfLink='#' />
        </ul>
        <ul className={styles.nav__icons}>
          <NavIcons imgSrc={search} />
          <NavIcons imgSrc={shop} />
          <NavIcons imgSrc={theme} />
        </ul>
      </nav>
      <div className={styles.nav__logo}>
        <Logo imgSrc={logo} />
      </div>
    </>
  )
}
