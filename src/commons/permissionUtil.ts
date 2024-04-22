import {PermissionsAndroid, type Rationale} from 'react-native'
import {
  RESULTS,
  check,
  request,
  checkNotifications,
  requestNotifications,
  AndroidPermission,
  IOSPermission,
  PermissionStatus,
} from 'react-native-permissions'
import {DIMENSION} from './dimension'

export interface IPayloadRequestPermission {
  permission: AndroidPermission | IOSPermission
  need_request?: boolean
}

export type IReturnRequestPermission = Promise<PermissionStatus>

export const requestPermission = async (
  permission: AndroidPermission | IOSPermission,
  rationale?: Rationale
) => {
  const result = await request(permission, rationale)
  if (result === RESULTS.GRANTED) {
    return result
  }
  return RESULTS.BLOCKED
}

/**
 * func rewrite check+request permission
 */
export const checkPermission: (
  payload: IPayloadRequestPermission
) => IReturnRequestPermission = async ({permission, need_request}) => {
  const result = await check(permission)
  switch (result) {
    case RESULTS.DENIED:
      if (!need_request) {
        return RESULTS.BLOCKED
      }
      return requestPermission(permission)

    default:
      return result
  }
}

export const requestNotificationPermission = async () => {
  const {status} = await requestNotifications(['alert', 'sound', 'badge', 'criticalAlert'])
  return status
}

export const checkNotificationPermission: () => IReturnRequestPermission = async () => {
  const {status} = await checkNotifications()
  switch (status) {
    case RESULTS.DENIED: {
      return requestNotificationPermission()
    }
    default:
      return status
  }
}

// check permissions storage for android
export async function hasAndroidPermission() {
  const getCheckPermissionPromise = () => {
    if (+DIMENSION.androidVersion >= 33) {
      return Promise.all([
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES),
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO),
      ]).then(
        ([hasReadMediaImagesPermission, hasReadMediaVideoPermission]) =>
          hasReadMediaImagesPermission && hasReadMediaVideoPermission
      )
    } else {
      return PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
    }
  }

  const hasPermission = await getCheckPermissionPromise()
  if (hasPermission) {
    return true
  }
  const getRequestPermissionPromise = () => {
    if (+DIMENSION.androidVersion >= 33) {
      return PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
      ]).then(
        statuses =>
          statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
            PermissionsAndroid.RESULTS.GRANTED
      )
    } else {
      return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE).then(
        status => status === PermissionsAndroid.RESULTS.GRANTED
      )
    }
  }

  return await getRequestPermissionPromise()
}
