import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAllAnecdotes = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const postNewAnecdote = async content => {
  const body = { content, votes: 0 }
  const response = await axios.post(baseUrl, body)
  return response.data
}

export const updateAnecdote = async (id, votes) => {
  const response = await axios.patch(`${baseUrl}/${id}`, { votes: votes + 1 })
  return response.data
}
