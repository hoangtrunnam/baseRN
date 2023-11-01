/* eslint-disable semi */
module.exports = {
  // automock: true,
  preset: 'react-native',
  setupFiles: ['./__mocks__/react_native_async_storage_async_storage.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-toast-message|@react-native|@react-native-community|react-native-linear-gradient|react-native-keychain|react-native-reanimated)/)',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
}
