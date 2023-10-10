import type {Rationale} from 'react-native'
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
