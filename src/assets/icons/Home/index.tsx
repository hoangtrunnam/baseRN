import React from 'react'
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg'

type HomeProps = {
  width?: number
  height?: number
  color?: string
}

const Home = ({width = 24, height = 24, color = '#666666'}: HomeProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 19 19" fill="none">
      <G clip-path="url(#clip0_3_100)">
        <Path d="M8 15.5V11H11V15.5H14.75V9.5H17L9.5 2.75L2 9.5H4.25V15.5H8Z" fill={color} />
      </G>
      <Defs>
        <ClipPath id="clip0_3_100">
          <Rect width="18" height="18" fill="white" transform="translate(0.5 0.5)" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Home
