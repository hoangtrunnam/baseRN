import {combineReducers} from 'redux'
import appInfoReducer from './AppInfo/slice'
import type {AppInfoType} from './AppInfo/types'
import authReducer from './Auth/slice'
import type {AuthState} from './Auth/types'

export interface ApplicationState {
  appInfo: AppInfoType
  authReducer: AuthState
}

const rootReducer = combineReducers({
  appInfoReducer,
  authReducer,
})

export default rootReducer
