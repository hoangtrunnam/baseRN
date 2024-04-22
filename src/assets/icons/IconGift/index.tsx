import React from 'react'
import Svg, {Path} from 'react-native-svg'

interface IconGiftProps {
  width?: number
  height?: number
  color?: string
}

const IconGift = ({width = 24, height = 24, color = '#BBBBBB'}: IconGiftProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path d="M16 12H18V16H16V12Z" fill={color} />
      <Path
        d="M20 7V5C20 3.897 19.103 3 18 3H5C3.346 3 2 4.346 2 6V18C2 20.201 3.794 21 5 21H20C21.103 21 22 20.103 22 19V9C22 7.897 21.103 7 20 7ZM5 5H18V7H5C4.74252 6.98848 4.49941 6.87809 4.32128 6.69182C4.14315 6.50554 4.04373 6.25774 4.04373 6C4.04373 5.74226 4.14315 5.49446 4.32128 5.30818C4.49941 5.12191 4.74252 5.01152 5 5ZM20 19H5.012C4.55 18.988 4 18.805 4 18V8.815C4.314 8.928 4.647 9 5 9H20V19Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconGift
