import Setting from '../settings'

export default (method, endpoint, params) => {
  let body
  const query = new URL(`${Setting.http.url}/${endpoint}`)
  const handleError = error => ({
    errors: [{ title: 'We are under heavy load right now, please try again in a few minutes',
      detail: 'We are under heavy load right now, please try again in a few minutes',
      source: { pointer: error } }],
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
