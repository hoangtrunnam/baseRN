/* eslint-disable react-native/no-inline-styles */
import NetInfo from '@react-native-community/netinfo'
import React, {useRef} from 'react'
import {Image} from 'react-native'
import {IMAGES} from 'src/assets/images'
import PopupNotification from 'src/components/Popup/PopupNotification'
import {defaultColors} from 'src/configs/colors'
import {navigateFromCurrentScreen} from 'src/navigation/navigationHelper'
import {routes} from 'src/navigation/routes'

const NetworkStatus = () => {
  const networkRef = useRef() as React.MutableRefObject<any>

  const handleNavigateExplore = () => {
    navigateFromCurrentScreen(routes.BottomTab, {screen: routes.UserProfile})
  }

  React.useEffect(() => {
    const onConnected = () => {
      networkRef.current.closeModal()
    }
    const onDisconnected = () => {
      networkRef.current.openModal()
    }
    const unsubscribe = NetInfo.addEventListener((state: {isConnected: any}) => {
      if (state.isConnected) {
        onConnected()
      } else {
        onDisconnected()
      }
    })

    return unsubscribe
  }, [])

  return (
    <PopupNotification
      overColor={defaultColors.bg_E5E5E5}
      ref={networkRef}
      onClose={handleNavigateExplore}
      title="インターネット接続が失われました"
      content="ネットワーク接続をもう一度確認してください"
      buttonTitle="Ok"
      onPress={() => networkRef.current.closeModal()}
      icon={<Image source={IMAGES.wifiAlert} style={{width: 70, height: 62}} />}
    />
  )
}

export default NetworkStatus
