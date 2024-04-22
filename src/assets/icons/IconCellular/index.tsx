import React from 'react'
import Svg, {Path} from 'react-native-svg'
import {defaultColors} from 'src/configs/colors'

type IProps = {
  width?: number
  height?: number
  color?: string
}

const IconCellular = ({width = 32, height = 32, color = defaultColors.primary}: IProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path
        d="M11.0001 6H3.00008C2.61508 6 2.26608 6.22 2.09908 6.567C1.93308 6.913 1.97908 7.325 2.21908 7.625L6.00008 12.351V25C6.00008 25.552 6.44708 26 7.00008 26C7.55308 26 8.00008 25.552 8.00008 25V12.351L11.7811 7.624C12.0211 7.324 12.0671 6.913 11.9011 6.566C11.7341 6.22 11.3851 6 11.0001 6ZM7.00008 10.399L5.08108 8H8.91908L7.00008 10.399Z"
        fill="#FF6E00"
      />
      <Path
        d="M15 17V25C15 25.552 14.553 26 14 26C13.447 26 13 25.552 13 25V17C13 16.448 13.447 16 14 16C14.553 16 15 16.448 15 17Z"
        fill={color}
      />
      <Path
        d="M20 14V25C20 25.552 19.553 26 19 26C18.447 26 18 25.552 18 25V14C18 13.448 18.447 13 19 13C19.553 13 20 13.448 20 14Z"
        fill={color}
      />
      <Path
        d="M25 11V25C25 25.552 24.553 26 24 26C23.447 26 23 25.552 23 25V11C23 10.448 23.447 10 24 10C24.553 10 25 10.448 25 11Z"
        fill={color}
      />
      <Path
        d="M30 7V25C30 25.552 29.553 26 29 26C28.447 26 28 25.552 28 25V7C28 6.448 28.447 6 29 6C29.553 6 30 6.448 30 7Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconCellular
