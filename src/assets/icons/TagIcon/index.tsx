import React from 'react'
import Svg, {Path} from 'react-native-svg'

type IProps = {
  width?: number
  height?: number
  color?: string
}

const TagIcon = ({width = 24, height = 24, color = '#000000'}: IProps) => {
  return (
    <Svg height={width} width={height} viewBox="0 0 24 24">
      <Path
        d="M11.707 2.293A.996.996 0 0 0 11 2H6a.996.996 0 0 0-.707.293l-3 3A.996.996 0 0 0 2 6v5c0 .266.105.52.293.707l10 10a.997.997 0 0 0 1.414 0l8-8a.999.999 0 0 0 0-1.414l-10-10zM8.353 10a1.647 1.647 0 1 1-.001-3.293A1.647 1.647 0 0 1 8.353 10z"
        fill={color}
      />
    </Svg>
  )
}

export default TagIcon
