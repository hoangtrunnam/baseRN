import React, {forwardRef, useImperativeHandle} from 'react'
import {
  Pressable,
  Text,
  TextInput,
  View,
  StyleSheet,
  ColorValue,
  ViewStyle,
  TextStyle,
} from 'react-native'
import {VerticalStick} from './VerticalStick'
import {useOtpInput} from './useOtpInput'
import {DIMENSION} from 'src/commons/dimension'

export interface Theme {
  containerStyle?: ViewStyle
  inputsContainerStyle?: ViewStyle
  pinCodeContainerStyle?: ViewStyle
  filledPinCodeContainerStyle?: ViewStyle
  pinCodeTextStyle?: TextStyle
  focusStickStyle?: ViewStyle
  focusedPinCodeContainerStyle?: ViewStyle
}

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
  testID?: string
}

export interface OtpInputRef {
  clear: () => void
  focus: () => void
  setValue: (value: string) => void
}

export const CustomOtpInput = forwardRef<OtpInputRef, OtpInputProps>((props, ref) => {
  const {
    models: {text, inputRef, focusedInputIndex},
    actions: {clear, handlePress, handleTextChange, focus},
    forms: {setTextWithRef},
  } = useOtpInput(props)
  const {
    numberOfDigits = 6,
    autoFocus = true,
    hideStick,
    focusColor = '#A4D0A4',
    focusStickBlinkingDuration,
    secureTextEntry = false,
    testID = '',
    theme = {},
  } = props
  const {
    containerStyle,
    inputsContainerStyle,
    pinCodeContainerStyle,
    pinCodeTextStyle,
    focusStickStyle,
    focusedPinCodeContainerStyle,
    filledPinCodeContainerStyle,
  } = theme

  useImperativeHandle(ref, () => ({clear, focus, setValue: setTextWithRef}))

  const generatePinCodeContainerStyle = (isFocusedInput: boolean, char: string) => {
    const stylesArray = [styles.codeContainer, pinCodeContainerStyle]
    if (focusColor && isFocusedInput) {
      stylesArray.push({borderColor: focusColor})
    }

    if (focusedPinCodeContainerStyle && isFocusedInput) {
      stylesArray.push(focusedPinCodeContainerStyle)
    }

    if (filledPinCodeContainerStyle && Boolean(char)) {
      stylesArray.push(filledPinCodeContainerStyle)
    }

    return stylesArray
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.inputsContainer, inputsContainerStyle]}>
        {Array(numberOfDigits)
          .fill(0)
          .map((_, index) => {
            const char = text[index]
            const isFocusedInput = index === focusedInputIndex

            return (
              <Pressable
                key={`${char}-${index}`}
                onPress={handlePress}
                style={generatePinCodeContainerStyle(isFocusedInput, char)}
                testID="otp-input">
                {isFocusedInput && !hideStick ? (
                  <VerticalStick
                    focusColor={focusColor}
                    style={focusStickStyle}
                    focusStickBlinkingDuration={focusStickBlinkingDuration}
                  />
                ) : (
                  <Text style={[styles.codeText, pinCodeTextStyle]}>
                    {char && secureTextEntry ? '•' : char}
                  </Text>
                )}
              </Pressable>
            )
          })}
      </View>
      <TextInput
        value={text}
        onChangeText={handleTextChange}
        maxLength={numberOfDigits}
        inputMode="numeric"
        textContentType="oneTimeCode"
        ref={inputRef}
        autoFocus={autoFocus}
        style={styles.hiddenInput}
        secureTextEntry={secureTextEntry}
        autoComplete={DIMENSION.isIos ? 'one-time-code' : 'sms-otp'}
        testID={testID}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  inputsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  codeContainer: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#DFDFDE',
    height: 60,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeText: {
    fontSize: 28,
  },
  hiddenInput: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.01,
  },
})
