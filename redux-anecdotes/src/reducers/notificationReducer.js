const initialState = null

export const createNotification = content => {
  return { type: 'ADD', content }
}

export const removeNotification = () => {
  return { type: 'REMOVE' }
}

let previousNotificationID

export const setNotification = (content, timeout) => {
  return dispatch => {
    dispatch(createNotification(content))
    if (previousNotificationID) {
      clearTimeout(previousNotificationID)
    }
    const latestNotificationID = setTimeout(() => {
      dispatch(removeNotification())
    }, timeout)
    previousNotificationID = latestNotificationID
  }
}

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return [action.content]
    case 'REMOVE':
      return null
    default:
      return state
  }
}
