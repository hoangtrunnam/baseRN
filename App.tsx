/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import {Host} from 'react-native-portalize'
import Toast from 'react-native-toast-message'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Navigator from './src/navigation'
import ToastMessage from './src/components/ToastMessage/index'

function App(): JSX.Element {
  const toastConfig = {
    tomatoToast: ({props}: any) => <ToastMessage status={props.status} title={props.uuid} />,
  }
  const renderApp = () => {
    return (
      <Host>
        <SafeAreaProvider>
          <Navigator />
          <Toast config={toastConfig} visibilityTime={1500} />
        </SafeAreaProvider>
      </Host>
    )
  }

  return <GestureHandlerRootView style={{flex: 1}}>{renderApp()}</GestureHandlerRootView>
}

export default App
