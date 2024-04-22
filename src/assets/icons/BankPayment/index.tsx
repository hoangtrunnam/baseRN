import React from 'react'
import Svg, {Path, Rect} from 'react-native-svg'

interface ISize {
  width?: number
  height?: number
  background?: string
  color?: string
}

/** icon bank */
const BankPayment: (props: ISize) => React.ReactElement = ({
  width = 24,
  height = 24,
  // background = 'none',
  // color = 'black',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 60 60" fill="none">
      <Rect width="60" height="60" rx="8" fill="none" />
      <Path
        d="M15 24V30.0015H16.5V39H15V43.5H39L43.5 43.5015V43.5H45V39H43.5V30.0015H45V24L30 15L15 24ZM21 39V30.0015H24V39H21ZM28.5 39V30.0015H31.5V39H28.5ZM39 39H36V30.0015H39V39ZM33 24C32.9999 24.3941 32.9222 24.7843 32.7713 25.1483C32.6204 25.5123 32.3993 25.8431 32.1206 26.1216C31.8419 26.4002 31.511 26.6212 31.1469 26.7719C30.7828 26.9226 30.3926 27.0001 29.9985 27C29.6044 26.9999 29.2142 26.9222 28.8502 26.7713C28.4862 26.6204 28.1554 26.3993 27.8769 26.1206C27.5983 25.8419 27.3773 25.511 27.2266 25.1469C27.0759 24.7828 26.9984 24.3926 26.9985 23.9985C26.9987 23.2027 27.315 22.4395 27.8779 21.8769C28.4408 21.3143 29.2042 20.9983 30 20.9985C30.7958 20.9987 31.559 21.315 32.1216 21.8779C32.6842 22.4408 33.0002 23.2042 33 24V24Z"
        fill="#536087"
      />
    </Svg>
  )
}

export default BankPayment
