import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteFor(id))
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
