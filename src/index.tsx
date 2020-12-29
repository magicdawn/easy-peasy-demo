import './assets/css/style.css'
import React, {useMemo} from 'react'
import {render} from 'react-dom'
import {StoreProvider} from 'easy-peasy'
import store, {useEasy} from '@store'

function App() {
  return (
    <StoreProvider store={store}>
      <div>App</div>
      <Count></Count>
    </StoreProvider>
  )
}

function Count() {
  const count = useEasy('count')
  const gbl = useEasy('global')

  return (
    <>
      <h1>Count 123</h1>
      <p>current count: {count.num}</p>
      <button
        onClick={() => {
          count.increase()
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          count.increase(-1)
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          gbl.reset()
        }}
      >
        reset
      </button>
      <hr />
    </>
  )
}

render(<App></App>, document.getElementById('app'))
