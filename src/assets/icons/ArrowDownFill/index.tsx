import React from 'react'
import Svg, {Path} from 'react-native-svg'
import {defaultColors} from 'src/configs/colors'

type ArrowDownFillProps = {
  width?: number
  height?: number
  color?: string
}

const ArrowDownFill = ({
  width = 24,
  height = 24,
  color = defaultColors.inkViolet500,
}: ArrowDownFillProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.63778 9C7.3641 9 7.06879 9.11153 7.01524 9.39012C6.96744 9.63875 7.0321 9.90793 7.20921 10.101L11.4949 14.772C11.7739 15.076 12.2261 15.076 12.5051 14.772L16.7908 10.101C16.9679 9.90794 17.0326 9.63875 16.9848 9.39012C16.9312 9.11153 16.6359 9 16.3622 9L7.63778 9Z"
        fill={color}
      />
    </Svg>
  )
}

export default ArrowDownFill
