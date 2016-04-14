import * as types from './types'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GREET:
      return { ...state, name: action.payload }
    default:
      return state
  }
}
