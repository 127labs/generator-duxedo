import React from 'react'
import { Provider } from 'react-redux'

const Providers = ({ store, children }) =>
  <Provider store={ store }>
    { children }
  </Provider>

Providers.propTypes = {
  store: React.PropTypes.object.isRequired,
  children: React.PropTypes.node,
}

export default Providers
