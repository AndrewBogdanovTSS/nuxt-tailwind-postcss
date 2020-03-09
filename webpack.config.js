const path = require('path')
const clientPath = path.join(path.resolve(__dirname))
module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': clientPath,
      '~': clientPath
    }
  }
}