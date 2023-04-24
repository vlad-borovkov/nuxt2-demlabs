import { resolve } from 'path'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nux2-demlabs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  srcDir: 'src/',
  alias: {
    icons: resolve(__dirname, './src/assets/icons'),
    atoms: resolve(__dirname, './src/components/atoms'),
    molecules: resolve(__dirname, './src/components/molecules'),
    organisms: resolve(__dirname, './src/components/organisms'),
    templates: resolve(__dirname, './src/components/templates'),
    directives: resolve(__dirname, './src//directives'),
    services: resolve(__dirname, './src/services'),
    repositories: resolve(__dirname, './src/repositories'),
    types: resolve(__dirname, './src/types'),
    plugins: resolve(__dirname, './src/plugins'),
  },

  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  styleResources: {
    scss: [
      './src/assets/scss/_mixins.scss',
      './src/assets/scss/_variables.scss',
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: require('sass')
      }
    }
  },
  css: [
    '@/assets/scss/main.scss'
  ]
}

