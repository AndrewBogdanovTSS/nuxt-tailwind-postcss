/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

// byKeys will return keys instead of values to the passed function
function mapObject(obj, fn, byKeys = false) {
  return Object.keys(obj).reduce((result, key) => {
    result[key] = byKeys ? fn(key) : fn(obj[key])
    return result
  }, {})
}

module.exports = {
  theme: {
    colors: require('./config/colors'),
    // Example of generating screen sizes based on the external json config
    screens:mapObject(require('./config/breakpoints'), size => `${size}px`)
  },
  variants: {},
  plugins: []
}
