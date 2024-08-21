import * as React from "react"
const LightSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={72}
    height={83}
    viewBox="0 0 72 83"
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="rgba(255,255,255, 0.5)"
        d="M20.654 60.898a50 50 0 0 0 30.784-.677L37.644 20.597a8.044 8.044 0 0 1-4.952.109L20.654 60.898Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={70.783}
        height={82.403}
        x={0.654}
        y={0.597}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_5_5" stdDeviation={10} />
      </filter>
    </defs>
  </svg>
)
export { LightSvg };
