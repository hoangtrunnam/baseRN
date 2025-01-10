import {StyleSheet, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {Gesture, GestureDetector} from 'react-native-gesture-handler'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import {DIMENSION} from '../commons'
import {Thumb} from './Image'
import {IMAGES} from 'src/assets/images'
import { defaultColors } from 'src/configs/colors'

interface IProps {
  onPress?: () => void
}

const CircleBubble = (props: IProps) => {
  const {onPress} = props
  const offset = useSharedValue({x: 20, y: 90})
  const isDragging = useSharedValue(false)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value.x}, {translateY: offset.value.y}],
    }
  })

  const gesture = Gesture.Pan()
    .onBegin(() => {
      isDragging.value = true
    })
    .onUpdate(e => {
      if (!isDragging.value) return

      let newX = e.absoluteX - 25 // Trừ đi nửa width của ball (50/2)
      let newY = e.absoluteY - 25 // Trừ đi nửa height của ball (50/2)

      // Giới hạn vùng di chuyển
      if (newX > DIMENSION.width - 60) {
        newX = DIMENSION.width - 60
      } else if (newX < 20) {
        newX = 20
      }

      if (newY > DIMENSION.height - 60) {
        newY = DIMENSION.height - 60
      } else if (newY < 90) {
        newY = 90
      }

      offset.value = {
        x: newX,
        y: newY,
      }
    })
    .onEnd(e => {
      isDragging.value = false
      const targetX =
        e.absoluteX < DIMENSION.width / 2 ? 20 : DIMENSION.width - 60
      // Giữ nguyên vị trí Y hiện tại
      const currentY = offset.value.y
      offset.value = {
        x: withSpring(targetX, {
          damping: 15,
          stiffness: 150,
          mass: 1,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 2,
        }),
        y: withSpring(currentY, {
          damping: 15,
          stiffness: 150,
        }),
      }
    })

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.ball, animatedStyles]}>
        <TouchableOpacity onPress={onPress} style={styles.touchable}>
          <View>
            <Thumb
              source={IMAGES.bugs}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>
      </Animated.View>
    </GestureDetector>
  )
}

export default CircleBubble

const styles = StyleSheet.create({
  ball: {
    backgroundColor: defaultColors.text_E0E1E0,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    elevation: 100,
    zIndex: 100,
    borderWidth: 1,
    borderColor: defaultColors.bg_FCDAB0,
  },
  touchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {height: 20, width: 20},
})
