import React from 'react'
import { Router } from 'react-router'

import initialize from './initialize'
import Providers from './Providers'
import routes from '../routes'
import '../styles/styles.scss'

const Root = ({ store, history }) =>
  <Providers store={ store }>
    <Router history={ history } routes={ routes } />
  </Providers>

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired,
}

export default initialize(Root)
