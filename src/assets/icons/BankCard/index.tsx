import React from 'react'
import Svg, {Path} from 'react-native-svg'

type BankCardProps = {
  width?: number
  height?: number
  color?: string
}

const BankCard = ({width = 24, height = 24, color = '#0E1C45'}: BankCardProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 23 19" fill="none">
      <Path
        d="M9.96199 13.6641C9.53827 13.6641 9.19477 14.0116 9.19477 14.4403C9.19477 14.8689 9.53827 15.2164 9.96199 15.2164H15.3965C15.8202 15.2164 16.1637 14.8689 16.1637 14.4403C16.1637 14.0116 15.8202 13.6641 15.3965 13.6641H9.96199Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.29018 3.57491C1.30149 3.57491 0.5 4.38573 0.5 5.38593V16.7695C0.5 17.7697 1.30149 18.5805 2.29018 18.5805H17.6346C18.6232 18.5805 19.4247 17.7697 19.4247 16.7695V5.38593C19.4247 4.38573 18.6232 3.57491 17.6346 3.57491H2.29018ZM2.03444 16.7695V11.2927H17.8903V16.7695C17.8903 16.9124 17.7758 17.0282 17.6346 17.0282H2.29018C2.14894 17.0282 2.03444 16.9124 2.03444 16.7695ZM2.03444 9.74044H17.8903V8.49066H2.03444V9.74044ZM17.8903 6.93835H2.03444V5.38593C2.03444 5.24304 2.14894 5.12721 2.29018 5.12721H17.6346C17.7758 5.12721 17.8903 5.24304 17.8903 5.38593V6.93835Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.8979 1.98734H6.88081C6.49234 1.98734 6.17742 1.67242 6.17742 1.28395C6.17742 0.895483 6.49234 0.580566 6.88081 0.580566H19.8979C21.335 0.580566 22.5 1.73526 22.5 3.15965V13.1818C22.5 13.5737 22.1823 13.8915 21.7903 13.8915C21.3984 13.8915 21.0806 13.5737 21.0806 13.1818V3.15965C21.0806 2.5122 20.5511 1.98734 19.8979 1.98734Z"
        fill={color}
      />
    </Svg>
  )
}

export default BankCard