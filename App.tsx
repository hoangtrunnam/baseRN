/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import {Provider} from 'react-redux'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import store from 'src/redux/store'
import {AlertProvider} from 'src/components/Alert'
import AppContent from './src/AppContent'
function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <AlertProvider>
          <AppContent />
        </AlertProvider>
      </Provider>
    </GestureHandlerRootView>
  )
}

export default App
