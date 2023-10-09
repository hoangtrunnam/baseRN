import {createRequest} from '../api/core'
import {baseUrl, baseUrlRocketChat, timeout} from './config'

const request = createRequest(baseUrl, timeout)
export const requestRocketChat = createRequest(baseUrlRocketChat, timeout)

export default request
