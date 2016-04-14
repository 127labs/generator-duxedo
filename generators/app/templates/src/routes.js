import React from 'react'
import { Route } from 'react-router'

import app from './modules/app'
import shared from './modules/shared'

export default (
  <Route path="/" component={ app.components.App }>
    { /* Catch all route */ }
    <Route path="*" component={ shared.components.NotFound } status={ 404 } />
  </Route>
)
