/* eslint-disable semi */
let mockStorage = {}

export default {
  setItem: jest.fn((key, value) => {
    return new Promise((resolve, reject) => {
      if (typeof key !== 'string' || typeof value !== 'string') {
        reject(new Error('key and value must be string'))
      }
      mockStorage[key] = value
      resolve(null)
    })
  }),
  getItem: jest.fn(key => {
    return new Promise(resolve => {
      if (mockStorage[key]) {
        resolve(mockStorage[key])
      } else {
        resolve(null)
      }
    })
  }),
  removeItem: jest.fn(key => {
    return new Promise((resolve, reject) => {
      if (typeof key !== 'string') {
        reject(new Error('key must be string'))
      }
      delete mockStorage[key]
      resolve(null)
    })
  }),
  clear: jest.fn(() => {
    return new Promise(resolve => {
      mockStorage = {}
      resolve(null)
    })
  }),
  getAllKeys: jest.fn(() => {
    return new Promise(resolve => {
      resolve(Object.keys(mockStorage))
    })
  }),
  // Thêm bất kỳ phương thức giả mạo nào khác mà bạn cần
}
