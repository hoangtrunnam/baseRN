import React from 'react'
import Svg, {Path} from 'react-native-svg'

type IProps = {
  width?: number
  height?: number
  color?: string
}

const IconBoldHeart = ({width = 24, height = 24, color = '#FF6E00'}: IProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.44 3.10001C14.63 3.10001 13.01 3.98001 12 5.33001C10.99 3.98001 9.37 3.10001 7.56 3.10001C4.49 3.10001 2 5.60001 2 8.69001C2 9.88001 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.88001 22 8.69001C22 5.60001 19.51 3.10001 16.44 3.10001Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconBoldHeart
