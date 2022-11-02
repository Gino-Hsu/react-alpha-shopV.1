import React from 'react'
import ProgressGroups from './ProgressGroups'

import './Progress.css'

export default function Progress() {
  return (
    <section className='progress-container col col-12'>
      <ProgressGroups step='1' label='寄送地址' />
      <span className='progress-bar' data-order='1'></span>
      <ProgressGroups step='2' label='運送方式' />
      <span className='progress-bar' data-order='2'></span>
      <ProgressGroups step='3' label='付款資訊' />
    </section>
  )
}
