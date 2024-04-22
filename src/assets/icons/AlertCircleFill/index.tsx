import React from 'react'
import Svg, {Path} from 'react-native-svg'

type AlertCircleFillProps = {
  width?: number
  height?: number
  color?: string
}

const AlertCircleFill = ({width = 40, height = 40, color}: AlertCircleFillProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM11.0127 6.96182C11.0127 6.40255 10.5593 5.94916 10 5.94916C9.44074 5.94916 8.98736 6.40255 8.98736 6.96182V10.6074C8.98736 11.1667 9.44074 11.6201 10 11.6201C10.5593 11.6201 11.0127 11.1667 11.0127 10.6074V6.96182ZM10 12.6327C9.44074 12.6327 8.98736 13.0861 8.98736 13.6454C8.98736 14.2046 9.44074 14.658 10 14.658H10.0091C10.5684 14.658 11.0218 14.2046 11.0218 13.6454C11.0218 13.0861 10.5684 12.6327 10.0091 12.6327H10Z"
        fill={color}
      />
    </Svg>
  )
}

export default AlertCircleFill
