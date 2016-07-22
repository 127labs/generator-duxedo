import React from 'react'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'config/configure-store'

export default (ComponentToInitialize) => () => {
  const store = configureStore({})
  const history = syncHistoryWithStore(browserHistory, store)

  return <ComponentToInitialize store={store} history={history} />
}
