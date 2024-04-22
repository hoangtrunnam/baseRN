import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'
import type {NotificationType} from './types'

export const initialState: NotificationType = {
  hasNotifications: false,
}

export const authNotification = createSlice({
  name: 'notificationReducer',
  initialState,
  reducers: {
    setHasNotification: (state, action: PayloadAction<boolean>) => {
      state.hasNotifications = action.payload
    },
  },
})

export const {setHasNotification} = authNotification.actions

export const selectNotification = (state: RootState) => state.notificationReducer
export default authNotification.reducer
