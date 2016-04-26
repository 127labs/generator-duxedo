import 'babel-polyfill'
import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Root from './utils/Root'

const mountEl = document.getElementById('root')

ReactDOM.render(<AppContainer component={ Root } />, mountEl)

if (module.hot) {
  module.hot.accept('./utils/Root', () => {
    const NextRoot = require('./utils/Root').default
    ReactDOM.render(<NextRoot />, mountEl)
  })
}
