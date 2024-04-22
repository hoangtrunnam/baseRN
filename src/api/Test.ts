import {handleError} from './handleError'
import request from './request'
import type {ApiResponse} from './types'

// tìm kiếm sale quản lý của mình
export const testGetUser = async (): Promise<ApiResponse<any>> => {
  try {
    const result = await request().get('https://api.abc.com/users/testApi')
    console.log('result', result)
    const {status, data, code, message} = result.data
    return {
      status,
      data,
      code,
      message,
    }
  } catch (error) {
    return handleError(error)
  }
}
