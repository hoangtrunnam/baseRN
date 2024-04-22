import {combineReducers} from 'redux'
import appInfoReducer from './AppInfo/slice'
import type {IProfile} from './AppInfo/types'
import authReducer from './Auth/slice'
import notificationReducer from './Notification/slice'

import type {AuthState} from './Auth/types'
import type {NotificationType} from './Notification/types'

export interface ApplicationState {
  appInfo: IProfile
  authReducer: AuthState
  notificationReducer: NotificationType
}

const rootReducer = combineReducers({
  appInfoReducer,
  authReducer,
  notificationReducer,
})

export default rootReducer
