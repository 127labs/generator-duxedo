import * as types from './types'
import * as actions from './actions'

export const pingEpic = (action$, store) =>
  action$.ofType(types.PING)
    .delay(1000)
    .map(action => actions.pong())
