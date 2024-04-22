import React from 'react'
import Svg, {Mask, Rect} from 'react-native-svg'

type AppsProps = {
  width?: number
  height?: number
  color?: string
}

const Apps = ({width = 25, height = 24}: AppsProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <Mask id="path-1-inside-1_20491_14101" fill="white">
        <Rect x="0.499878" width="11.2942" height="11.2942" rx="1.5" />
      </Mask>
      <Rect
        x="0.499878"
        width="11.2942"
        height="11.2942"
        rx="1.5"
        stroke="#0E1C45"
        strokeWidth="4"
        mask="url(#path-1-inside-1_20491_14101)"
      />
      <Mask id="path-2-inside-2_20491_14101" fill="white">
        <Rect x="0.499878" y="12.7058" width="11.2942" height="11.2942" rx="1.5" />
      </Mask>
      <Rect
        x="0.499878"
        y="12.7058"
        width="11.2942"
        height="11.2942"
        rx="1.5"
        stroke="#0E1C45"
        strokeWidth="4"
        mask="url(#path-2-inside-2_20491_14101)"
      />
      <Mask id="path-3-inside-3_20491_14101" fill="white">
        <Rect x="13.2058" width="11.2942" height="11.2942" rx="1.5" />
      </Mask>
      <Rect
        x="13.2058"
        width="11.2942"
        height="11.2942"
        rx="1.5"
        stroke="#0E1C45"
        strokeWidth="4"
        mask="url(#path-3-inside-3_20491_14101)"
      />
      <Mask id="path-4-inside-4_20491_14101" fill="white">
        <Rect x="13.2057" y="12.7058" width="11.2942" height="11.2942" rx="1.5" />
      </Mask>
      <Rect
        x="13.2057"
        y="12.7058"
        width="11.2942"
        height="11.2942"
        rx="1.5"
        stroke="#0E1C45"
        strokeWidth="4"
        mask="url(#path-4-inside-4_20491_14101)"
      />
    </Svg>
  )
}

export default Apps
