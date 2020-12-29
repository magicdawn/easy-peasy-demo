import {Action, action} from 'easy-peasy'

interface CountModel {
  num: number
  increase: Action<CountModel, number | undefined | void>
}

const count: CountModel = {
  num: 0,

  increase: action((state, payload = 1) => {
    // state.num += payload
  }),
}

export default count
