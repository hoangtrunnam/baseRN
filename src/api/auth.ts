import {APIs, baseUrlElearning, baseUrlPortal} from './config'
import {getToken} from './core'
import {handleError} from './handleError'
import request from './request'
import type {ApiResponse} from './types'
import Reactotron from 'reactotron-react-native'

export const LoginDaisei = async (
  userId: string | number,
  password: string
): Promise<ApiResponse<any>> => {
  try {
    const result = await request().post(`${APIs.apiLogin}?id=${userId}&password=${password}`)
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

export const getTokenElearning = async (): Promise<ApiResponse<any>> => {
  try {
    const token = await getToken() // token daisei cloud dev/stage from local

    const formData = new FormData()
    formData.append('token', token.slice(7))
    const result = await request().post(
      `${baseUrlElearning}${APIs.apiGetTokenElearning}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    Reactotron.log?.('result hahaha:', result)
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

export const postDeviceToken = async (deviceToken: string): Promise<ApiResponse<any>> => {
  try {
    const body = {
      token: deviceToken,
      isLogOut: '',
      token_old: '',
    }
    const token = await getToken()
    const result = await request(token.slice(7)).post(
      `${baseUrlPortal}${APIs.apiPostDeviceToken}`,
      body
    )
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

export const getOtpCode = async (phone: string): Promise<ApiResponse<any>> => {
  try {
    const formData = new FormData()
    formData.append('phone', phone)
    const result = await request().post(APIs.apiPostPhoneToGetOtp, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
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

export const verifyOtp = async (
  otpCode: string,
  phoneNumber: string
): Promise<ApiResponse<any>> => {
  try {
    const formData = new FormData()
    formData.append('code', otpCode)
    formData.append('phone', phoneNumber)
    const result = await request().post(APIs.apiPostVerifyOtpCode, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
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

export const resetPassword = async (
  password: string,
  confirmPassword: string,
  token: string
): Promise<ApiResponse<any>> => {
  try {
    const formData = new FormData()
    formData.append('password', password)
    formData.append('password_confirmation', confirmPassword)

    const result = await request(token).post(`${APIs.apiPostResetPassword}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
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
