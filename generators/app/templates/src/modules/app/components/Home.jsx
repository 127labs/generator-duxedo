import React, { PropTypes } from 'react'
import pure from 'recompose/pure'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'
import * as selectors from '../selectors'
import GreetForm from './GreetForm'

const propTypes = {
  name: PropTypes.string,
  $app: PropTypes.object,
}

const Home = ({ name, $app }) =>
  <section>
    <GreetForm onSubmit={ $app.submitGreet } />
    <h1>Hello, { name || 'World' }!</h1>
  </section>

Home.propTypes = propTypes

const mapStateToProps = (state) => ({
  name: selectors.name(state),
})

const mapDispatchToProps = (dispatch) => ({
  $app: bindActionCreators(actions, dispatch),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  pure
)(Home)
