import React, { PropTypes } from 'react'
import { Router } from 'react-router'

import initialize from './initialize'
import Providers from './Providers'
import routes from '../routes'
import '../styles/styles.scss'

const propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

const Root = ({ store, history }) =>
  <Providers store={ store }>
    <Router history={ history } routes={ routes } />
  </Providers>

Root.propTypes = propTypes

export default initialize(Root)
