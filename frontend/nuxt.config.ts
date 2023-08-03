// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt']
      }
    }
  },
  modules: [
    '@pinia/nuxt',
    'nuxt-proxy'
  ],
  plugins: [],
  srcDir: 'src',
  app: {
    baseURL: '',
    head: {
      title: 'Temp',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'shortcut icon', href: '/favicon.png' }
      ]
    }
  },
  nitro: {
    plugins: []
  }
})
