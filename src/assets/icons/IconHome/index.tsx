import React from 'react'
import Svg, {Path} from 'react-native-svg'

interface IconHomeProps {
  width?: number
  height?: number
  color?: string
}

const IconHome = ({width = 24, height = 24, color = '#BBBBBB'}: IconHomeProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
        fill={color}
      />
      <Path d="M8 16L13.991 14L16 8L10 10L8 16Z" fill={color} />
    </Svg>
  )
}

export default IconHome
