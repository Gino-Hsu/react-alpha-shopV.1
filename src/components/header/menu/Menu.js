import React from 'react'
import { NavLinks, NavIcons, Logo } from './NavItems'

// import images
import search from '../../../images/icon-search@2x.png'
import shop from '../../../images/icon-shop@2x.png'
import theme from '../../../images/icon-toDark@2x.png'
import logo from '../../../images/Logo@2x.png'

// import css
import './Menu.css'

export default function Menu() {
  return (
    <>
      <nav className='navbar-menu'>
        <ul className='nav-list site-menu-list'>
          <NavLinks inText='男款' herfLink='#' />
          <NavLinks inText='女款' herfLink='#' />
          <NavLinks inText='最新消息' herfLink='#' />
          <NavLinks inText='客製商品' herfLink='#' />
          <NavLinks inText='聯絡我們' herfLink='#' />
        </ul>
        <ul className='nav-list site-action-list'>
          <NavIcons imgSrc={search} />
          <NavIcons imgSrc={shop} />
          <NavIcons imgSrc={theme} />
        </ul>
      </nav>
      <div className='nav-logo'>
        <Logo imgSrc={logo} />
      </div>
    </>
  )
}
