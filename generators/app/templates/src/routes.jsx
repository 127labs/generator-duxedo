import React from 'react'
import { IndexRoute, Route } from 'react-router'

import requireAuth from './middleware/requireAuth'
import app from './modules/app'

export default (
  <Route path="/" component={ app.components.App }>
    { /* Index Route */ }
    <IndexRoute component={ app.components.Home } />

    { /* Routes */ }
    <Route onEnter={ requireAuth }>
      { /* Routes requiring login */ }
    </Route>

    { /* Catch all route */ }
    <Route path="*" component={ app.components.NotFound } status={ 404 } />
  </Route>
)
