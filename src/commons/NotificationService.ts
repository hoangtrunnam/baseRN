import notifee, {Event, EventType} from '@notifee/react-native'
import messaging, {FirebaseMessagingTypes} from '@react-native-firebase/messaging'
import {useEffect} from 'react'
import {onDisplayNotification} from 'src/commons/pushnotification'
import {useAppDispatch} from 'src/redux/hooks'
import {setHasNotification} from 'src/redux/Notification/slice'

const useNotificationService = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsubscribe = () => {
      return notifee.onForegroundEvent((even: Event) => {
        notifee.getBadgeCount().then(count => console.log('Current badge count: ', count))

        dispatch(setHasNotification(true))
        switch (even.type) {
          case EventType.DISMISSED:
            console.log('user dismissed this noti ')
            break
          case EventType.PRESS:
            console.log('user pressed notification on app')
            break
          default:
            break
        }
      })
    }

    unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const unsubscribeMessaging = messaging().onMessage(onDisplayNotification)
    return unsubscribeMessaging
  }, [])

  useEffect(() => {
    // Handle notification when app in background
    messaging().onNotificationOpenedApp((remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
      console.log('onpress noti when app in background (not kill)', remoteMessage)
    })

    // Handle notification when app is killed
    messaging()
      .getInitialNotification()
      .then((remoteMessage: FirebaseMessagingTypes.RemoteMessage | null) => {
        console.log('onpress noti when background (app killed)', remoteMessage)
      })
  }, [])
}

export default useNotificationService
