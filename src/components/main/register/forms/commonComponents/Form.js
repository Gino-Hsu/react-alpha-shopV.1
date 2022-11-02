import React from 'react'

import './Form.css'

export default function Form({ type, title, children }) {
  return (
    <form data-phase={type}>
      <h3 className='form-title'>{title}</h3>
      <section className='form-body'>{children}</section>
    </form>
  )
}
