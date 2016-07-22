import * as types from './types'

export default (state = { isPinging: false }, action) => {
  switch (action.type) {
    case types.PING:
      return { isPinging: true }
    case types.PONG:
      return { isPinging: false }
    default:
      return state
  }
}
