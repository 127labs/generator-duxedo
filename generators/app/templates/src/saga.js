/* eslint no-constant-condition: 0 */
import { fork } from 'redux-saga/effects'

import app from './modules/app'

export default function * () {
  yield [
    fork(app.saga),
  ]
}
