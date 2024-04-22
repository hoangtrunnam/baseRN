import React from 'react'
import Svg, {Path, Defs, Stop, LinearGradient} from 'react-native-svg'

type CrownProps = {
  width?: number
  height?: number
  color?: string
}

const IconCrown = ({width = 16, height = 16}: CrownProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M11.3327 14.6666H4.66602C4.39268 14.6666 4.16602 14.44 4.16602 14.1666C4.16602 13.8933 4.39268 13.6666 4.66602 13.6666H11.3327C11.606 13.6666 11.8327 13.8933 11.8327 14.1666C11.8327 14.44 11.606 14.6666 11.3327 14.6666Z"
        fill="url(#paint0_linear_2824_46199)"
      />
      <Path
        d="M13.5668 3.67999L10.9001 5.58665C10.5468 5.83999 10.0401 5.68665 9.88681 5.27999L8.62681 1.91999C8.41348 1.33999 7.59348 1.33999 7.38015 1.91999L6.11348 5.27332C5.96015 5.68665 5.46015 5.83999 5.10681 5.57999L2.44015 3.67332C1.90681 3.29999 1.20015 3.82665 1.42015 4.44665L4.19348 12.2133C4.28681 12.48 4.54015 12.6533 4.82015 12.6533H11.1735C11.4535 12.6533 11.7068 12.4733 11.8001 12.2133L14.5735 4.44665C14.8001 3.82665 14.0935 3.29999 13.5668 3.67999ZM9.66681 9.83332H6.33348C6.06015 9.83332 5.83348 9.60665 5.83348 9.33332C5.83348 9.05999 6.06015 8.83332 6.33348 8.83332H9.66681C9.94015 8.83332 10.1668 9.05999 10.1668 9.33332C10.1668 9.60665 9.94015 9.83332 9.66681 9.83332Z"
        fill="url(#paint1_linear_2824_46199)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2824_46199"
          x1="4.39437"
          y1="14.8192"
          x2="4.77475"
          y2="12.629"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0.0264668" stop-color="#FFF200" />
          <Stop offset="0.0575709" stop-color="#FFE000" />
          <Stop offset="0.1399" stop-color="#FFB500" />
          <Stop offset="0.2198" stop-color="#FF9300" />
          <Stop offset="0.2954" stop-color="#FF7B00" />
          <Stop offset="0.3651" stop-color="#FF6C00" />
          <Stop offset="0.4232" stop-color="#FF6700" />
          <Stop offset="0.5339" stop-color="#FF570D" />
          <Stop offset="0.7502" stop-color="#FF2C2D" />
          <Stop offset="0.7848" stop-color="#FF2533" />
          <Stop offset="0.8364" stop-color="#FE203C" />
          <Stop offset="0.9184" stop-color="#FB1253" />
          <Stop offset="1" stop-color="#F70070" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_2824_46199"
          x1="1.7732"
          y1="14.3576"
          x2="14.2877"
          y2="3.21707"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0.0264668" stop-color="#FFF200" />
          <Stop offset="0.0575709" stop-color="#FFE000" />
          <Stop offset="0.1399" stop-color="#FFB500" />
          <Stop offset="0.2198" stop-color="#FF9300" />
          <Stop offset="0.2954" stop-color="#FF7B00" />
          <Stop offset="0.3651" stop-color="#FF6C00" />
          <Stop offset="0.4232" stop-color="#FF6700" />
          <Stop offset="0.5339" stop-color="#FF570D" />
          <Stop offset="0.7502" stop-color="#FF2C2D" />
          <Stop offset="0.7848" stop-color="#FF2533" />
          <Stop offset="0.8364" stop-color="#FE203C" />
          <Stop offset="0.9184" stop-color="#FB1253" />
          <Stop offset="1" stop-color="#F70070" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default IconCrown
