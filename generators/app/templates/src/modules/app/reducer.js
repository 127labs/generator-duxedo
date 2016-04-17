import * as types from './types'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_GREET:
      return { ...state, loading: true }
    case types.GREET:
      return { ...state, name: action.payload, loading: false }
    default:
      return state
  }
}
