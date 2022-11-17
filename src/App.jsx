import React from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { useTheme } from './context/ThemeContext'

import './reset.module.scss'
import './base.module.scss'

function App() {
  const theme = useTheme()

  return (
    <div className='App' datatheme={theme}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
