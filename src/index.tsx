import './assets/css/style.css'
import React from 'react'
import {render} from 'react-dom'
import {action, createStore, StoreProvider} from 'easy-peasy'
import store, {useStoreState, useStoreActions} from 'store'

function App() {
  return (
    <StoreProvider store={store}>
      <div>App</div>
      <Count></Count>
    </StoreProvider>
  )
}

function Count() {
  const num = useStoreState(state => {
    return state.count.num
  })
  const increase = useStoreActions(actions => actions.count.increase)

  return (
    <>
      <h1>Count</h1>
      <p>current count: {num}</p>
      <button
        onClick={() => {
          increase()
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          increase(-1)
        }}
      >
        -
      </button>
      <hr />
    </>
  )
}

render(<App></App>, document.getElementById('app'))
