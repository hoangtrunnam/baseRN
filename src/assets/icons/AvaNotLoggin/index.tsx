import React from 'react'
import Svg, {Circle, Path} from 'react-native-svg'

interface IProps {
  width?: number
  height?: number
  color?: string
}

const AvaNotLoggin = ({width = 40, height = 40, color = '#B7BBC7'}: IProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 40 40" fill="none">
      <Circle cx="20" cy="20" r="20" fill="white" />
      <Path
        d="M20 1.25C9.83562 1.25 1.25 9.83562 1.25 20C1.25 30.1644 9.83562 38.75 20 38.75C30.1644 38.75 38.75 30.1644 38.75 20C38.75 9.83562 30.1644 1.25 20 1.25ZM20 10.625C23.2381 10.625 25.625 13.01 25.625 16.25C25.625 19.49 23.2381 21.875 20 21.875C16.7638 21.875 14.375 19.49 14.375 16.25C14.375 13.01 16.7638 10.625 20 10.625ZM10.4263 28.9475C12.1081 26.4725 14.9131 24.8225 18.125 24.8225H21.875C25.0888 24.8225 27.8919 26.4725 29.5738 28.9475C27.1775 31.5125 23.7781 33.125 20 33.125C16.2219 33.125 12.8225 31.5125 10.4263 28.9475Z"
        fill={color}
      />
    </Svg>
  )
}

export default AvaNotLoggin
