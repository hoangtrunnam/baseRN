import React from 'react'
import Svg, {Path} from 'react-native-svg'
import {defaultColors} from 'src/configs/colors'

type IProps = {
  width?: number
  height?: number
  color?: string
}

const IconBuyCard = ({width = 32, height = 32, color = '#FF6E00'}: IProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path
        d="M3.78455 18.086L8.08572 25.5358C9.19029 27.449 11.6367 28.1045 13.5498 26.9999L26.7509 19.3783C28.6641 18.2737 29.3196 15.8274 28.215 13.9142L23.9138 6.46434C22.8093 4.55117 20.3629 3.89567 18.4497 5.00024L5.24865 12.6219C3.33548 13.7265 2.67998 16.1728 3.78455 18.086Z"
        stroke={defaultColors.primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 29H28"
        stroke={defaultColors.primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.73572 16.5562L21.1138 8.25497"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.3014 24.4639L14.177 22.8037"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default IconBuyCard
