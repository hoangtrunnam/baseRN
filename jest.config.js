module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest-global-mocks.ts'],
  collectCoverage: true, // Bật việc thu thập thông tin coverage
  coverageReporters: [['json', {file: 'jest-report.json'}]], // Chọn định dạng của báo cáo là JSON
  coverageDirectory: './coverage', // Đường dẫn lưu trữ các báo cáo
  // transform: {
  //   '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  // },
  // transformIgnorePatterns: [
  //   'node_modules/(?!(react-native|react-native-reanimated)/)',
  // ],
}
