import * as types from './types'

export const greet = (name) => ({
  type: types.GREET,
  payload: name,
})

export const submitGreet = (params) => ({
  type: types.SUBMIT_GREET,
  payload: params,
})
