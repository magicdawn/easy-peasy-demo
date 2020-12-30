import {Action, Model} from 'easy-peasy-decorators'

@Model('global')
export default class GlobalModel {
  @Action()
  reset() {}

  @Action()
  resetTo(payload: number) {}
}
