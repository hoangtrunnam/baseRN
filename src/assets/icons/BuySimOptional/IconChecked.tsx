import React, {useEffect, useRef} from 'react'
import Svg, {Path} from 'react-native-svg'
import {Animated} from 'react-native'
import {defaultColors} from 'src/configs/colors'

type IIcon = {
  width?: number
  height?: number
  color?: string
  colorUnActive?: string
  checked?: boolean
  withCircle?: boolean
}

const AnimatedPath = Animated.createAnimatedComponent(Path)
const IconChecked = ({
  width = 24,
  height = 24,
  color = defaultColors.PrimaryA500,
  colorUnActive = defaultColors.PrimaryA500,
  checked,
  withCircle = true,
}: IIcon) => {
  // const progress = useSharedValue(0)
  const progress = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(progress, {
      toValue: checked ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }, [checked, progress])
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <AnimatedPath
        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
        fill={colorUnActive}
        fillOpacity={progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })}
        strokeOpacity={progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })}
      />
      {withCircle && (
        <AnimatedPath
          d="M12.5 22.75C6.57 22.75 1.75 17.93 1.75 12C1.75 6.07 6.57 1.25 12.5 1.25C18.43 1.25 23.25 6.07 23.25 12C23.25 17.93 18.43 22.75 12.5 22.75ZM12.5 2.75C7.4 2.75 3.25 6.9 3.25 12C3.25 17.1 7.4 21.25 12.5 21.25C17.6 21.25 21.75 17.1 21.75 12C21.75 6.9 17.6 2.75 12.5 2.75Z"
          fill={color}
          fillOpacity={progress.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: 'clamp',
          })}
        />
      )}
    </Svg>
  )
}

export default IconChecked
