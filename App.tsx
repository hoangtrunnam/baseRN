/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import {Host} from 'react-native-portalize'
import Toast from 'react-native-toast-message'
import {Provider} from 'react-redux'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Navigator from './src/navigation'
import ToastMessage from './src/components/ToastMessage/index'
import store from 'src/redux/store'
import LoadingPortal from 'src/components/Loading/LoadingPortal'
import NetworkStatus from 'src/components/NetworkStatus'
import {AppProvider} from 'src/locales/AppContext'
import colors from 'src/configs/colors'
import {AlertProvider} from 'src/components/Alert'
import useNotificationService from 'src/commons/NotificationService'
import CodePushDialog from 'src/components/Popup/CodePushDialog'
import './src/commons/defaultText'
import 'react-native-devsettings'
/** khai báo và tạo thêm prototype translate cho string
 * sử dụng cho i18n ở func common, func ngoài component
 * component bình thường dùng hook useI18n bình thường
 */
declare global {
  interface String {
    trans(): string
  }
}

function App(): JSX.Element {
  const toastConfig = {
    tomatoToast: ({props}: any) => <ToastMessage status={props.status} title={props.uuid} />,
  }
  const RenderApp = () => {
    useNotificationService()
    return (
      <AppProvider colors={colors}>
        <Host>
          <SafeAreaProvider>
            <Navigator />
            <NetworkStatus />
            <LoadingPortal />
            {!__DEV__ && <CodePushDialog />}
            <Toast config={toastConfig} visibilityTime={1500} />
          </SafeAreaProvider>
        </Host>
      </AppProvider>
    )
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <AlertProvider>
          <RenderApp />
        </AlertProvider>
      </Provider>
    </GestureHandlerRootView>
  )
}

export default App
