import React from 'react'
import ProgressGroups from './ProgressGroups'

import './Progress.css'

export default function Progress() {
  return (
    <section class='progress-container col col-12'>
      <ProgressGroups svgHerf='' step='1' label='寄送地址' />
      <span class='progress-bar' data-order='1'></span>
      <ProgressGroups svgHerf='' step='2' label='運送方式' />
      <span class='progress-bar' data-order='2'></span>
      <ProgressGroups svgHerf='' step='3' label='付款資訊' />
    </section>
  )
}
