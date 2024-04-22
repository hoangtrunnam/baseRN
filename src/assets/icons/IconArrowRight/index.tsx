import React from 'react'
import Svg, {Path} from 'react-native-svg'

type IProps = {
  width?: number
  height?: number
  color?: string
}

const IconArrowRight = ({width = 20, height = 20, color = '#292D32'}: IProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M7.42501 17.225C7.26668 17.225 7.10834 17.1667 6.98334 17.0417C6.74168 16.8 6.74168 16.4 6.98334 16.1583L12.4167 10.725C12.8167 10.325 12.8167 9.67502 12.4167 9.27502L6.98334 3.84168C6.74168 3.60002 6.74168 3.20002 6.98334 2.95835C7.22501 2.71668 7.62501 2.71668 7.86668 2.95835L13.3 8.39168C13.725 8.81668 13.9667 9.39168 13.9667 10C13.9667 10.6084 13.7333 11.1834 13.3 11.6084L7.86668 17.0417C7.74168 17.1584 7.58334 17.225 7.42501 17.225Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconArrowRight
