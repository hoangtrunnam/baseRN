import {useRef, useState} from 'react'
import {Keyboard, TextInput} from 'react-native'
import type {ColorValue, TextStyle, ViewStyle} from 'react-native'

export interface OtpInputProps {
  numberOfDigits?: number
  autoFocus?: boolean
  focusColor?: ColorValue
  onTextChange?: (text: string) => void
  onFilled?: (text: string) => void
  hideStick?: boolean
  focusStickBlinkingDuration?: number
  secureTextEntry?: boolean
  theme?: Theme
}

export interface OtpInputRef {
  clear: () => void
  focus: () => void
  setValue: (value: string) => void
}

export interface Theme {
  containerStyle?: ViewStyle
  inputsContainerStyle?: ViewStyle
  pinCodeContainerStyle?: ViewStyle
  filledPinCodeContainerStyle?: ViewStyle
  pinCodeTextStyle?: TextStyle
  focusStickStyle?: ViewStyle
  focusedPinCodeContainerStyle?: ViewStyle
}

export const useOtpInput = ({onTextChange, onFilled, numberOfDigits = 6}: OtpInputProps) => {
  const [text, setText] = useState('')
  const inputRef = useRef<TextInput>(null)
  const focusedInputIndex = text.length

  const handlePress = () => {
    if (!Keyboard.isVisible()) {
      Keyboard.dismiss()
    }
    inputRef.current?.focus()
  }

  const handleTextChange = (value: string) => {
    setText(value)
    onTextChange?.(value)
    if (value.length === numberOfDigits) {
      onFilled?.(value)
    }
  }

  const setTextWithRef = (value: string) => {
    const normalizedValue = value.length > numberOfDigits ? value.slice(0, numberOfDigits) : value
    handleTextChange(normalizedValue)
  }

  const clear = () => {
    setText('')
  }

  const focus = () => {
    inputRef.current?.focus()
  }

  return {
    models: {text, inputRef, focusedInputIndex},
    actions: {handlePress, handleTextChange, clear, focus},
    forms: {setText, setTextWithRef},
  }
}
