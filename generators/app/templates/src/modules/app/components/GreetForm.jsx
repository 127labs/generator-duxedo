import React, { PropTypes } from 'react'
import pure from 'recompose/pure'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

import * as select from '../selectors'

const propTypes = {
  fields: PropTypes.object,
  handleSubmit: PropTypes.func,
  loading: PropTypes.boolean,
}

const formConfig = {
  form: 'greet',
  fields: ['name'],
}

const GreetForm = ({ fields, handleSubmit, loading }) =>
  <form onSubmit={ handleSubmit }>
    <input type="text" { ...fields.name } placeholder="Name" />
    <button type="submit">{ loading ? 'Loading...' : 'Greet' }</button>
  </form>

GreetForm.propTypes = propTypes

const mapStateToProps = (state) => ({
  loading: select.loading(state),
})

export default compose(
  reduxForm(formConfig, mapStateToProps),
  pure
)(GreetForm)
