import React from 'react'

import './Form.css'

export default function Form({ type, title, children }) {
  return (
    <form data-phase={type}>
      <h3 class='form-title'>{title}</h3>
      <section class='form-body'>{children}</section>
    </form>
  )
}
