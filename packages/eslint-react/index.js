/**
 * @type {import(eslint).Linter.Config}
 */
const configs = {
  extends: [
    '@idea/eslint-config-ts',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 'off',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: ['^\\[[a-zA-Z0-9-_]+\\]\\.tsx$']
      }
    ]
  }
}

module.exports = configs
