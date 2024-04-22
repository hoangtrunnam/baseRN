import React from 'react'
import Svg, {Path} from 'react-native-svg'

interface ArrowFillProps {
  width?: number
  height?: number
  color?: string
}

const ArrowFill = ({width = 32, height = 32, color = '#0E1C45'}: ArrowFillProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 8 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.72239 7.49668C1.39697 7.17125 0.869305 7.17125 0.543888 7.49668C0.218472 7.82212 0.218472 8.34975 0.543888 8.6752L3.46055 11.5919C3.78597 11.9173 4.31364 11.9173 4.63905 11.5919L7.55573 8.6752C7.88116 8.34975 7.88116 7.82212 7.55573 7.49668C7.23029 7.17125 6.70265 7.17125 6.37721 7.49668L4.88314 8.99076L4.88314 1.0026C4.88314 0.542354 4.51006 0.16927 4.04981 0.16927C3.58956 0.16927 3.21647 0.542354 3.21647 1.0026L3.21647 8.99076L1.72239 7.49668Z"
        fill={color}
      />
    </Svg>
  )
}

export default ArrowFill
