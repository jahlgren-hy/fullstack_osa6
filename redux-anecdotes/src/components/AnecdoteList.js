import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteFor(id))
    const anecdote = anecdotes.find(n => n.id === id)
    dispatch(
      setMessage(`you voted '${anecdote.content}'`))
    setTimeout(() => {
      dispatch(
        setMessage(''))
    }, 5000)
  }

  return (
    <ul>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map(b =>
          <div key={b.id}>
            <div>
              {b.content}
            </div>
            <div>
              has {b.votes}
              <button onClick={() => vote(b.id)}>vote</button>
            </div>
          </div>
        )}
    </ul>
  )
}

export default AnecdoteList
