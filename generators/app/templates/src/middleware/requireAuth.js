export default (nextState, replace) => {
  const authenticated = true

  if (authenticated) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
