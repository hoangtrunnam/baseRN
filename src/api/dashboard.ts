import {APIs, baseUrlPortal} from './config'
import {getToken} from './core'
import {handleError} from './handleError'
import request from './request'
import type {ApiResponse} from './types'

export const getListCompany = async (
  searchValue?: string | number,
  group?: string
): Promise<ApiResponse<any>> => {
  try {
    const token = await getToken()
    const result = await request(token.slice(7)).get(
      `${APIs.apiGetListCompany}?company_name=${searchValue}&group=${group}`
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

export const getDetailDepartmentInfo = async (id: string | number): Promise<ApiResponse<any>> => {
  try {
    const token = await getToken()
    const result = await request(token.slice(7)).get(`${APIs.apiGetDetailDepartmentInfo}/${id}`)
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

export const getListBase = async (): Promise<ApiResponse<any>> => {
  try {
    const token = await getToken()
    const result = await request(token.slice(7)).get(`${APIs.apiGetListBase}`)
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

export const getListDepartments = async (
  company_id: number,
  department_name: string
): Promise<ApiResponse<any>> => {
  try {
    const token = await getToken()
    const result = await request(token.slice(7)).get(
      `${APIs.apiGetListDepartment}?company_id=${company_id}&department_name=${department_name}`
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

interface IProps {
  type: number
  content: string
}

export const postDataContact = async (props: IProps): Promise<ApiResponse<any>> => {
  try {
    const {type, content} = props
    const body = {
      type,
      content,
    }
    const result = await request().post(`${baseUrlPortal}${APIs.apiPostContact}`, body)
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

interface IPropsGetNews {
  page?: number
  perPage?: number
}

export const getNews = async (props: IPropsGetNews = {}): Promise<ApiResponse<any>> => {
  const {page = 1, perPage = 50} = props
  try {
    const token = await getToken()
    const result = await request(token.slice(7)).get(
      `${baseUrlPortal}${APIs.apiGetNews}?page=${page}&perPage=${perPage}`
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

export const getSalaryByMonth = async (date: string): Promise<ApiResponse<any>> => {
  try {
    const token = await getToken()
    const result = await request(token.slice(7)).get(`${APIs.apiSalaryByMonth}?date=${date}`)
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
