import React from 'react'
import Svg, {Path} from 'react-native-svg'
import {defaultColors} from 'src/configs/colors'

type IIcon = {
  width?: number
  height?: number
  color?: string
}

const IconUnChecked = ({width = 25, height = 24, color = defaultColors.ink300}: IIcon) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <Path
        d="M12.5 22.75C6.57 22.75 1.75 17.93 1.75 12C1.75 6.07 6.57 1.25 12.5 1.25C18.43 1.25 23.25 6.07 23.25 12C23.25 17.93 18.43 22.75 12.5 22.75ZM12.5 2.75C7.4 2.75 3.25 6.9 3.25 12C3.25 17.1 7.4 21.25 12.5 21.25C17.6 21.25 21.75 17.1 21.75 12C21.75 6.9 17.6 2.75 12.5 2.75Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconUnChecked
