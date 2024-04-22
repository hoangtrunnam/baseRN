import React from 'react'
import Svg, {G, Path, Polygon, Rect} from 'react-native-svg'

type DownLoadIconProps = {
  width?: number
  height?: number
}

const DownLoadIcon = ({width = 24, height = 24}: DownLoadIconProps) => {
  return (
    <Svg viewBox="0 0 32 32" height={height} width={width}>
      <G id="background">
        <Rect fill="none" height="32" width="32" />
      </G>
      <G id="download_x5F_run">
        <Path d="M22,8h-4V2h-4v6h-4l6,6L22,8z M23,14c-2.143,0-4.106,0.751-5.652,2H2v8h12.059C14.557,28.5,18.367,32,23,32   c4.971,0,9-4.028,9-8.999C32,18.029,27.971,14,23,14z M8,22.001H4v-2h4V22.001z M23,30c-3.865-0.008-6.994-3.135-7-6.999   c0.006-3.865,3.135-6.995,7-7c3.864,0.006,6.991,3.135,6.999,7C29.991,26.865,26.864,29.992,23,30z" />
        <Polygon points="22,19 22,27 26,23  " />
      </G>
    </Svg>
  )
}

export default DownLoadIcon
