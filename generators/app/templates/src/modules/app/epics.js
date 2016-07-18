import * as types from 'app/types'
import * as actions from 'app/actions'

export const pingEpic = (action$, store) =>
  action$.ofType(types.PING)
    .delay(1000)
    .map(action => actions.pong())
