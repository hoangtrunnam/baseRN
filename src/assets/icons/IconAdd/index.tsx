import React from 'react'
import Svg, {Path} from 'react-native-svg'

interface IProps {
  width?: number
  height?: number
  color?: string
}

const IconAdd = ({width = 20, height = 20, color = '#333333'}: IProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M13.0936 13.9775L6.02252 6.90639C5.78093 6.6648 5.78093 6.2641 6.02252 6.02251C6.26412 5.78091 6.66481 5.78091 6.90641 6.02251L13.9775 13.0936C14.2191 13.3352 14.2191 13.7359 13.9775 13.9775C13.7359 14.2191 13.3352 14.2191 13.0936 13.9775Z"
        fill={color}
      />
      <Path
        d="M6.02252 13.9775C5.78093 13.7359 5.78093 13.3352 6.02252 13.0936L13.0936 6.02251C13.3352 5.78091 13.7359 5.78091 13.9775 6.02251C14.2191 6.2641 14.2191 6.6648 13.9775 6.90639L6.90641 13.9775C6.66481 14.2191 6.26412 14.2191 6.02252 13.9775Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconAdd
