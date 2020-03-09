const {ThemeBuilder, Theme} = require('tailwindcss-theming')
const mainTheme = new Theme()
  .colors({
    transparent: 'transparent',
    ...require('./config/colors')
  })
  .opacityVariant('25', .25)
  .opacityVariant('50', .50)
  .opacityVariant('75', .75)

module.exports = new ThemeBuilder()
  .default(mainTheme)
