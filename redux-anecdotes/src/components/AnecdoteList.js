import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const filter = useSelector(state => state.filter)
  const anecdotes = useSelector(state => {
    return filter
      ? state.anecdotes.filter(anecdote => anecdote.content.startsWith(filter))
      : state.anecdotes
  })
  const dispatch = useDispatch()

  //click handler that calls dispatch and gives it action creator as an argument
  const vote = async (id, content, votes) => {
    dispatch(voteAnecdote(id, votes))
    dispatch(setNotification(`VOTED: ${content}`, 5000))
  }

  return (
    <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button
              onClick={() =>
                vote(anecdote.id, anecdote.content, anecdote.votes)
              }
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
