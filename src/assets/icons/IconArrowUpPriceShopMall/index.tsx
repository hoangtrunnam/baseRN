import React from 'react'
import Svg, {Path} from 'react-native-svg'

type IProps = {
  width?: number
  height?: number
  color?: string
}

const IconArrowUpPriceShopMall = ({width = 24, height = 24, color = '#292D32'}: IProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18.07 10.3199C17.88 10.3199 17.69 10.2499 17.54 10.0999L12 4.55994L6.46 10.0999C6.17 10.3899 5.69 10.3899 5.4 10.0999C5.11 9.80994 5.11 9.32994 5.4 9.03994L11.47 2.96994C11.76 2.67994 12.24 2.67994 12.53 2.96994L18.6 9.03994C18.89 9.32994 18.89 9.80994 18.6 10.0999C18.46 10.2499 18.26 10.3199 18.07 10.3199Z"
        fill={color}
      />
      <Path
        d="M12 21.2499C11.59 21.2499 11.25 20.9099 11.25 20.4999V3.66992C11.25 3.25992 11.59 2.91992 12 2.91992C12.41 2.91992 12.75 3.25992 12.75 3.66992V20.4999C12.75 20.9099 12.41 21.2499 12 21.2499Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconArrowUpPriceShopMall