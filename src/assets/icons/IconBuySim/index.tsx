import React from 'react'
import Svg, {Path, Rect} from 'react-native-svg'
import {defaultColors} from 'src/configs/colors'

type IProps = {
  width?: number
  height?: number
  color?: string
}

const IconBuySim = ({width = 32, height = 32, color = '#FF6E00'}: IProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path
        d="M5 9V4C5 2.34315 6.34315 1 8 1H15.7726C16.5094 1 17.2205 1.27119 17.7702 1.76186L25.9977 9.10537C26.6354 9.67455 27 10.4887 27 11.3435V28C27 29.6569 25.6569 31 24 31H8C6.34315 31 5 29.6569 5 28V15"
        stroke={defaultColors.primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect x="9" y="15" width="14" height="12" rx="2" stroke={color} strokeWidth="2" />
      <Path
        d="M16 15V27"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 21H16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default IconBuySim
