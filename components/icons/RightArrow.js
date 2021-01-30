import * as React from 'react'

function SvgRightArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="rightArrow_svg__feather rightArrow_svg__feather-chevron-right"
      width="24px"
      height="24px"
      {...props}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}

export default SvgRightArrow
