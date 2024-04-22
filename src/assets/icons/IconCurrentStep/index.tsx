import React from 'react'
import {Svg, Circle} from 'react-native-svg'
import {defaultColors} from 'src/configs/colors'

type IProps = {
  width?: number
  height?: number
  color?: string
}

const IconCurrentStep = ({width = 12, height = 12, color = defaultColors.green500}: IProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
      <Circle
        cx="6"
        cy="6"
        r="6"
        fill={color === defaultColors.green500 ? defaultColors.green200 : defaultColors.transparent}
      />
      <Circle cx="6" cy="6" r="4" fill={color} />
    </Svg>
  )
}
export default IconCurrentStep
