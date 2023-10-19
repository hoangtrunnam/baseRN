import AsyncStorage from '@react-native-async-storage/async-storage'
import axios, {AxiosRequestConfig, AxiosResponse, CancelTokenSource} from 'axios'
import Keychain from 'react-native-keychain'
import LoadingPortal from 'src/components/Loading/LoadingPortal'
// import {navigateFromCurrentScreen} from 'src/navigation/navigationHelper'
import {APIs} from './config'

const {CancelToken} = axios
const source = CancelToken.source()
// let store: {
//   getState: () => {(): any; new (): any; appInfoReducer: {language: any}}
//   dispatch: (arg0: {payload: undefined; type: string}) => void
// }

// export const injectStore = (_store: any) => {
//   store = _store
// }
/**
 * tạo ra 1 func request api dựa vào axios
 * @param baseUrl
 * @param timeout
 */
export const createRequest = (baseUrl: string, timeout: number) => {
  return (authToken?: string | undefined, cancelToken?: CancelTokenSource | undefined) => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // 'Accept-Language': store.getState().appInfoReducer.language, // config multiple languages
      Authorization: '',
    }
    // @ts-ignore
    if (authToken) {
      headers.Authorization = `Bearer ${authToken}`
    }

    const defaultOptions: AxiosRequestConfig = {
      headers,
      baseURL: baseUrl,
      timeout,
      cancelToken: cancelToken ? cancelToken.token : source.token,
    }

    axios.interceptors.request.use(async (config: any) => {
      if (config.headers) {
        const deviceIdStorage = await AsyncStorage.getItem('device_id')
        if (deviceIdStorage) {
          config.headers['X-device-id'] = deviceIdStorage
        }
      }
      return config
    })

    axios.interceptors.response.use(
      response => {
        return response
      },
      async error => {
        // Sentry.captureException(error)
        // console.log({ error })
        if (error.response.status === 401) {
          const refreshToken = await getRefreshToken()
          const body = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({token: refreshToken}),
          }
          try {
            const rs = await fetch(`${baseUrl}/${APIs.REFRESH_TOKEN}`, body)
            const data = await rs.json()
            if (data.data) {
              Keychain.setGenericPassword('token', data.data.token, {service: 'token'})
              error.config.headers.Authorization = `Bearer ${data.data.token}`
              return axios.request(error.config)
            }
            // store.dispatch(logoutSuccess())
            Keychain.resetGenericPassword({service: 'token'})
            Keychain.resetGenericPassword({service: 'refreshToken'})
            // navigateFromCurrentScreen(routesMain.DrawerTab, {
            //   screen: routesDrawer.BottomTab,
            //   params: {
            //     screen: routesBottomTab.Homepage,
            //   },
            // })
            LoadingPortal.hide()
            return false
          } catch (err) {
            // store.dispatch(logoutSuccess())
            Keychain.resetGenericPassword({service: 'token'})
            Keychain.resetGenericPassword({service: 'refreshToken'})
            // navigateFromCurrentScreen(routesMain.DrawerTab, {
            //   screen: routesDrawer.BottomTab,
            //   params: {
            //     screen: routesBottomTab.Homepage,
            //   },
            // })
            LoadingPortal.hide()
            return false
          }
        }
        return Promise.reject(error)
      }
    )

    return {
      /**
       * func get
       * override option request
       */
      get: <T = any, R = AxiosResponse<T>>(url: string, options: AxiosRequestConfig = {}) => {
        console.log('url', url)
        return axios.get<T, R>(url, {
          // ...options.params,
          ...defaultOptions,
          ...options,
          headers: {
            ...defaultOptions.headers,
            ...options?.headers,
          },
        })
      },
      /**
       * func post
       * override option request
       */
      post: <T = any, R = AxiosResponse<T>>(
        url: string,
        data?: any,
        options: AxiosRequestConfig = {}
      ) => {
        // console.log({ data })
        return axios.post<T, R>(url, data, {
          ...defaultOptions,
          ...options,
          headers: {
            ...defaultOptions.headers,
            ...options?.headers,
          },
        })
      },
      /**
       * func put
       * override option request
       */
      put: <T = any, R = AxiosResponse<T>>(
        url: string,
        data?: any,
        options: AxiosRequestConfig = {}
      ) =>
        axios.put<T, R>(url, data, {
          ...defaultOptions,
          ...options,
          headers: {
            ...defaultOptions.headers,
            ...options?.headers,
          },
        }),

      /**
       * func put
       * override option request
       */
      patch: <T = any, R = AxiosResponse<T>>(
        url: string,
        data?: any,
        options: AxiosRequestConfig = {}
      ) =>
        axios.patch<T, R>(url, data, {
          ...defaultOptions,
          ...options,
          headers: {
            ...defaultOptions.headers,
            ...options?.headers,
          },
        }),

      /**
       * func delete
       * override option request
       */
      delete: <T = any, R = AxiosResponse<T>>(
        url: string,
        data?: any,
        options: AxiosRequestConfig = {}
      ) =>
        axios.delete<T, R>(url, {
          data: {
            ...data,
          },
          ...defaultOptions,
          ...options,
          headers: {
            ...defaultOptions.headers,
            ...options?.headers,
          },
        }),
    }
  }
}

export const getToken = async () => {
  const token = await Keychain.getGenericPassword({service: 'token'}).then(res => {
    if (res) {
      return res.password
    }
    return ''
  })
  return token
}

export const getRefreshToken = async () => {
  const refreshToken = await Keychain.getGenericPassword({service: 'refreshToken'}).then(res => {
    if (res) {
      return res.password
    }
    return ''
  })
  return refreshToken
}
