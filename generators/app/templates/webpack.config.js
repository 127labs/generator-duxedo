const config = require('hjs-webpack')({
  in: 'src/index.js',
  out: 'dist',
  clearBeforeBuild: true,
  devServer: {
    stats: {
      colors: true
    }
  }
})

config.resolve.modulesDirectories = [
  'web_modules',
  'node_modules',
  'src',
  'src/modules/'
]

module.exports = config
