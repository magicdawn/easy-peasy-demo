// import {Action, action, State, ThunkOn, thunkOn} from 'easy-peasy'
import type {StoreModel} from '../store'
import {
  Computed,
  createStore,
  Listener,
  Model,
  Property,
  Thunk,
  Action,
} from 'easy-peasy-decorators'

@Model('count')
export default class CountModel {
  @Property()
  num: number

  @Action()
  increase(payload: number = 1) {
    this.num += payload
  }

  @Action()
  setState(payload: Partial<CountModel>) {
    Object.assign(this, payload)
  }

  @Action()
  reset() {
    this.num = 0
  }

  // onReset 没有类型约束, 不能推倒 global/reset 的类型
  @Listener<any, StoreModel>((actions, storeActions) => storeActions.global.reset)
  onReset(x = 1) {}

  @Listener<any, StoreModel>((actions, storeActions) => storeActions.global.reset)
  onResetTo(to: number) {
    this.setState({num: to})
  }
}
