import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'

const propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

const Providers = ({ store, children }) =>
  <Provider store={ store }>
    { children }
  </Provider>

Providers.propTypes = propTypes

export default Providers
