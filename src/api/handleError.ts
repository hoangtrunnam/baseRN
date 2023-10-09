import axios from 'axios'
import type {ApiResponse} from './types'

export const handleError: (error: any) => ApiResponse<any> = error => {
  if (axios.isCancel(error)) {
    return {
      status: 0,
      success: false,
      data: null,
      code: 301,
      message: 'Hủy api',
    }
  }
  if (axios.isAxiosError(error)) {
    return {
      status: 0,
      cancel: false,
      data: null,
      // @ts-ignore
      code: error?.response?.data.code || 500,
      message:
        // @ts-ignore
        (error?.response?.data?.message as string) ||
        `Hệ thống đang nâng cấp, vui lòng thử lại sau ít phút! ${error?.response?.data.code}`,
    }
  }
  return {
    status: 0,
    cancel: false,
    message: 'Hệ thống đang nâng cấp, vui lòng thử lại sau ít phút',
    code: error?.response?.status,
    data: null,
  }
}
