import {
  getAllAnecdotes,
  postNewAnecdote,
  updateAnecdote,
} from '../services/anecdotes'

const initialState = []

const sortAnecdotes = arr => {
  return arr.sort((a, b) => b.votes - a.votes)
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAllAnecdotes()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: { anecdotes },
    })
  }
}

export const voteAnecdote = (id, votes) => {
  return async dispatch => {
    const votedAnecdote = await updateAnecdote(id, votes)
    dispatch({
      type: 'VOTE_ANECDOTE',
      data: { votedAnecdote },
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await postNewAnecdote(content)
    dispatch({
      type: 'CREATE_ANECDOTE',
      data: { newAnecdote },
    })
  }
}

const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return sortAnecdotes(action.data.anecdotes)
    case 'VOTE_ANECDOTE':
      const id = action.data.votedAnecdote.id
      const changedState = state.map(anecdote =>
        anecdote.id !== id ? anecdote : action.data.votedAnecdote
      )
      return sortAnecdotes(changedState)
    case 'CREATE_ANECDOTE':
      return sortAnecdotes([...state, action.data.newAnecdote])
    default:
      return state
  }
}

export default anecdoteReducer
