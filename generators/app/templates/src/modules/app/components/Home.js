import React from 'react'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'
import { pure } from 'recompose'
import * as actions from '../actions'
import * as selectors from '../selectors'

const Home = ({ isPinging, $actions }) =>
  <div>
    <h1>is pinging: {`${isPinging}`}</h1>
    <button onClick={$actions.ping}>Start PING</button>
  </div>

const mapStateToProps = (state) => ({
  isPinging: selectors.isPinging(state)
})

const mapDispatchToActions = (dispatch) => ({
  $actions: bindActionCreators(actions, dispatch)
})

export default compose(
  connect(mapStateToProps, mapDispatchToActions),
  pure
)(Home)
