import React from 'react'
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg'

type FriendIconProps = {
  width?: number
  height?: number
  color?: string
}

const FriendIcon = ({width = 24, height = 24, color = '#666666'}: FriendIconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 19" fill="none">
      <G clip-path="url(#clip0_3_57)">
        <Path
          d="M12 8.75C13.245 8.75 14.2425 7.745 14.2425 6.5C14.2425 5.255 13.245 4.25 12 4.25C10.755 4.25 9.75 5.255 9.75 6.5C9.75 7.745 10.755 8.75 12 8.75ZM6 8.75C7.245 8.75 8.2425 7.745 8.2425 6.5C8.2425 5.255 7.245 4.25 6 4.25C4.755 4.25 3.75 5.255 3.75 6.5C3.75 7.745 4.755 8.75 6 8.75ZM6 10.25C4.2525 10.25 0.75 11.1275 0.75 12.875V14.75H11.25V12.875C11.25 11.1275 7.7475 10.25 6 10.25ZM12 10.25C11.7825 10.25 11.535 10.265 11.2725 10.2875C12.1425 10.9175 12.75 11.765 12.75 12.875V14.75H17.25V12.875C17.25 11.1275 13.7475 10.25 12 10.25Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3_57">
          <Rect width="18" height="18" fill="white" transform="translate(0 0.5)" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FriendIcon
