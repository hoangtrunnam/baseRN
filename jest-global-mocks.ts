jest.mock('react-native-device-info', () => ({
  hasNotch: jest.fn(),
}))

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
  useFocusEffect: jest.fn(),
}))

jest.mock('react-native-keychain', () => ({
  setGenericPassword: jest.fn(),
  getGenericPassword: jest.fn(() =>
    Promise.resolve({username: 'testUser', password: 'testPassword'})
  ),
  resetGenericPassword: jest.fn(),
}))

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(() => Promise.resolve()),
}))

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
}))

jest.mock('react-native-reanimated', () => ({
  createAnimatedComponent: jest.fn(),
}))

jest.mock('src/redux/hooks', () => ({
  useAppSelector: jest.fn().mockImplementation(selector => selector({})),
  useAppDispatch: () => jest.fn(),
}))

jest.mock('react-native-video', () => 'Video')

jest.mock('@react-native-firebase/messaging', () => {
  return () => ({
    onMessage: jest.fn(),
    onNotificationOpenedApp: jest.fn(),
    getInitialNotification: jest.fn(),
  })
})

jest.mock('@notifee/react-native', () => ({
  onBackgroundEvent: jest.fn(),
  onForegroundEvent: jest.fn(),
  AndroidImportance: {
    HIGH: 'high',
    DEFAULT: 'default',
  },
}))

jest.mock('react-native-confirmation-code-field', () => {
  return {
    CodeField: 'CodeField',
    Cursor: 'Cursor',
  }
})

jest.mock('react-native-fs', () => ({
  readDir: jest.fn(_path => Promise.resolve(['mockedFile1', 'mockedFile2'])),
  readFile: jest.fn((_filePath, _encoding) => Promise.resolve('mocked file content')),
  writeFile: jest.fn((_filePath, _content, _encoding) => Promise.resolve()),
  appendFile: jest.fn((_filePath, _content, _encoding) => Promise.resolve()),
  exists: jest.fn(_filePath => Promise.resolve(true)),
  unlink: jest.fn(_filePath => Promise.resolve()),
  stat: jest.fn(_filePath =>
    Promise.resolve({
      /* mocked stat object */
    })
  ),
}))

jest.mock('@react-native-camera-roll/camera-roll', () => ({
  getPhotos: jest.fn(() =>
    Promise.resolve({
      edges: [
        {
          node: {
            image: {uri: 'mockedImageUri1'},
            timestamp: 123456789,
            location: {latitude: 0, longitude: 0},
          },
        },
        {
          node: {
            image: {uri: 'mockedImageUri2'},
            timestamp: 987654321,
            location: {latitude: 1, longitude: 1},
          },
        },
        // Add more mocked photo data as needed
      ],
      page_info: {
        has_next_page: true,
        start_cursor: 'mockStartCursor',
        end_cursor: 'mockEndCursor',
      },
    })
  ),
  saveToCameraRoll: jest.fn((_tag, _type) => Promise.resolve('mockedAssetUrl')),
  deletePhotos: jest.fn(_assetUris => Promise.resolve(true)),
}))

jest.mock('react-native-permissions', () => ({
  check: jest.fn(() => Promise.resolve('granted')),
  request: jest.fn(() => Promise.resolve('granted')),
  checkMultiple: jest.fn(() =>
    Promise.resolve({
      'android.permission.CAMERA': 'granted',
      'android.permission.ACCESS_FINE_LOCATION': 'denied',
    })
  ),
  PERMISSIONS: {
    ANDROID: {
      CAMERA: 'android.permission.CAMERA',
      ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION',
    },
  },
  RESULTS: {
    UNAVAILABLE: 'unavailable',
    DENIED: 'denied',
    GRANTED: 'granted',
    BLOCKED: 'blocked',
  },
}))

jest.mock('react-native-config', () => ({
  APP_NAME: 'hakonehotel',
  API_URL: 'http://HOANG.org/',
  ANDROID_APP_ID: 'com.hakonehoteldev',
  ANDROID_APP_VERSION_NAME: '1.0.0',
  ANDROID_APP_VERSION_CODE: '1',
  IOS_APP_ID: 'com.hakonehotel.dev',
  IOS_APP_VERSION_CODE: '1.0.0',
  IOS_APP_BUILD_CODE: '1',
  CODEPUSH_ANDROID_DEVELOPMENT_KEY: '',
  CODEPUSH_IOS_DEVELOPMENT_KEY: '',
  ONE_SIGNAL: '',
  FACEBOOK_DISPLAY_NAME: 'hakonehotel',
  FACEBOOK_APP_ID: '0000',
  FACEBOOK_BUNDLE_URL: '0000',
}))
