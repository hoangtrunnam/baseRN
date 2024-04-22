import React from 'react'
import Svg, {Path, Rect} from 'react-native-svg'

interface IBankDefault {
  width?: number
  height?: number
}

const BankDefault = ({width = 40, height = 40}: IBankDefault) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 40 40" fill="none">
      <Rect width="40" height="40" rx="20" fill="#F3F4F6" />
      <Path
        d="M19.817 11.0306C19.9359 10.9898 20.0641 10.9898 20.183 11.0306L29.5947 14.2608C29.8365 14.3438 30 14.5803 30 14.8471V16H10V14.8471C10 14.5803 10.1635 14.3438 10.4053 14.2608L19.817 11.0306Z"
        fill="#9FA4B5"
      />
      <Path d="M12.0919 17V19H27.9089V17H12.0919Z" fill="#9FA4B5" />
      <Path d="M13.5 24V20H16V24H13.5Z" fill="#9FA4B5" />
      <Path d="M12.0919 25V27H27.9089V25H12.0919Z" fill="#9FA4B5" />
      <Path d="M26.5 24V20H24V24H26.5Z" fill="#9FA4B5" />
      <Path d="M21.3121 24V20H18.7792V24H21.3121Z" fill="#9FA4B5" />
      <Path
        d="M10 28V29.3831C10 29.7238 10.2634 30 10.5882 30H29.4118C29.7366 30 30 29.7238 30 29.3831V28H10Z"
        fill="#9FA4B5"
      />
    </Svg>
  )
}

export default BankDefault
