/* eslint-disable react-native/no-inline-styles */
import React, {forwardRef, useImperativeHandle, useRef} from 'react'
import {DIMENSION} from 'src/commons'
import {defaultColors} from 'src/configs/colors'
import {BottomPopupModal} from '../PopupModal/BottomPopupModal'
import {View, Text} from 'react-native'
import IconClose from 'src/assets/icons/IconClose'
import {TouchRippleSingle} from '../Button/TouchRippleSingle'
import {LinearGradientButton} from '../Button/LinearGradientButton'

interface IProps {
  onClose?: () => void
  icon?: React.ReactNode
  onPress?: () => void
  title?: string
  content?: React.ReactNode | string
  buttonTitle?: string
  noneClose?: boolean
  overColor?: string
}

const PopupNotification = forwardRef((props: IProps, ref) => {
  const {
    icon = <IconClose width={24} height={24} />,
    onPress = () => {},
    onClose,
    title = 'ok1',
    content = 'ok2',
    buttonTitle = 'buttonTitle',
    noneClose = false,
  } = props

  const popupNotification = useRef() as React.MutableRefObject<any>

  useImperativeHandle(ref, () => ({
    openModal() {
      popupNotification.current.show()
    },
    closeModal() {
      popupNotification.current.hide()
    },
  }))

  const handleOnPress = () => {
    onPress()
    popupNotification.current.hide()
  }

  const handleOnClose = () => {
    if (onClose) {
      onClose()
    }
    popupNotification.current.hide()
  }

  return (
    <BottomPopupModal ref={popupNotification} noneClose={noneClose}>
      <View
        style={{
          backgroundColor: defaultColors.h_ffffff,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingBottom: DIMENSION.bottomPadding,
          paddingHorizontal: 16,
        }}>
        <View style={{paddingTop: 8}}>
          {onClose && (
            <TouchRippleSingle onPress={handleOnClose}>
              <View style={{width: 40, height: 40, alignItems: 'center', justifyContent: 'center'}}>
                <IconClose width={24} height={24} />
              </View>
            </TouchRippleSingle>
          )}
        </View>
        <View style={{paddingTop: 25, paddingBottom: 27}}>{icon}</View>
        <View style={{paddingBottom: 8}}>
          <Text
            style={{fontSize: 20, lineHeight: 24, color: defaultColors.Text, fontWeight: '700'}}>
            {title}
          </Text>
        </View>
        <View style={{paddingBottom: 24}}>
          <Text style={{fontSize: 16, lineHeight: 20, color: defaultColors.ink400}}>{content}</Text>
        </View>
        <LinearGradientButton onPress={handleOnPress}>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 20,
              color: defaultColors.h_ffffff,
              fontWeight: '700',
              alignSelf: 'center',
              paddingHorizontal: 16,
              paddingVertical: 12,
            }}>
            {buttonTitle}
          </Text>
        </LinearGradientButton>
      </View>
    </BottomPopupModal>
  )
})

export default PopupNotification
