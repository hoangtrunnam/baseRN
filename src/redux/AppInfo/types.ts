import {REHYDRATE} from 'redux-persist'

export const app_info_types = {
  SET_SKIP_INTRODUCTION: 'SET_SKIP_INTRODUCTION',
  SET_FCM_TOKEN: 'SET_FCM_TOKEN',
  SET_LANGUAGE: 'SET_LANGUAGE',
  INIT_APP: REHYDRATE as string,
}
export interface IProfile {
  uuid: number
  id: number
  name: string
  role: number
  department_code: any
  email: string
  company_id: number
  screen: number
  created_at: number
  updated_at: number
  supervisor_email: string
  department: I3Type | null
  company: I3Type | null
  get_role: I3Type | null
  name_alphabet?: string | null
}
export interface I3Type {
  id?: number
  name?: string
  company_name?: string
  name_ja?: string
}
