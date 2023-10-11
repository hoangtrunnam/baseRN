import React from 'react'
import Svg, {Path} from 'react-native-svg'

interface IconCloseProps {
  width?: number
  height?: number
  color?: string
}

const IconClose = ({width = 24, height = 24, color = '#0E1C45'}: IconCloseProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path
        d="M15.7123 16.773L7.22699 8.28777C6.93708 7.99785 6.93708 7.51702 7.22699 7.22711C7.51691 6.93719 7.99774 6.93719 8.28765 7.22711L16.7729 15.7124C17.0628 16.0023 17.0628 16.4831 16.7729 16.773C16.483 17.063 16.0022 17.063 15.7123 16.773Z"
        fill="#333333"
      />
      <Path
        d="M7.22706 16.773C6.93715 16.4831 6.93715 16.0023 7.22706 15.7124L15.7123 7.22711C16.0023 6.93719 16.4831 6.93719 16.773 7.22711C17.0629 7.51702 17.0629 7.99785 16.773 8.28777L8.28772 16.773C7.99781 17.063 7.51698 17.063 7.22706 16.773Z"
        fill="#333333"
      />
    </Svg>
  )
}

export default IconClose
