import merge from 'lodash/merge'
import production from './production'
import development from './development'
import staging from './staging'

const settings = {}

export default (() => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return merge(production, settings)
    case 'staging':
      return merge(staging, settings)
    case 'development':
    default:
      return merge(development, settings)
  }
})()
