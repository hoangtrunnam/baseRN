/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useImperativeHandle, useMemo, useRef, useState} from 'react'
import {
  StyleSheet,
  TextInput,
  type TextInputProps,
  View,
  type ViewStyle,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import ShowEye from 'src/assets/icons/ShowEye'
import HiddenEye from 'src/assets/icons/HidenEye'

type InputFormProps = TextInputProps & {
  defaultValue: string
  label: string
  onChangeValue: (value: string) => void
  backgroundColor?: string
  error?: string
  password?: boolean
  iconRight?: React.ReactNode
  iconLeft?: React.ReactNode
  onPressRightIcon?: () => void
  inputStyle?: ViewStyle
  topSpace?: boolean
  canEdit?: boolean
  showSubLabel?: boolean
  borderWidth?: number
}

export interface InputMethod {
  // show: (callback?: (...arg: any) => void) => void
  // hide: (callback?: (...arg: any) => void) => void
  // isShow: () => boolean
  onFocus: (callback?: (...arg: any) => void) => void
}

/**
 * component thay thế hiển thị ảnh của app
 * sử dụng lại FastImage để hiển thị
 * handler loading + error
 * @defaultValue
 * @label
 * @onChangeValue
 */

const InputForm = React.forwardRef<InputMethod, InputFormProps>((props, ref) => {
  const {
    defaultValue,
    label,
    onChangeValue,
    backgroundColor,
    error = '',
    password = false,
    iconRight,
    iconLeft,
    onPressRightIcon,
    inputStyle,
    topSpace = true,
    canEdit,
    showSubLabel = true,
    borderWidth = 1,
  } = props
  const [secure, setSecure] = useState<boolean>(password)
  // const [value, setValue] = useState<string>(defaultValue)
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const errorStatus = error && error !== ''
  const inputRef = useRef() as React.MutableRefObject<TextInput>

  useImperativeHandle(ref, () => ({
    onFocus() {
      inputRef.current.focus()
    },
  }))

  // useEffect(() => {
  //   setValue(defaultValue)
  // }, [defaultValue])

  const handleChangeText = (text: string) => {
    // setValue(text)
    onChangeValue(text)
  }

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  const handlePressRightIcon = useCallback(() => {
    if (onPressRightIcon) {
      return onPressRightIcon()
    }
    return setSecure(!secure)
  }, [onPressRightIcon, secure])

  const renderIcon = useMemo(() => {
    if (iconRight) {
      return (
        <TouchableWithoutFeedback onPress={handlePressRightIcon}>
          <View style={styles.iconView}>{iconRight}</View>
        </TouchableWithoutFeedback>
      )
    }
    if (password && defaultValue !== '') {
      return (
        <TouchableWithoutFeedback onPress={handlePressRightIcon}>
          <View style={styles.iconView}>{secure ? <ShowEye /> : <HiddenEye />}</View>
        </TouchableWithoutFeedback>
      )
    }
    return <View style={styles.iconView} />
  }, [password, secure, iconRight, handlePressRightIcon, defaultValue])

  const renderIconLeft = useMemo(() => {
    if (iconLeft) {
      return (
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={styles.iconLeft}>{iconLeft}</View>
        </TouchableWithoutFeedback>
      )
    }
    return null
  }, [iconLeft])

  const renderErrorMessage = () => {
    if (errorStatus) {
      return <Text style={styles.errorMsg}>{error}</Text>
    }
    return null
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        inputRef.current.focus()
      }}>
      <View>
        <View
          style={[
            styles.mainInput,
            {
              backgroundColor: errorStatus ? '#FDEDEF' : backgroundColor,
              marginTop: topSpace ? 16 : 0,
              borderWidth: borderWidth,
              borderColor: errorStatus ? '#EF7080' : '#DBE0E6',
            },
          ]}>
          {renderIconLeft}
          <View style={{flex: 1}}>
            {showSubLabel && (defaultValue !== '' || isFocus) ? (
              <Text style={{fontSize: 12, lineHeight: 16, color: '#9FA4B5'}}>{label}</Text>
            ) : null}
            <TextInput
              placeholder={label}
              placeholderTextColor="#536087"
              onChangeText={handleChangeText}
              value={defaultValue}
              secureTextEntry={secure}
              onFocus={handleFocus}
              onBlur={handleBlur}
              editable={!canEdit}
              ref={inputRef}
              style={[styles.inputStyle, inputStyle]}
              {...props}
            />
          </View>
          {renderIcon}
        </View>
        {renderErrorMessage()}
      </View>
    </TouchableWithoutFeedback>
  )
})

export default InputForm

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    color: '#0E1C45',
    paddingVertical: 0,
    paddingHorizontal: 0,
    height: 18,
    width: '100%',
  },
  iconView: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLeft: {
    paddingRight: 12,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMsg: {paddingTop: 4, fontSize: 16, lineHeight: 20, color: 'red'},
  mainInput: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingRight: 8,
    paddingLeft: 16,
    borderRadius: 8,
  },
})
