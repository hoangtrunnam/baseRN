import {app_info_types} from './types'

/** lưu lại ngôn ngữ */
export const setLanguageToStore = (payload: any) => {
  return {
    type: app_info_types.SET_LANGUAGE,
    payload,
  }
}
