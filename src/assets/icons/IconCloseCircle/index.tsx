import React from 'react'
import Svg, {Path} from 'react-native-svg'

type CloseProps = {
  width?: number
  height?: number
  color?: string
}

const IconCloseCircle = ({width = 49, height = 48, color = '#FF6E00'}: CloseProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 49 48" fill="none">
      <Path
        d="M24.5 45.5C12.64 45.5 3 35.86 3 24C3 12.14 12.64 2.5 24.5 2.5C36.36 2.5 46 12.14 46 24C46 35.86 36.36 45.5 24.5 45.5ZM24.5 5.5C14.3 5.5 6 13.8 6 24C6 34.2 14.3 42.5 24.5 42.5C34.7 42.5 43 34.2 43 24C43 13.8 34.7 5.5 24.5 5.5Z"
        fill={color}
      />
      <Path
        d="M18.8402 31.16C18.4602 31.16 18.0802 31.02 17.7802 30.72C17.2002 30.14 17.2002 29.18 17.7802 28.6L29.1002 17.28C29.6802 16.7 30.6402 16.7 31.2202 17.28C31.8002 17.86 31.8002 18.82 31.2202 19.4L19.9002 30.72C19.6202 31.02 19.2202 31.16 18.8402 31.16Z"
        fill={color}
      />
      <Path
        d="M30.1602 31.16C29.7802 31.16 29.4002 31.02 29.1002 30.72L17.7802 19.4C17.2002 18.82 17.2002 17.86 17.7802 17.28C18.3602 16.7 19.3202 16.7 19.9002 17.28L31.2202 28.6C31.8002 29.18 31.8002 30.14 31.2202 30.72C30.9202 31.02 30.5402 31.16 30.1602 31.16Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconCloseCircle
