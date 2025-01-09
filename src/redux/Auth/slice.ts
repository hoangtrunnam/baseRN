import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {routes} from 'src/navigation/routes'
import type {RootState} from '../store'
import type {AuthState} from './types'

export const initialState: AuthState = {
  isLoggedIn: false,
  is_first_time: true,
  is_temp_password: true,
  is_have_pin: true,
  is_ekyc: true,
  isLoading: false,
  is_verified_email: false,
  is_temp_pin: true,
  expires_in: null,
  is_not_first_time_login: false,
  navigationAfterAuth: routes.Login,
  step: 0,
}

export const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        ...action.payload,
      }
    },
    loginFail: (state, action: PayloadAction<any>) => {
      return {...state, isLoading: false, isLoggedIn: false, isSuccess: false, ...action.payload}
    },
    logOut: () => initialState,
    setHavePin: (state, action: PayloadAction<boolean>) => {
      state.is_have_pin = action.payload
    },
    setEmailConfirm: (state, action: PayloadAction<boolean>) => {
      state.is_verified_email = action.payload
    },
    clearSession: state => {
      state.isLoggedIn = false
    },
    setTimeFreshToken: (state, action: PayloadAction<number | null>) => {
      state.expires_in = action.payload
    },
    setNotLoginFirstTime: state => {
      state.is_not_first_time_login = true
    },
    setNavigationAfterAuth: (state, action: PayloadAction<string>) => {
      state.navigationAfterAuth = action.payload
    },
  },
})

export const {
  loginSuccess,
  logOut,
  setHavePin,
  loginFail,
  setEmailConfirm,
  clearSession,
  setTimeFreshToken,
  setNotLoginFirstTime,
  setNavigationAfterAuth,
} = authSlice.actions

export const selectAuth = (state: RootState) => state.authReducer
export default authSlice.reducer
