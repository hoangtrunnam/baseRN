/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {forwardRef, ReactNode, useState} from 'react'
import {
  DimensionValue,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Toast from 'react-native-toast-message'
import ToastMessage from '../ToastMessage'

interface BottomPopupModalProps {
  children: ReactNode
  position?: 'center' | 'flex-end'
  noneClose?: boolean
  onClose?: () => void
  maxHeight?: DimensionValue | undefined
}

export const BottomPopupModal = forwardRef((props: BottomPopupModalProps, ref) => {
  const {
    children,
    position = 'flex-end',
    noneClose = false,
    onClose = () => {},
    maxHeight = '50%',
  } = props
  const [isVisible, setIsVisible] = useState<boolean>(false)

  React.useImperativeHandle(ref, () => ({
    show() {
      setIsVisible(true)
    },
    hide() {
      setIsVisible(false)
    },
  }))

  const onRequestClose = () => {
    if (noneClose) {
      return null
    }
    onClose()
    setIsVisible(false)
    return false
  }
  const toastConfig = {
    tomatoToast: (prop: any) => {
      return <ToastMessage status={prop.props.status} title={prop.props.uuid} />
    },
  }

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent
      onRequestClose={onRequestClose}
      style={{flex: 1, justifyContent: 'flex-end'}}>
      <KeyboardAvoidingView
        // behavior="padding"
        style={{...styles.wrapper, justifyContent: position}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 130}>
        <Text
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            opacity: 0.4,
            backgroundColor: 'black',
          }}
          onPress={() => onRequestClose()}
        />
        <View style={{height: maxHeight, flex: 1, justifyContent: position}}>{children}</View>
      </KeyboardAvoidingView>
      <Toast config={toastConfig} visibilityTime={1500} />
    </Modal>
  )
})

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
})
