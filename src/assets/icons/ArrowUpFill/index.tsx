import React from 'react'
import Svg, {Path} from 'react-native-svg'
import {defaultColors} from 'src/configs/colors'

type ArrowDownFillProps = {
  width?: number
  height?: number
  color?: string
}

const ArrowUpFill = ({
  width = 24,
  height = 24,
  color = defaultColors.inkViolet500,
}: ArrowDownFillProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.3622 14C16.6359 14 16.9312 13.8885 16.9848 13.6099C17.0326 13.3612 16.9679 13.0921 16.7908 12.899L12.5051 8.22802C12.2261 7.92399 11.7739 7.92399 11.4949 8.22802L7.20921 12.899C7.0321 13.0921 6.96744 13.3612 7.01524 13.6099C7.06879 13.8885 7.3641 14 7.63778 14L16.3622 14Z"
        fill={color}
      />
    </Svg>
  )
}

export default ArrowUpFill
