import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const submitHandler = e => {
    e.preventDefault()
    const content = e.target.text.value
    dispatch(createAnecdote(content))
    dispatch(setNotification(`CREATED: ${content}`, 5000))
    return
  }

  return (
    <form onSubmit={submitHandler}>
      <h2>create new anecdote</h2>
      <input type='text' name='text' />
      <button type='submit'>submit</button>
    </form>
  )
}

export default AnecdoteForm
