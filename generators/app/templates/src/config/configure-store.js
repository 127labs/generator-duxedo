import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { browserHistory } from 'react-router'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'

export default (initialState) => {
  const reducer = require('reducer').default
  const epicMiddleware = createEpicMiddleware(require('epic').default)
  const routerMiddleware = createRouterMiddleware(browserHistory)
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware,
        epicMiddleware
      ),
      global.devToolsExtension && process.env.NODE_ENV !== 'production' ? global.devToolsExtension() : f => f
    )
  )

  if (module.hot) {
    module.hot.accept('reducer', () => {
      store.replaceReducer(require('reducer').default)
    })

    module.hot.accept('epic', () => {
      epicMiddleware.replaceEpic(require('epic').default)
    })
  }

  return store
}
