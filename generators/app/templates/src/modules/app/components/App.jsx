import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import pure from 'recompose/pure'

import * as select from '../selectors'

const propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool.isRequired,
}

const App = ({ children, ...props }) =>
  <main>
  {
    React.Children.map(children, (child) =>
      React.cloneElement(child, props))
  }
  </main>

App.propTypes = propTypes

const mapStateToProps = (state) => ({
  loading: select.loading(state),
})

export default compose(
  connect(mapStateToProps),
  pure
)(App)
