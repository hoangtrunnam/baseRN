import React from 'react'
import Svg, {Path} from 'react-native-svg'

type UnCheckedProps = {
  width?: number
  height?: number
  color?: string
}

const IconUnChecked = ({width = 24, height = 24, color = '#B3B3B3'}: UnCheckedProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconUnChecked
