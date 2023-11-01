import React from 'react'
import renderer from 'react-test-renderer'
import Gift from 'src/features/TestApp/Gift'

test('renders correctly', () => {
  const tree = renderer.create(<Gift />).toJSON()
  expect(tree).toMatchSnapshot()
})
