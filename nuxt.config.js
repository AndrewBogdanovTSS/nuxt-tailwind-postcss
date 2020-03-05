import colors from './config/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'assets/styles/index'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://purgecss.com/guides/nuxt.html
    'nuxt-purgecss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      // Allows the use of single line comments
      // in .pscss and .vue files
      parser: 'postcss-comment',
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // This plugin should come first for imports to work correctly later on
        'postcss-import': {},
        'postcss-url': {},
        // Make sure `nested-props` comes before `nested`
        'postcss-nested-props': {},
        'postcss-nested': {},
        // Be sure to include this plugin
        // before 'postcss-custom-properties'
        // otherwise you won't be able to use
        // postCSS variables inside custom properties
        'postcss-variables': {
          // We can add global variables here
          // and use them in external .pcss files
          // or .vue components
          globals: {
            // Color values are imported from the json file
            colors
          }
        },
        'postcss-custom-properties': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {},
        // Make sure that tailwind generation comes after
        // all other postcss plugins
        // otherwise it may brake the build
        'tailwindcss': {},
        // Example of tailwind custom path usage
        // 'tailwindcss' : require('tailwindcss')(join(__dirname, '/config/tailwind.config.js')),
        'autoprefixer': {}

      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    },
    extend (config, ctx) {
    }
  },
  purgeCSS: {
    mode: 'postcss',
    // You can exclude some classes from purge here
    // Example: [/^my-custom-class/]
    whitelistPatterns: []
  },
}
