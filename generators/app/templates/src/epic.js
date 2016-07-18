import { combineEpics } from 'redux-observable'
import app from 'app'

export default combineEpics(
  ...Object.values(app.epics)
)
