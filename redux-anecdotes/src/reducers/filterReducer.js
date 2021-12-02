export const addFilter = characters => {
  return {
    type: 'FILTER',
    data: characters,
  }
}

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'FILTER':
      return action.data
    default:
      return state
  }
}
