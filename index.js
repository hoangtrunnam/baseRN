/**
 * @format
 */

import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import {startNetworkLogging} from 'react-native-network-logger'
import Reactotron from 'reactotron-react-native';

startNetworkLogging({
  maxRequests: 100,
  ignoredUrls: [
    'http://localhost:8081/symbolicate',
  ],
  ignoredPatterns: [/^HEAD /],
})


// if (__DEV__) {
//   Reactotron.configure({
//     name: 'basern',
//   }) // controls connection & communication settings
//     .useReactNative() // add all built-in react native plugins
//     .connect(); // let's connect!
//   Reactotron.clear();
//   console.log = Reactotron.log;
// }

AppRegistry.registerComponent(appName, () => App)

