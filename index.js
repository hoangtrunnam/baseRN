/**
 * @format
 */

import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import {startNetworkLogging} from 'react-native-network-logger'

startNetworkLogging({
  maxRequests: 100,
  ignoredUrls: [
    'http://localhost:8081/symbolicate',
  ],
  ignoredPatterns: [/^HEAD /],
})
AppRegistry.registerComponent(appName, () => App)
