const config = require('hjs-webpack')({
  in: 'src/index.js',
  out: 'dist',
  clearBeforeBuild: true,
  devServer: {
    stats: {
      colors: true,
    },
  },
})

module.exports = config
