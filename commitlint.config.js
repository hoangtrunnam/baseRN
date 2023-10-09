/* eslint-disable semi */
/* eslint-disable prettier/prettier */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'revert',
        'add',
        'chore',
        'build',
      ],
    ],
  },
}
