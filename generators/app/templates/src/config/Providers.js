import React from 'react'
import { Provider } from 'react-redux'

const Providers = ({ store, children }) =>
  <Provider store={store}>
    {children}
  </Provider>

export default Providers
