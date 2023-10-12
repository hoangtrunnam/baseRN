import React from 'react'
import Svg, {Path} from 'react-native-svg'

type HiddenEyeProps = {
  width?: number
  height?: number
  color?: string
}

const HiddenEye = ({width = 24, height = 24, color = '#9FA4B5'}: HiddenEyeProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M8.073 12.194L4.212 8.33297C2.692 9.98997 2.116 11.65 2.106 11.684L2 12L2.105 12.316C2.127 12.383 4.421 19 12.054 19C12.983 19 13.829 18.898 14.606 18.727L11.86 15.981C10.8713 15.9325 9.93595 15.518 9.23598 14.818C8.53601 14.118 8.12147 13.1827 8.073 12.194ZM12.054 4.99997C10.199 4.99997 8.679 5.40397 7.412 5.99797L3.707 2.29297L2.293 3.70697L20.293 21.707L21.707 20.293L18.409 16.995C21.047 15.042 21.988 12.358 22.002 12.316L22.107 12L22.002 11.684C21.98 11.617 19.687 4.99997 12.054 4.99997ZM13.96 12.546C14.147 11.869 13.988 11.107 13.468 10.586C12.948 10.065 12.185 9.90697 11.508 10.094L10 8.58597C10.618 8.20595 11.3285 8.00322 12.054 7.99997C14.26 7.99997 16.054 9.79397 16.054 12C16.051 12.7253 15.8479 13.4357 15.467 14.053L13.96 12.546Z"
        fill={color}
      />
    </Svg>
  )
}

export default HiddenEye