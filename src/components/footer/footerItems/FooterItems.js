import React from 'react'

export function Logo({ imgSrc }) {
  return (
    <div className='footer-logo-container'>
      <img src={imgSrc} alt='Logo' />
    </div>
  )
}

export function FooterSection({ title, children }) {
  return (
    <section className='footer-section'>
      <h2 className='section-title'>{title}</h2>
      <div className='section-content'>{children}</div>
    </section>
  )
}

export function PageLink({ intext }) {
  return (
    <div className='page-link cursor-point' href='#'>
      {intext}
    </div>
  )
}
