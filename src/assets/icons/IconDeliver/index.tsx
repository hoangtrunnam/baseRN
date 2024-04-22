import React from 'react'
import Svg, {Circle, Line} from 'react-native-svg'

type IProps = {
  width?: number
  height?: number
  color?: string
}

const IconDeliver = ({width = 20, height = 44, color = '#3CCF4E'}: IProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 44" fill="none">
      <Circle cx="10" cy="6" r="6" fill="#EBFAED" />
      <Circle cx="10" cy="6" r="4" fill={color} />
      <Line x1="10.25" y1="12" x2="10.25" y2="42" stroke="#E5E5E5" strokeWidth="0.5" />
    </Svg>
  )
}
export default IconDeliver
