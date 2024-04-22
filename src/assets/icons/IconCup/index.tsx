import React from 'react'
import Svg, {Path, Defs, Stop, LinearGradient} from 'react-native-svg'

type CupProps = {
  width?: number
  height?: number
  color?: string
}

const IconCup = ({width = 16, height = 16}: CupProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M7.5 12.1666H6C5.26667 12.1666 4.66667 12.7666 4.66667 13.4999V13.6666H4C3.72667 13.6666 3.5 13.8932 3.5 14.1666C3.5 14.4399 3.72667 14.6666 4 14.6666H12C12.2733 14.6666 12.5 14.4399 12.5 14.1666C12.5 13.8932 12.2733 13.6666 12 13.6666H11.3333V13.4999C11.3333 12.7666 10.7333 12.1666 10 12.1666H8.5V10.6399C8.33333 10.6599 8.16667 10.6666 8 10.6666C7.83333 10.6666 7.66667 10.6599 7.5 10.6399V12.1666Z"
        fill="url(#paint0_linear_1951_37924)"
      />
      <Path
        d="M12.3195 7.75992C12.7595 7.59325 13.1462 7.31992 13.4529 7.01325C14.0729 6.32659 14.4795 5.50659 14.4795 4.54659C14.4795 3.58659 13.7262 2.83325 12.7662 2.83325H12.3929C11.9595 1.94659 11.0529 1.33325 9.99953 1.33325H5.99953C4.9462 1.33325 4.03953 1.94659 3.6062 2.83325H3.23286C2.27286 2.83325 1.51953 3.58659 1.51953 4.54659C1.51953 5.50659 1.9262 6.32659 2.5462 7.01325C2.85286 7.31992 3.23953 7.59325 3.67953 7.75992C4.37286 9.46659 6.03953 10.6666 7.99953 10.6666C9.95953 10.6666 11.6262 9.46659 12.3195 7.75992ZM9.89287 5.63325L9.47953 6.13992C9.41287 6.21325 9.3662 6.35992 9.37287 6.45992L9.41286 7.11325C9.43953 7.51325 9.15286 7.71992 8.77953 7.57325L8.17286 7.33325C8.07953 7.29992 7.91953 7.29992 7.8262 7.33325L7.21953 7.57325C6.8462 7.71992 6.55953 7.51325 6.5862 7.11325L6.6262 6.45992C6.63286 6.35992 6.5862 6.21325 6.51953 6.13992L6.1062 5.63325C5.8462 5.32659 5.95953 4.98659 6.3462 4.88659L6.97953 4.72659C7.07953 4.69992 7.19953 4.60659 7.25286 4.51992L7.6062 3.97325C7.8262 3.63325 8.17286 3.63325 8.39287 3.97325L8.7462 4.51992C8.79953 4.60659 8.91953 4.69992 9.01953 4.72659L9.65286 4.88659C10.0395 4.98659 10.1529 5.32659 9.89287 5.63325Z"
        fill="url(#paint1_linear_1951_37924)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1951_37924"
          x1="3.76807"
          y1="15.281"
          x2="7.7627"
          y2="8.57559"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0.0264668" stopColor="#FFF200" />
          <Stop offset="0.0575709" stopColor="#FFE000" />
          <Stop offset="0.1399" stopColor="#FFB500" />
          <Stop offset="0.2198" stopColor="#FF9300" />
          <Stop offset="0.2954" stopColor="#FF7B00" />
          <Stop offset="0.3651" stopColor="#FF6C00" />
          <Stop offset="0.4232" stopColor="#FF6700" />
          <Stop offset="0.5339" stopColor="#FF570D" />
          <Stop offset="0.7502" stopColor="#FF2C2D" />
          <Stop offset="0.7848" stopColor="#FF2533" />
          <Stop offset="0.8364" stopColor="#FE203C" />
          <Stop offset="0.9184" stopColor="#FB1253" />
          <Stop offset="1" stopColor="#F70070" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1951_37924"
          x1="1.90555"
          y1="12.0908"
          x2="12.4254"
          y2="1.12018"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0.0264668" stopColor="#FFF200" />
          <Stop offset="0.0575709" stopColor="#FFE000" />
          <Stop offset="0.1399" stopColor="#FFB500" />
          <Stop offset="0.2198" stopColor="#FF9300" />
          <Stop offset="0.2954" stopColor="#FF7B00" />
          <Stop offset="0.3651" stopColor="#FF6C00" />
          <Stop offset="0.4232" stopColor="#FF6700" />
          <Stop offset="0.5339" stopColor="#FF570D" />
          <Stop offset="0.7502" stopColor="#FF2C2D" />
          <Stop offset="0.7848" stopColor="#FF2533" />
          <Stop offset="0.8364" stopColor="#FE203C" />
          <Stop offset="0.9184" stopColor="#FB1253" />
          <Stop offset="1" stopColor="#F70070" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default IconCup
