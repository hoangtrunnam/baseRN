/* eslint-disable semi */
const mockNavigation = {
  getUniqueId: jest.fn(() => 'uniqueId'),
  getVersion: jest.fn(() => '1.0'),
  hasNotch: jest.fn(() => false),
  navigate: jest.fn(),
  goBack: jest.fn(),
}

export default mockNavigation
