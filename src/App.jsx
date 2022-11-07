import React, { useState } from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

import './reset.module.scss'
import './base.module.scss'

function App() {
  const [theme, setTeme] = useState('light')

  function changeThemeHandler() {
    if (theme === 'light') {
      setTeme('dark')
    } else {
      setTeme('light')
    }
  }

  return (
    <div className='App' datatheme={theme}>
      <Header changeTheme={changeThemeHandler} />
      <Main />
      <Footer />
    </div>
  )
}

export default App
