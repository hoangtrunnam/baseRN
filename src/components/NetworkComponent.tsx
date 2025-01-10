import {LogBox, Text, View} from 'react-native'
import React, {useEffect, useImperativeHandle, useRef} from 'react'
import NetworkLogger from 'react-native-network-logger'
import BottomPopupModalize from './PopupModal/BottomPopupModalize'
import {defaultColors} from 'src/configs/colors'
import IconClose from 'src/assets/icons/IconClose'
import {TouchRippleSingle} from './Button/TouchRippleSingle'
import {DIMENSION} from '../commons'

export type NetworkComponentRef = {
  openModal: () => void;
  closeModal: () => void;
}

const NetworkComponent = React.forwardRef((_props, ref) => {
  const modalizeRef = useRef<any>(null)
  useImperativeHandle(
    ref,
    () => ({
      openModal: () => {
        modalizeRef.current?.open()
      },
      closeModal: () => {
        modalizeRef.current?.close()
      },
    }),
    [],
  )

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
  }, [])

  const HeaderComponent = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 32,
          paddingBottom: 16,
          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: defaultColors.inkViolet500,
              alignSelf: 'center',
              paddingLeft: 40,
            }}>
            network logger
          </Text>
        </View>
        <TouchRippleSingle
          onPress={() => {
            modalizeRef.current?.close()
          }}>
          <View>
            <IconClose width={40} height={40} />
          </View>
        </TouchRippleSingle>
      </View>
    )
  }

  return (
    <BottomPopupModalize
      ref={modalizeRef}
      modalizeProps={{
        onOpen: () => {
          
        },
        handlePosition: 'inside',
        HeaderComponent: <HeaderComponent />,
        modalHeight: DIMENSION.height * 0.85,
        scrollViewProps: {
          nestedScrollEnabled: true,
        },
      }}>
      <NetworkLogger theme="light"  />
    </BottomPopupModalize>
  )
})

export default NetworkComponent
