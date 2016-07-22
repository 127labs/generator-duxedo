import React from 'react'
import { Router } from 'react-router'
import routes from 'routes'
import initialize from './initialize'
import Providers from './Providers'
import 'babel-polyfill'
import 'rxjs'
import 'assets/styles/app.scss'

const App = ({ store, history }) =>
  <Providers store={store}>
    <Router history={history} routes={routes} />
  </Providers>

export default initialize(App)
