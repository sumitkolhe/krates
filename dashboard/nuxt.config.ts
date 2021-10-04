import { NuxtConfig } from '@nuxt/types/config'

const NuxtAppConfig: NuxtConfig = {
  target: 'static',

  head: {
    title: 'Detabase',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900',
      },
    ],
  },

  css: [
    './assets/global.css',
    'codemirror/lib/codemirror.css',
    'codemirror/theme/base16-dark.css',
    '@geist-ui/vue/dist/geist-ui.css',
  ],

  plugins: [{ src: '~plugins/codemirror', ssr: false }, '~plugins/theme'],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: ['@nuxtjs/axios'],

  axios: {},
  server: {
    port: '3000',
    host: '192.168.0.150',
  },

  // generate: {
  //   dir: './dist/dashboard',
  //   fallback: true,
  // },

  build: { transpile: ['@geist-ui/vue'] },
}

export default NuxtAppConfig
