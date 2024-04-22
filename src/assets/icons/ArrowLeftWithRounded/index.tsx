import React from 'react'
import Svg, {Path, Circle} from 'react-native-svg'

type ArrowLeftWithRoundedProps = {
  width: string | number
  height: string | number
  color?: string
}

const ArrowLeftWithRounded = ({width, height, color = '#536087'}: ArrowLeftWithRoundedProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 40 40" fill="none">
      <Circle cx="20" cy="20" r="20" fill="white" />
      <Path
        d="M21.2931 14.293L15.5861 20L21.2931 25.707L22.7071 24.293L18.4141 20L22.7071 15.707L21.2931 14.293Z"
        fill={color}
      />
    </Svg>
  )
}

export default ArrowLeftWithRounded
