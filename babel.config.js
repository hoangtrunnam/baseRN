module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'src/api': './src/api',
          'src/assets': './src/assets',
          'src/commons': './src/commons',
          'src/components': './src/components',
          'src/configs': './src/configs',
          'src/constants': './src/constants',
          'src/features': './src/features',
          'src/locales': './src/locales',
          'src/navigation': './src/navigation',
          'src/redux': './src/redux',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
}
