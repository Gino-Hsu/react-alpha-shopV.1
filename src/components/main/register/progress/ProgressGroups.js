import React from 'react'

import './ProgressGroups.css'

export default function ProgressGroups({ svgHerf, step, label }) {
  return (
    <span className='progress-group'>
      <div className='progress-icon'>
        <span className='text'>{step}</span>
      </div>
      <span className='progress-label'>{label}</span>
    </span>
  )
}
