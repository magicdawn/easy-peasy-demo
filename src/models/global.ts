import {Action, action, thunk} from 'easy-peasy'

interface GlobalModel {
  reset: Action<GlobalModel>
}

const globalModel: GlobalModel = {
  reset: action(() => {}),
}

export default globalModel
