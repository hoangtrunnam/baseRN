import React from 'react'
import {Path, Svg} from 'react-native-svg'

interface IProps {
  width?: number
  height?: number
  color?: string
}

const IconAddCircle = ({width = 25, height = 24, color = '#FF6E00'}: IProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <Path
        d="M12.25 22.75C6.32 22.75 1.5 17.93 1.5 12C1.5 6.07 6.32 1.25 12.25 1.25C18.18 1.25 23 6.07 23 12C23 17.93 18.18 22.75 12.25 22.75ZM12.25 2.75C7.15 2.75 3 6.9 3 12C3 17.1 7.15 21.25 12.25 21.25C17.35 21.25 21.5 17.1 21.5 12C21.5 6.9 17.35 2.75 12.25 2.75Z"
        fill={color}
      />
      <Path
        d="M16.25 12.75H8.25C7.84 12.75 7.5 12.41 7.5 12C7.5 11.59 7.84 11.25 8.25 11.25H16.25C16.66 11.25 17 11.59 17 12C17 12.41 16.66 12.75 16.25 12.75Z"
        fill={color}
      />
      <Path
        d="M12.25 16.75C11.84 16.75 11.5 16.41 11.5 16V8C11.5 7.59 11.84 7.25 12.25 7.25C12.66 7.25 13 7.59 13 8V16C13 16.41 12.66 16.75 12.25 16.75Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconAddCircle
