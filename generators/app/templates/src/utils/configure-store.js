import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { hashHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'

export const sagaMiddleware = createSagaMiddleware()

export default (initialState) => {
  const reducer = require('../reducer').default
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(hashHistory),
        sagaMiddleware
      ),
      global.devToolsExtension && process.env.NODE_ENV !== 'production' ?
        global.devToolsExtension() : f => f
    )
  )

  if (module.hot) {
    module.hot.accept('../reducer', () => {
      store.replaceReducer(require('../reducer').default)
    })
  }

  return store
}
