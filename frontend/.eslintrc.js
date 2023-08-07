module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['@nuxtjs/eslint-config-typescript'],
  plugins: [],
  rules: {
    'vue/no-multiple-template-root': 0,
    '@typescript-eslint/no-var-requires': 0,
    'no-console': 0
  }
}
