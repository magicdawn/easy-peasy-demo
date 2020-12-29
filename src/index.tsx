import './assets/css/style.css'
import React from 'react'
import {render} from 'react-dom'
import {action, createStore, StoreProvider} from 'easy-peasy'
import store, {useStoreState, useStoreActions} from '@store'

function App() {
  return (
    <StoreProvider store={store}>
      <div>App</div>
      <Count></Count>
    </StoreProvider>
  )
}

function Count() {
  const num = useStoreState((state) => {
    return state.count.num
  })
  const {increase, reset} = useStoreActions((actions) => {
    return {
      increase: actions.count.increase,
      reset: actions.global.reset,
    }
  })

  return (
    <>
      <h1>Count 123</h1>
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
      <button
        onClick={() => {
          reset()
        }}
      >
        reset
      </button>
      <hr />
    </>
  )
}

render(<App></App>, document.getElementById('app'))
