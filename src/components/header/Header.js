import React from 'react'
import Menu from './menu/Menu'

import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.site__header}>
      <div className='container'>
        <Menu />
      </div>
    </header>
  )
}
