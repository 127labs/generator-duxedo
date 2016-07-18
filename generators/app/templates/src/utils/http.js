import Setting from 'config/settings'

export default (method, endpoint, params) => {
  let body
  const query = new URL(`${Setting.http.url}/${endpoint}`)
  const handleError = error => ({
    errors: [{
      title: 'Something went wrong, let\'s try again?',
      detail: 'This could be due to our server being under heavy load',
      source: { pointer: error }
    }]
  })

  if (method.toUpperCase() === 'GET' && params) {
    Object.keys(params).forEach(key => query.searchParams.append(key, params[key]))
  } else {
    body = JSON.stringify(params)
  }

  return fetch(query, { method, body, ...Setting.http })
    .then(response => response.json())
    .catch(handleError)
}
