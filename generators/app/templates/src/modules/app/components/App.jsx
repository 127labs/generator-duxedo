import React, { PropTypes } from 'react'
import pure from 'recompose/pure'

const propTypes = {
  children: PropTypes.node,
}

const App = ({ children }) =>
  <main>{ children }</main>

App.propTypes = propTypes

export default pure(App)
