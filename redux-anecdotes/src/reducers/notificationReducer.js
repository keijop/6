const initialState = []

export const createNotification = content => {
  return { type: 'ADD', content }
}

export const removeNotification = () => {
  return { type: 'REMOVE' }
}

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return [action.content]
    case 'REMOVE':
      return []
    default:
      return initialState
  }
}
