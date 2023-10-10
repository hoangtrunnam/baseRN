import * as Keychain from 'react-native-keychain'
import {put, takeLatest} from 'redux-saga/effects'
import {logOut} from 'src/redux/Auth/slice'
// import { showMessage } from 'src/commons/objectUtil'
import {
  resetInvestorInfo,
  setCredentials,
  setCredentialsPin,
  setHaveSuggestAuth,
  setOTP,
} from '../AppInfo/slice'

function* LogoutAsync(): Generator<any, any, any> {
  Keychain.resetGenericPassword()
  Keychain.resetGenericPassword({service: 'accessToken'})
  Keychain.resetGenericPassword({service: 'refreshToken'})
  Keychain.resetGenericPassword({service: 'pinCode'})
  yield put(resetInvestorInfo({name: '', phone: '', email: '', faceImageUrl: ''}))
  yield put(setCredentialsPin(false))
  yield put(setOTP('sms'))
  yield put(setHaveSuggestAuth(false))
  yield put(setCredentials(false))
}

export default function* watchAuthAsync() {
  yield takeLatest(logOut.type, LogoutAsync)
}
