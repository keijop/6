import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { useSelector } from 'react-redux'

const App = () => {
  const notification = useSelector(state => state.notification)
  return (
    <div>
      <h2>Anecdotes</h2>
      {notification ? <Notification /> : ''}
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
