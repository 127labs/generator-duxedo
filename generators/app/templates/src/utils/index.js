export const stopPropagation = (event) =>
  event.stopPropagation()

export const getClassNames = (classNames) =>
  Object.keys(classNames)
    .filter(key => classNames[key])
    .join(' ')
