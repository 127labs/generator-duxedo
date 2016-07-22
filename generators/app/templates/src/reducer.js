import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { routerReducer as routing } from 'react-router-redux'
import app from 'app'

export default combineReducers({
  [app.constants.NAME]: app.reducer,
  routing,
  form
})
