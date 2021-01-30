import * as React from 'react'

function SvgLeftArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="leftArrow_svg__feather leftArrow_svg__feather-chevron-left"
      width="24px"
      height="24px"
      {...props}
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

export default SvgLeftArrow
