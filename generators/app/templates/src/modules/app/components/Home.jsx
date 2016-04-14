import React from 'react'
import pure from 'recompose/pure'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'
import * as selectors from '../selectors'
import GreetForm from './GreetForm'

const Home = ({ name, $app }) =>
  <section>
    <GreetForm onSubmit={ $app.submitGreet } />
    <h1>Hello, { name || 'World' }!</h1>
  </section>

Home.propTypes = {
  name: React.PropTypes.string,
  $app: React.PropTypes.object,
}

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
