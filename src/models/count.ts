import {Action, action, ThunkOn, thunkOn} from 'easy-peasy'
import type {StoreModel} from '../store'

interface CountModel {
  num: number
  increase: Action<CountModel, number | void>
  reset: Action<CountModel>
  onReset: ThunkOn<CountModel, any, StoreModel>
}

const count: CountModel = {
  num: 0,

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
      actions.reset()
    }
  ),
}

export default count
