module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],

    frameworks: ['mocha', 'sinon-chai'],

    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'node_modules/whatwg-fetch/fetch.js',
      './specs/**/*.spec.js',
    ],

    preprocessors: {
      './specs/**/*.spec.js': ['webpack', 'sourcemap'],
    },

    webpack: {
      resolve: {
        extensions: ["", ".js"],
      },
      module: {
        loaders: [
          {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
        ],
      },
      devtool: 'inline-source-map',
    },

    webpackMiddleware: {
      noInfo: true,
    },

    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd',
      },
      chai: {
        includeStack: true,
      },
    },
  })
}
