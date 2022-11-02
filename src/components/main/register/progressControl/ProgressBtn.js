import React from 'react'

export default function ProgressBtn({ type, intext, disabled }) {
  return (
    <div className={type} disabled={disabled}>
      {intext}
    </div>
  )
}
