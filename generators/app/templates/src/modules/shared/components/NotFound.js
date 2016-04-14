import React from 'react'
import pure from 'recompose/pure'

const NotFound = () =>
  <div className="notfound">
    <h1>404!</h1>
    <p>Looks like you've found our secret page that no one cares about!</p>
  </div>

export default pure(NotFound)
