import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
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
      {
        anecdotes
          .filter(anecdote =>
            anecdote.content.toLowerCase()
              .includes(filter.toLowerCase()))
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
          )
      }
    </ul >
  )
}

export default AnecdoteList
