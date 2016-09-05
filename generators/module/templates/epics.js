import * as types from './types'

export const epic = (action$, store) =>
  // Learn more about epic and observables at
  // https://redux-observable.js.org/
  action$.ofType(types.ACTION)
