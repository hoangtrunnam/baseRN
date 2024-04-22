import React from 'react'
import Svg, {Path} from 'react-native-svg'

type ArrowDownTriangleProps = {
  width?: number
  height?: number
  color?: string
}

const ArrowDownTriangle = ({
  width = 24,
  height = 24,
  color = '#9FA4B5',
}: ArrowDownTriangleProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 19 18" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.23615 6.75C6.03089 6.75 5.8094 6.84759 5.76924 7.09135C5.73339 7.30891 5.78189 7.54444 5.91472 7.71335L9.129 11.8005C9.33821 12.0665 9.67741 12.0665 9.88662 11.8005L13.1009 7.71335C13.2337 7.54444 13.2822 7.30891 13.2464 7.09135C13.2062 6.84759 12.9847 6.75 12.7795 6.75L6.23615 6.75Z"
        fill={color}
      />
    </Svg>
  )
}

export default ArrowDownTriangle
