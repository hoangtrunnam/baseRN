/**
 * @format
 */

import 'react-native'
import React from 'react'
import {Provider} from 'react-redux'
import rootReducer from '../src/redux/reducer'
import {useNavigation} from '@react-navigation/native'
// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
// import Gift from 'src/features/TestApp/Gift'
import {routes} from 'src/navigation/routes'
import mockNavigation from '../__mocks__/mockNavigation'
import {configureStore} from '@reduxjs/toolkit'
import Login from 'src/features/TestApp/Login'

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn((key, value) => Promise.resolve()),
  getItem: jest.fn(key => Promise.resolve(null)),
  removeItem: jest.fn(key => Promise.resolve()),
  clear: jest.fn(() => Promise.resolve()),
  getAllKeys: jest.fn(() => Promise.resolve([])),
}))

jest.mock('react-native-keychain', () => {
  // Cung cấp một mock implementation tại đây nếu cần
})
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')
  Reanimated.default.call = () => {}
  return Reanimated
})

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}))

useNavigation.mockReturnValue(mockNavigation)

it('renders correctly', () => {
  const store = configureStore({
    reducer: rootReducer,
  })
  const component = renderer.create(
    <Provider store={store}>
      <Login navigation={mockNavigation as any} route={routes as any} />
    </Provider>
  )

  expect(component).toMatchSnapshot()
})
