module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 11
  },
  ignorePatterns: ['**/*.min.js', '**/node_modules/**/*.js'],
  rules: {
    'no-unused-vars': 1
  }
}
