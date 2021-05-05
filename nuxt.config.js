require('dotenv').config()

const URL_API = 'http'+ (process.env.API_SSL ? 's' : '') + '://' + (process.env.API_HOST || '') + '/'
const URL_APP = 'http' + (process.env.APP_SSL ? 's' : '') + '://' + (process.env.APP_HOST || '') + '/'
const APP_ENV = process.env.APP_ENV
const PORT = process.env.PORT

export default {
  
  /*
  ** ENV
  */ 
  
  env: {
    URL_API,
    URL_APP,
    APP_ENV
  },
  
  /*
  ** DEBUG
  */
  
  debug: (APP_ENV === 'production' ? false : true),
  
  /*
  ** Server 
  */
  
  server: {
    port: PORT,
  },

  /*
  ** Global page headers: https://go.nuxtjs.dev/config-head
  */
  
  head: {
    titleTemplate: (titleChunk) => {
      let defaultTitle = 'Libre Opción'
      if (titleChunk === defaultTitle) {
        return defaultTitle
      }
      return titleChunk ? `${titleChunk} - ${defaultTitle}` : defaultTitle;
    },
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: process.env.npm_package_description || '', hid: 'description', },
      { name: 'robots', content: 'all' },
    ],
    link: [
      { rel: 'shortcut icon', href: `/favicon.ico` },
    ]
  },
  
  /*
  ** Global CSS: https://go.nuxtjs.dev/config-css
  */
  
  css: [
  ],
  
  /*
  ** Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  */
  
  plugins: [
    { src: '~/plugins/vee-validate.js' },
  ],
  
  /*
  ** Auto import components: https://go.nuxtjs.dev/config-components
  */
  
  components: true,
  
  /*
  ** Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  */
  
  buildModules: [
  ],

  /*
  ** Nuxt.js modules: https://go.nuxtjs.dev/config-modules
  */
  
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
    'bootstrap-vue/nuxt',
  ],
  
  proxy: {
    '/api': { target: URL_API, pathRewrite: {'^/api/': ''} }
  },
  
  /*
  ** Customize the progress bar color
  */
  
  loading: false,
  
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */

  build: {
  }
}
