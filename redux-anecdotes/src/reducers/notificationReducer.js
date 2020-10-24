const initialState = 'render here notification...'

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    case 'GET_MESSAGE':
      return state
    default: return state
  }
}

export const notificationChange = notification => {
  return {
    type: 'SET_NOTIFICATION',
    data: notification
  }
}

export default notificationReducer
