/* eslint no-constant-condition: 0 */
import { call, put, take, fork } from 'redux-saga/effects'

import { delay } from '../../utils'
import * as types from './types'
import * as actions from './actions'

export function* asyncGreet() {
  while (true) {
    const { payload } = yield take(types.SUBMIT_GREET)
    yield call(delay, 1000)
    yield put(actions.greet(payload.name))
  }
}

export default function * () {
  yield [
    fork(asyncGreet),
  ]
}
