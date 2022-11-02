import React from 'react'
import Menu from './menu/Menu'

import './Header.css'

export default function Header() {
  return (
    <header className='site-header'>
      <div className='container'>
        <Menu />
      </div>
    </header>
  )
}
