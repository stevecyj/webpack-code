module.exports = {
  env: {
    browser: true,
    node:true,
    es2021: true
  },
  extends: ['eslint:recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '.eslintrc.js',
    'webpack.config.js'
  ],
  rules: {
    'prettier/prettier': 'error',
    "no-var": "error",
  },
  plugins: ['prettier']
}
