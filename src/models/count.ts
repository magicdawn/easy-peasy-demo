import {Action, action} from 'easy-peasy'

interface CountModel {
  num: number
  increase: Action<CountModel, number | void>
}

const count: CountModel = {
  num: 0,

  increase: action((state, payload = 1) => {
    const num = (payload || 1) as number
    state.num += num
  }),
}

export default count
