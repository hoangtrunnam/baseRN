import React from 'react'
import Svg, {Path} from 'react-native-svg'

type IProps = {
  width?: number
  height?: number
  color?: string
}

const IconArrowDownPriceShopMall = ({width = 24, height = 24, color = '#292D32'}: IProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 21.2501C11.81 21.2501 11.62 21.1801 11.47 21.0301L5.4 14.9601C5.11 14.6701 5.11 14.1901 5.4 13.9001C5.69 13.6101 6.17 13.6101 6.46 13.9001L12 19.4401L17.54 13.9001C17.83 13.6101 18.31 13.6101 18.6 13.9001C18.89 14.1901 18.89 14.6701 18.6 14.9601L12.53 21.0301C12.38 21.1801 12.19 21.2501 12 21.2501Z"
        fill={color}
      />
      <Path
        d="M12 21.08C11.59 21.08 11.25 20.74 11.25 20.33V3.5C11.25 3.09 11.59 2.75 12 2.75C12.41 2.75 12.75 3.09 12.75 3.5V20.33C12.75 20.74 12.41 21.08 12 21.08Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconArrowDownPriceShopMall
