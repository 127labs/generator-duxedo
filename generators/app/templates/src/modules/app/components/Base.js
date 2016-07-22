import React from 'react'
import { pure } from 'recompose'

const Base = ({ children }) =>
  <main>{children}</main>

export default pure(Base)
