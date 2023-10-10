import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {AppInfoType} from './types'
import type {RootState} from '../store'

const initialState: AppInfoType = {
  skipIntroduction: false,
  isSuggest: false,
  language: '',
  isShowLanguage: false,
  isCredentials: false,
  haveSuggestAuth: false,
  isCredentialsPin: false,
  OTP: 'sms',
  userInfo: {
    name: '',
    phone: '',
    email: '',
    faceImageUrl: '',
  },
  timeSendEmail: 0,
  isSuggestCredentials: true,
}

export const appInfoSlice = createSlice({
  name: 'appInfoReducer',
  initialState,
  reducers: {
    shipIntro: state => {
      state.skipIntroduction = true
    },
    setCredentials: (state, action: PayloadAction<boolean>) => {
      state.isCredentials = action.payload
    },
    setHaveSuggestAuth: (state, action: PayloadAction<boolean>) => {
      state.haveSuggestAuth = action.payload
    },
    setCredentialsPin: (state, action: PayloadAction<boolean>) => {
      state.isCredentialsPin = action.payload
    },
    setOTP: (state, action: PayloadAction<'sms' | 'mail'>) => {
      state.OTP = action.payload
    },
    resetInvestorInfo: (
      state,
      action: PayloadAction<{name: string; phone: string; email: string; faceImageUrl: string}>
    ) => {
      state.userInfo = {...action.payload}
    },
    setTimeSendEmail: (state, action: PayloadAction<number>) => {
      state.timeSendEmail = action.payload
    },
    setSuggestCredentials: (state, action: PayloadAction<boolean>) => {
      state.isSuggestCredentials = action.payload
    },
  },
})

export const {
  shipIntro,
  setCredentials,
  setHaveSuggestAuth,
  setCredentialsPin,
  setOTP,
  resetInvestorInfo,
  setTimeSendEmail,
  setSuggestCredentials,
} = appInfoSlice.actions

export const selectAppInfo = (state: RootState) => state.appInfoReducer
export default appInfoSlice.reducer
