import React from 'react'
import { hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import saga from '../saga'
import configureStore, { sagaMiddleware } from './configure-store'

export default (ComponentToInitialize) => () => {
  const initialState = {}
  const store = configureStore(initialState)
  const history = syncHistoryWithStore(hashHistory, store)

  sagaMiddleware.run(saga, store.dispatch)

  return <ComponentToInitialize store={ store } history={ history } />
}
