import merge from 'lodash/merge'

class _ {
  merge = merge
  // add more lodash functions to this class to
  // make it globally available
}

// I'm exporting _ to be global
// I don't want to reimport them everytime
window._ = new _()

export default window._
