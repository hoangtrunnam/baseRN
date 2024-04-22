import React from 'react'
import Svg, {Path, Rect} from 'react-native-svg'

interface ISize {
  width?: number
  height?: number
  background?: string
  color?: string
}

/** icon bank */
const BackCircleBlack: (props: ISize) => React.ReactElement = ({
  width = 32,
  height = 32,
  // color = 'black',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 40 40" fill="none">
      <Rect width="40" height="40" rx="20" fill="white" />
      <Path
        d="M22.7071 13.2929C23.0976 13.6834 23.0976 14.3166 22.7071 14.7071L17.4142 20L22.7071 25.2929C23.0976 25.6834 23.0976 26.3166 22.7071 26.7071C22.3166 27.0976 21.6834 27.0976 21.2929 26.7071L15.2929 20.7071C14.9024 20.3166 14.9024 19.6834 15.2929 19.2929L21.2929 13.2929C21.6834 12.9024 22.3166 12.9024 22.7071 13.2929Z"
        fill="#536087"
      />
    </Svg>
  )
}

export default BackCircleBlack
