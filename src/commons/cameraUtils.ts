import {Platform} from 'react-native'
import {check, PERMISSIONS, type Rationale, RESULTS} from 'react-native-permissions'
import {type IReturnRequestPermission, requestPermission} from './permissionUtil'

export const permisstionCamera = Platform.select({
  ios: PERMISSIONS.IOS.CAMERA,
  android: PERMISSIONS.ANDROID.CAMERA,
}) as any

/** func check quyền camera
 * nếu denied thì hiển thị popup mặc định hỏi quyền
 * còn lại trả về đúng result
 */
export const checkAndRequestCameraPermission: (
  rationale?: Rationale
) => IReturnRequestPermission = async rationale => {
  const result = await check(permisstionCamera)
  switch (result) {
    case RESULTS.DENIED: {
      return requestPermission(permisstionCamera, rationale)
    }

    default:
      return result
  }
}

/** func check quyền library photo
 * nếu denied thì hiển thị popup mặc định hỏi quyền
 * còn lại trả về đúng result
 */
export const permisstionLibrary = Platform.select({
  ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
}) as any

export const checkAndRequestLibraryPermission: (
  rationale?: Rationale
) => IReturnRequestPermission = async rationale => {
  const result = await check(permisstionLibrary)
  switch (result) {
    case RESULTS.DENIED: {
      return requestPermission(permisstionLibrary, rationale)
    }

    default:
      return result
  }
}
