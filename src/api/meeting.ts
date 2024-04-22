import {APIs} from './config'
import {getToken} from './core'
import {handleError} from './handleError'
import request from './request'
import type {ApiResponse} from './types'

interface IPropsGetListVideo {
  page?: number
  perPage?: number
  type?: number
  sortBy?: 'asc' | 'desc'
}

export const getListVideo = async (props: IPropsGetListVideo = {}): Promise<ApiResponse<any>> => {
  const {page = 1, perPage = 50, type, sortBy} = props
  try {
    const token = await getToken()
    const result = await request(token.slice(7)).get(
      `${APIs.apiGetListVideo}?page=${page}&per_page=${perPage}&sort_by=${sortBy}&type=${type}`
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
