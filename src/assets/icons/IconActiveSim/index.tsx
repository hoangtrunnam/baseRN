import React from 'react'
import Svg, {Circle, Path} from 'react-native-svg'
import {defaultColors} from 'src/configs/colors'

type IProps = {
  width?: number
  height?: number
  color?: string
}

const IconActiveSim = ({width = 32, height = 32}: IProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path
        d="M9 5V4C9 2.34315 10.3431 1 12 1H19.7726C20.5094 1 21.2205 1.27119 21.7702 1.76186L29.9977 9.10537C30.6354 9.67455 31 10.4887 31 11.3435V28C31 29.6569 29.6569 31 28 31H12C10.3431 31 9 29.6569 9 28V25"
        stroke={defaultColors.Primary500}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 15V27"
        stroke={defaultColors.Primary500}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M27 21H20"
        stroke={defaultColors.Primary500}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.9999 15H24.9999C26.1045 15 26.9999 15.8954 26.9999 17V25C26.9999 26.1046 26.1045 27 24.9999 27H14.9998C13.8952 27 12.9998 26.1046 12.9998 25V24"
        stroke={defaultColors.Primary500}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx="10" cy="13" r="7" stroke="#FF6E00" strokeWidth="2" />
      <Path
        d="M7 13L9 15L13 11"
        stroke="#FF6E00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default IconActiveSim
