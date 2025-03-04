/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import {Provider} from 'react-redux'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import store from 'src/redux/store'
import {AlertProvider} from 'src/components/Alert'
import AppContent from './src/AppContent'
import {HotUpdater} from '@hot-updater/react-native'
import {Text, View} from 'react-native'
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

// export default HotUpdater.wrap({
//   source: 'https://gzbniqcmnwjosunzdlae.supabase.co/functions/v1/update-server',
// })(App)

export default HotUpdater.wrap({
  source: 'https://gzbniqcmnwjosunzdlae.supabase.co/functions/v1/update-server',
  requestHeaders: {
    // if you want to use the request headers, you can add them here
  },
  fallbackComponent: ({progress, status}) => (
    <View
      style={{
        flex: 1,
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}>
      {/* You can put a splash image here. */}

      <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
        {status === 'UPDATING' ? 'Updating...' : 'Checking for Update...'}
      </Text>
      {progress > 0 ? (
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          {Math.round(progress * 100)}%
        </Text>
      ) : null}
    </View>
  ),
})(App)
