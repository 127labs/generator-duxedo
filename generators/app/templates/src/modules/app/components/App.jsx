import React from 'react'
import pure from 'recompose/pure'
import { compose } from 'redux'
import { connect } from 'react-redux'

const App = ({ children }) =>
  <main>{ children }</main>

App.propTypes = {
  children: React.PropTypes.node,
}

const mapStateToProps = null
const mapDispatchToProps = null

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  pure
)(App)
