import React from 'react'
import Svg, {Path} from 'react-native-svg'

type CheckedProps = {
  width?: number
  height?: number
  color?: string
}

const IconClockOutline = ({width = 20, height = 20, color = '#B3B3B3'}: CheckedProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M9.99984 18.9584C5.05817 18.9584 1.0415 14.9417 1.0415 10.0001C1.0415 5.05842 5.05817 1.04175 9.99984 1.04175C14.9415 1.04175 18.9582 5.05842 18.9582 10.0001C18.9582 14.9417 14.9415 18.9584 9.99984 18.9584ZM9.99984 2.29175C5.74984 2.29175 2.2915 5.75008 2.2915 10.0001C2.2915 14.2501 5.74984 17.7084 9.99984 17.7084C14.2498 17.7084 17.7082 14.2501 17.7082 10.0001C17.7082 5.75008 14.2498 2.29175 9.99984 2.29175Z"
        fill={color}
      />
      <Path
        d="M13.0919 13.275C12.9835 13.275 12.8752 13.25 12.7752 13.1833L10.1919 11.6416C9.55019 11.2583 9.0752 10.4166 9.0752 9.67497V6.2583C9.0752 5.91663 9.35853 5.6333 9.7002 5.6333C10.0419 5.6333 10.3252 5.91663 10.3252 6.2583V9.67497C10.3252 9.97497 10.5752 10.4166 10.8335 10.5666L13.4169 12.1083C13.7169 12.2833 13.8085 12.6666 13.6335 12.9666C13.5085 13.1666 13.3002 13.275 13.0919 13.275Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconClockOutline