import React from 'react'
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg'

type SchoolIconProps = {
  width?: number
  height?: number
  color?: string
}

const SchoolIcon = ({width = 24, height = 24, color = '#666666'}: SchoolIconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
      <G clip-path="url(#clip0_38_54)">
        <Path
          d="M3.75 9.885V12.885L9 15.75L14.25 12.885V9.885L9 12.75L3.75 9.885ZM9 2.25L0.75 6.75L9 11.25L15.75 7.5675V12.75H17.25V6.75L9 2.25Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_38_54">
          <Rect width="18" height="18" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SchoolIcon
