import React from 'react'
import Svg, {Path} from 'react-native-svg'

type BlackStarProps = {
  width?: number
  height?: number
  color?: string
}

const BlackStar = ({width = 24, height = 24, color}: BlackStarProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path
        d="M12.6568 2.40756C12.5333 2.15798 12.2787 2 12 2C11.7213 2 11.4667 2.15798 11.3432 2.40756L8.49548 8.16407L2.12674 9.0929C1.85079 9.13315 1.62166 9.32639 1.53569 9.59138C1.44973 9.85636 1.52185 10.1471 1.72173 10.3414L6.32904 14.819L5.24174 21.1445C5.19456 21.419 5.30747 21.6964 5.533 21.8601C5.75854 22.0239 6.05759 22.0456 6.30442 21.9161L12 18.9274L17.6956 21.9161C17.9424 22.0456 18.2415 22.0239 18.467 21.8601C18.6925 21.6964 18.8054 21.419 18.7583 21.1445L17.671 14.819L22.2783 10.3414C22.4781 10.1471 22.5503 9.85636 22.4643 9.59138C22.3783 9.32639 22.1492 9.13315 21.8733 9.0929L15.5045 8.16407L12.6568 2.40756Z"
        fill="#536087"
      />
    </Svg>
  )
}

export default BlackStar
