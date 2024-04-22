import messaging, {FirebaseMessagingTypes} from '@react-native-firebase/messaging'
import {Alert, PermissionsAndroid} from 'react-native'
import notifee, {AndroidImportance} from '@notifee/react-native'
import {postDeviceToken} from 'src/api/auth'
import {DIMENSION} from './dimension'

export async function requestNotificationPermission() {
  let enabledIos = false
  let enabledAndroid = false

  if (DIMENSION.isIos) {
    const authStatus = await messaging().requestPermission()
    enabledIos =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL
    console.log('Authorization status iOS:', authStatus)
  }

  // have to ask user for permission on android 13 and above
  // add config : <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
  // in the file androidManifest.xml
  if (DIMENSION.isAndroid && +DIMENSION.androidVersion >= 33) {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      {
        title: 'Please grant notification permission',
        message: 'Daisei portal needs your permission to push notifications',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Deny',
        buttonPositive: 'Allow',
      }
    )
    enabledAndroid = granted === PermissionsAndroid.RESULTS.GRANTED
    console.log('Authorization status Android:', granted)
  }

  if (enabledIos || enabledAndroid) {
    getCurrentFCMToken()
  }
}

export async function getCurrentFCMToken() {
  try {
    const fcmtoken = await messaging().getToken()
    console.log('device token:', fcmtoken)

    if (fcmtoken) {
      const res = await postDeviceToken(fcmtoken)
      if (res?.code === 200) {
        console.log('sent device token successfully')
      } else {
        console.log('cant not post token to server, pls try again')
      }
    }
  } catch (error) {
    console.log(error, 'error in get token')
  }
}

export const NotificationListner = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification
    )
    Alert.alert('notification 1')
  })
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log('Notification caused app to open from quit state:', remoteMessage.notification)
        Alert.alert('notification 2')
      }
    })

  messaging().onMessage(async remoteMessage => {
    console.log('hahahaaa', remoteMessage)
    Alert.alert('notification 3')
  })
}

export const onDisplayNotification = async (message: FirebaseMessagingTypes.RemoteMessage) => {
  try {
    const channelId = await notifee.createChannel({
      id: 'important',
      name: 'important notification',
      importance: AndroidImportance.HIGH,
      sound: 'default',
    })

    await notifee.displayNotification({
      title: message.notification?.title,
      body: message.notification?.body,
      android: {
        channelId,
        pressAction: {
          id: 'default',
          launchActivity: 'default',
        },
        importance: AndroidImportance.HIGH,
      },
      ios: {
        sound: 'default',
      },
    })
  } catch (error) {
    console.log('error in push notification', error)
  }
}
