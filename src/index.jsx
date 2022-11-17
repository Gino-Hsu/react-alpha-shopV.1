import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvuder } from './context/ThemeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvuder>
      <App />
    </ThemeProvuder>
  </React.StrictMode>
)
