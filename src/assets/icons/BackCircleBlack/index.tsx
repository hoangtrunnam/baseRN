import React from 'react'
import Svg, {Path, Rect} from 'react-native-svg'

interface ISize {
  width?: number
  height?: number
  background?: string
  color?: string
}

/** icon bank */
const BackCircle: (props: ISize) => React.ReactElement = ({
  width = 32,
  height = 32,
  // color = 'black',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Rect width={width} height={height} rx="16" fill="white" />
      <Path
        d="M18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L13.4142 16L18.7071 21.2929C19.0976 21.6834 19.0976 22.3166 18.7071 22.7071C18.3166 23.0976 17.6834 23.0976 17.2929 22.7071L11.2929 16.7071C10.9024 16.3166 10.9024 15.6834 11.2929 15.2929L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289Z"
        fill="#DBE0E6"
      />
    </Svg>
  )
}

export default BackCircle
