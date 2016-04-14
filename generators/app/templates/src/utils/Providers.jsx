import React from 'react'
import { connect, Provider } from 'react-redux'

const Providers = ({ store, children }) =>
  <Provider store={ store }>
    { children }
  </Provider>

Providers.propTypes = {
  store: React.PropTypes.object.isRequired,
  children: React.PropTypes.node,
}

const mapStateToProps = null

export default connect(
  mapStateToProps
)(Providers)
