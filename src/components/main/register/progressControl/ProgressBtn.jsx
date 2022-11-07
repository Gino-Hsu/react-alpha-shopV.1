import React from 'react'

export default function ProgressBtn({ type, intext, disabled }) {
  return (
    <button className={type} disabled={disabled}>
      {intext}
    </button>
  )
}
