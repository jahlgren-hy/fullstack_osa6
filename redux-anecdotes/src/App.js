import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import { voteFor } from './reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteFor(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
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
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App
