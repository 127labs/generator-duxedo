import * as types from './types'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ACTION:
      // your new state goes here!
      return { ...state }
    default:
      return state
  }
}
