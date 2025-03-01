import React, {type ReactNode} from 'react'
import {
  type GestureResponderEvent,
  type PressableProps,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native'

const defaultHislop = {
  top: 10,
  left: 10,
  right: 10,
  bottom: 10,
}

const styles = StyleSheet.create({
  touch: {
    overflow: 'hidden',
  },
})

interface TouchRippleSingleProps {
  onPress?: (event: GestureResponderEvent) => void
  touchProps?: PressableProps
  delay?: number
  children: ReactNode
  disabled?: boolean
}

/**
 * component kết hợp cả ripple và single lại làm 1
 * @param props
 */
export const TouchRippleSingle: React.FC<TouchRippleSingleProps> = props => {
  const {children, onPress, disabled} = props
  return (
    <TouchableWithoutFeedback
      disabled={disabled}
      style={styles.touch}
      hitSlop={defaultHislop}
      onPress={onPress}>
      {children}
    </TouchableWithoutFeedback>
  )
}
