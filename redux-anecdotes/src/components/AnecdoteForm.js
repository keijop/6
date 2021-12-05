import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = props => {
  const submitHandler = e => {
    e.preventDefault()
    const content = e.target.text.value
    props.createAnecdote(content)
    props.setNotification(`CREATED: ${content}`, 5000)
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

const mapDispatchToProps = { createAnecdote, setNotification }

const connectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default connectedAnecdoteForm
