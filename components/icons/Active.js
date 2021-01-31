import * as React from 'react'

function SvgActive(props) {
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
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export default SvgActive
