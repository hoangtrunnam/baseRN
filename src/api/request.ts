import {baseUrl, baseUrlRocketChat, timeout} from './config'
import {createRequest} from './core'

const request = createRequest(baseUrl, timeout)
export const requestRocketChat = createRequest(baseUrlRocketChat, timeout)

export default request
