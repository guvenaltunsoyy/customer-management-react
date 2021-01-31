import * as React from 'react'

function SvgRejected(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}

export default SvgRejected
