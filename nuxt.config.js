
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
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    // '@nuxtjs/tailwindcss',
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
        'postcss-import': {},
        'postcss-url': {},
        'tailwindcss': {},
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
            colors: {
              green: '#00FF00'
            }
          }
        },
        'postcss-custom-properties': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {},
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
