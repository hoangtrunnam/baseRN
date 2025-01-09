import Clipboard from '@react-native-clipboard/clipboard'
import _ from 'lodash'
import ReactNativeBlobUtil from 'react-native-blob-util'
import Toast from 'react-native-toast-message'
import {baseUrl} from 'src/api/config'
import {requestID} from './validator'

export const p8: (s?: boolean) => string = s => {
  const p = `${Math.random().toString(16)}000000000`.substr(2, 8)
  return s ? `-${p.substr(0, 4)}-${p.substr(4, 4)}` : p
}

/** func generate ra uid */
export const generateRandomUID = () => {
  return p8() + p8(true) + p8(true) + p8()
}

/** func format số lượng review
 * 1- 999 → 1-999
 * 1.000 - 999.999 → 1k - 999.9k
 * 1.000.000 - 999.999.999 → 1tr - 999.9tr
 * 1.000.000.000 trở lên → 1tỷ+
 */
export const formatQuantity: (quantity: number) => string = quantity => {
  if (!quantity) {
    return ''
  }
  if (quantity >= 1000000000) {
    return `${_.floor(quantity / 1000000000, 1)}${'labels.review.billion'.trans()}`
  }
  if (quantity >= 1000000) {
    return `${_.floor(quantity / 1000000, 1)}${'labels.review.million'.trans()}`
  }
  if (quantity >= 1000) {
    return `${_.floor(quantity / 1000, 1)}${'labels.review.thousand'.trans()}`
  }
  return `${quantity}`
}

/** func viết hoa chữ cái đầu */
export const capitalize = (s: string) => {
  if (typeof s !== 'string') {
    return ''
  }
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// viết hoa chữ cái đầu của 1 từ trong 1 chuỗi:
// vd: hoang trung nam => Hoang Trung Nam
export const capitalizeFirstLetterInWords = (s: string) => {
  return s.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
}

/** func render link image */
export const convertLinkImage = (uri?: string) => {
  if (!uri) {
    return ''
  }
  // if (uri.includes('http' || 'https')) return uri
  if (/http/.test(uri) || /https/.test(uri)) {
    return uri
  }
  return `${baseUrl}${uri}`
}

/** func show thông báo */
export const showMessage = (
  message?: string,
  status?:
    | 'success'
    | 'error'
    | 'warning'
    | 'cartSuccess'
    | 'favourite'
    | 'link'
    | 'partnerCartSuccess',
  bottom?: number,
  onPress?: () => void,
  time?: number,
) => {
  Toast.show({
    position: 'bottom',
    type: 'tomatoToast',
    bottomOffset: bottom || 10,
    props: {uuid: {message, onPress}, status},
    visibilityTime: time || 3000,
  })
}

/** func copy text */

export const copyText = (text: string) => {
  Clipboard.setString(text)
}

/** func get file name from path */
export const getFileName = (path: string) => {
  const fileName = path.replace(/^.*[\\/]/, '')
  return fileName
}

export const deleteImage = async (path: string) => {
  const exist = await ReactNativeBlobUtil.fs.exists(path)
  if (exist) {
    await ReactNativeBlobUtil.fs.unlink(path)
  }
}

export const deleteFile = async (path: string) => {
  const exist = await ReactNativeBlobUtil.fs.exists(path)
  if (exist) {
    await ReactNativeBlobUtil.fs.unlink(path)
  }
}

function extractFileName(url: string) {
  const match = url.match(/\/([^/]+)$/)
  if (match) {
    return match[1]
  }
  return null
}

export const saveImageWithExistedPath = async (
  uri: string,
  type: 'uri' | 'base64' | 'video',
  explore?: boolean,
) => {
  let result = ''
  const {fs} = ReactNativeBlobUtil
  const path = explore
    ? `${fs.dirs.CacheDir}/EPIC_${requestID('video').substring(7)}.mp4`
    : `${fs.dirs.CacheDir}/${extractFileName(uri)}`

  const exists = await fs.exists(path)

  if (exists) {
    result = `file://${path}`
  } else {
    await deleteImage(path)
    if (type === 'base64') {
      const Base64Code = uri.split('data:image/png;base64,')
      result = await fs
        .writeFile(path, Base64Code[Base64Code?.length - 1], 'base64')
        .then((response: any) => {
          // @ts-ignore
          if (response) {
            return `file://${path}`
          }
          return ''
        })
    } else {
      const res_path = await ReactNativeBlobUtil.config({
        fileCache: true,
        path,
      }).fetch('GET', uri)
      result = `file://${res_path.path()}`
    }
  }

  return {image: result}
}

export const getFileType = (uri: string) => {
  if (uri) {
    return uri.split('.').pop()
  }
  return ''
}

export const saveImage = async (uri: string) => {
  let result = ''
  const {fs} = ReactNativeBlobUtil
  const path = `${fs.dirs.CacheDir}/EPIC_${requestID('img').substring(7)}.png`
  await deleteImage(path)
  const uriPath = await ReactNativeBlobUtil.fs.appendFile(path, uri, 'uri')
  if (uriPath) {
    result = `file://${path}`
  } else {
    result = ''
  }
  return {image: result}
}
