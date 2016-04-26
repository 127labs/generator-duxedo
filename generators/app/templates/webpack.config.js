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

config.entry.unshift('react-hot-loader/patch')

module.exports = config
