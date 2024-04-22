import React from 'react'
import Svg, {Path} from 'react-native-svg'

interface ISize {
  width?: number
  height?: number
  background?: string
  color?: string
}

/** icon Warning */
const Warning: (props: ISize) => React.ReactElement = ({
  width = 24,
  height = 24,
  color = '#2F6BFF',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.77215C5.45588 1.77215 1.77215 5.45588 1.77215 10C1.77215 14.5441 5.45588 18.2278 10 18.2278C14.5441 18.2278 18.2278 14.5441 18.2278 10C18.2278 5.45588 14.5441 1.77215 10 1.77215ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0001 5.94984C10.5594 5.94984 11.0128 6.40322 11.0128 6.96249V10.6081C11.0128 11.1673 10.5594 11.6207 10.0001 11.6207C9.44084 11.6207 8.98746 11.1673 8.98746 10.6081V6.96249C8.98746 6.40322 9.44084 5.94984 10.0001 5.94984Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.98746 13.6453C8.98746 13.086 9.44084 12.6326 10.0001 12.6326H10.0092C10.5685 12.6326 11.0219 13.086 11.0219 13.6453C11.0219 14.2045 10.5685 14.6579 10.0092 14.6579H10.0001C9.44084 14.6579 8.98746 14.2045 8.98746 13.6453Z"
        fill={color}
      />
    </Svg>
  )
}

export default Warning
