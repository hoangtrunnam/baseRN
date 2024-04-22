import React from 'react'
import Svg, {Rect} from 'react-native-svg'

interface IProps {
  width?: number
  height?: number
  color?: string
}

const IconApplication = ({width = 33, height = 32}: IProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 33 32" fill="none">
      <Rect x="18.833" y="4" width="10" height="10" rx="2" stroke="#333333" strokeWidth="2" />
      <Rect x="4.83301" y="4" width="10" height="10" rx="5" stroke="#FF6E00" strokeWidth="2" />
      <Rect x="18.833" y="18" width="10" height="10" rx="2" stroke="#333333" strokeWidth="2" />
      <Rect x="4.83301" y="18" width="10" height="10" rx="2" stroke="#333333" strokeWidth="2" />
    </Svg>
  )
}

export default IconApplication
