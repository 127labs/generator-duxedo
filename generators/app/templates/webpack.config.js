var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'src/index.js',
  out: 'release',
  clearBeforeBuild: true
})
