import React from 'react'
import pure from 'recompose/pure'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

const GreetForm = ({ fields, handleSubmit }) =>
  <form onSubmit={ handleSubmit }>
    <input type="text" { ...fields.name } placeholder="Name" />
    <button type="submit" >Greet</button>
  </form>

GreetForm.propTypes = {
  fields: React.PropTypes.object,
  handleSubmit: React.PropTypes.func,
}

const fields = ['name']

const config = { fields, form: 'greet' }

const mapStateToProps = null

const mapDispatchToProps = null

export default compose(
  reduxForm(config, mapStateToProps, mapDispatchToProps),
  pure
)(GreetForm)
