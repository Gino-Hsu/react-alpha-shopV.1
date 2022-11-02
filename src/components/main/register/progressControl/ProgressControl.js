import React from 'react'
import ProgressBtn from './ProgressBtn'

import './ProgressControl.css'

export default function ProgressControl() {
  return (
    <section className='progress-control-container'>
      <section className='progress-control_button-group' data-phase='address'>
        <ProgressBtn
          type='progress-control_btn btn-back'
          intext='&larr; 上一步'
          disabled='disabled'
        />
        <ProgressBtn
          type='progress-control_btn btn-prinary'
          intext='下一步 &rarr;'
          disabled=''
        />
      </section>
    </section>
  )
}
