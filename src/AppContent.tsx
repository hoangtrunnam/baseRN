// AppContent.tsx
import React, {useRef} from 'react'
import {Host} from 'react-native-portalize'
import Toast from 'react-native-toast-message'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {useAppSelector} from 'src/redux/hooks'
import LoadingPortal from 'src/components/Loading/LoadingPortal'
import NetworkStatus from 'src/components/NetworkStatus'
import {AppProvider} from 'src/locales/AppContext'
import colors from 'src/configs/colors'
import CircleBubble from 'src/components/CircleBubble'
import NetworkComponent, {
  type NetworkComponentRef,
} from 'src/components/NetworkComponent'
import ToastMessage from './components/ToastMessage'
import Navigator from './navigation'

/** khai báo và tạo thêm prototype translate cho string
 * sử dụng cho i18n ở func common, func ngoài component
 * component bình thường dùng hook useI18n bình thường
 */
declare global {
  interface String {
    trans(): string
  }
}

const AppContent = () => {
  const {isEnableDebugger} = useAppSelector(state => state.appInfoReducer)
  const networkRef = useRef<NetworkComponentRef>(null)

  const toastConfig = {
    tomatoToast: ({props}: any) => (
      <ToastMessage status={props.status} title={props.uuid} />
    ),
  }
  const handleBubblePress = () => {
    networkRef.current?.openModal()
  }
  return (
    <AppProvider colors={colors}>
      <Host>
        <SafeAreaProvider>
          <Navigator />
          <NetworkStatus />
          <LoadingPortal />
          <Toast config={toastConfig} visibilityTime={1500} />
          {isEnableDebugger && <CircleBubble onPress={handleBubblePress} />}
          <NetworkComponent ref={networkRef} />
        </SafeAreaProvider>
      </Host>
    </AppProvider>
  )
}

export default AppContent
