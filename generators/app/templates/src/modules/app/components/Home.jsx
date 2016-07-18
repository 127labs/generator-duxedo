import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from 'app/actions'
import * as selectors from 'app/selectors'

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

export default connect(mapStateToProps, mapDispatchToActions)(Home)
