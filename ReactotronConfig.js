/* eslint-disable semi */
import Reactotron, {networking} from 'reactotron-react-native'
import {NativeModules} from 'react-native'
let scriptHostname
if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL
  scriptHostname = scriptURL.split('://')[1].split(':')[0]
}

Reactotron
  // .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({host: scriptHostname}) // controls connection & communication settings
  .use(networking())
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!
