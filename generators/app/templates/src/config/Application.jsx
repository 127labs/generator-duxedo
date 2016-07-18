import React from 'react'
import { Router } from 'react-router'

import initialize from 'config/initializer'
import Providers from 'config/Providers'
import routes from 'routes'
import 'styles/styles.scss'

const Application = ({ store, history }) =>
  <Providers store={store}>
    <Router history={history} routes={routes} />
  </Providers>

export default initialize(Application)
