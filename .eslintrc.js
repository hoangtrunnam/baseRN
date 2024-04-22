module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        semi: ['error', 'never'],
        'arrow-body-style': 'off',
        'react/no-unused-prop-types': 'off',
        'react/sort-comp': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-wrap-multilines': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/destructuring-assignment': 'off',
        'react/no-access-state-in-setstate': 'off',
        'react/no-array-index-key': 'off',
        'no-underscore-dangle': 'off',
        // '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        'prettier/prettier': [
          'error',
          {
            trailingComma: 'es5',
            singleQuote: true,
            printWidth: 100,
            semi: false,
          },
        ],
      },
    },
  ],
}
