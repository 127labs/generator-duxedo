import 'babel-polyfill'
import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'

const mountEl = document.getElementById('root')

let render = () => {
  const Root = require('./utils/Root').default
  ReactDOM.render(<Root />, mountEl)
}

if (module.hot) {
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react')
    ReactDOM.render(
      <RedBox error={ error } />.mountEl
    )
  }

  render = () => {
    try {
      renderApp()
    } catch (error) {
      renderError(error)
    }
  }

  module.hot.accept('./utils/Root', () => {
    setTimeout(render)
  })
}

render()
