import * as types from './types'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ACTION:
      return { ...state }
    default:
      return state
  }
}
