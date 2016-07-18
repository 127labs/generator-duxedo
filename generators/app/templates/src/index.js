import 'utils/imports'
import React from 'react'
import ReactDOM from 'react-dom'

const mountEl = document.getElementById('root')

let render = () => {
  const Application = require('bootstrap/Application').default
  ReactDOM.render(<Application />, mountEl)
}

if (module.hot) {
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react').default
    ReactDOM.render(
      <RedBox error={error} />, mountEl
    )
  }

  render = () => {
    try {
      renderApp()
    } catch (error) {
      renderError(error)
    }
  }

  module.hot.accept('bootstrap/Application', () => {
    setTimeout(render)
  })
}

render()
