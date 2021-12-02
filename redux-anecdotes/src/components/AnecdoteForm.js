import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import {
  createNotification,
  removeNotification,
} from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const submitHandler = e => {
    e.preventDefault()
    console.log(`e`, e)
    dispatch(createAnecdote(e.target.text.value))
    dispatch(createNotification(`CREATED : ${e.target.text.value}`))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
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
