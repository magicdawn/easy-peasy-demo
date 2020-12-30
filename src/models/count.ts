import {Action, action, State, ThunkOn, thunkOn} from 'easy-peasy'
import type {StoreModel} from '../store'

interface CountState {
  num: number
}

interface CountModel extends CountState {
  setState: Action<CountModel, Partial<CountState>>
  increase: Action<CountModel, number | void>
  reset: Action<CountModel>
  onReset: ThunkOn<CountModel, any, StoreModel>
}

const count: CountModel = {
  num: 0,

  setState: action((state, payload) => {
    Object.assign(state, payload)
  }),

  increase: action((state, payload = 1) => {
    const num = (payload || 1) as number
    state.num += num
  }),

  reset: action((state) => {
    state.num = 0
  }),

  onReset: thunkOn(
    (actions, storeActions) => storeActions.global.reset,
    async (actions, payload, {injections, getState, getStoreState}) => {
      const num = getState().num
      const s = getStoreState().count.num

      // actions.setState({num: 10})
      actions.reset()
    }
  ),
}

export default count
