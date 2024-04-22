import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'
import type {IProfile} from './types'

const initialState: IProfile = {
  uuid: -1,
  id: -1,
  name: '',
  role: -1,
  department_code: null,
  email: '',
  company_id: -1,
  screen: -1,
  created_at: -1,
  updated_at: -1,
  supervisor_email: '',
  department: null,
  company: null,
  get_role: null,
  name_alphabet: null,
}

export const appInfoSlice = createSlice({
  name: 'appInfoReducer',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<IProfile>) => {
      Object.assign(state, action.payload)
    },
  },
})

export const {setUserInfo} = appInfoSlice.actions

export const selectAppInfo = (state: RootState) => state.appInfoReducer
export default appInfoSlice.reducer
