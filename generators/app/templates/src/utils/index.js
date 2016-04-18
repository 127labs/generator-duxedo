export const stopPropagation = (event) =>
  event.stopPropagation()

export const getClassNames = (classNames) =>
  Object.keys(classNames)
    .filter(key => classNames[key])
    .join(' ')

export const delay = (millis) =>
  new Promise(resolve => setTimeout(() => resolve(true), millis))

export { default as HTTP } from './http'
