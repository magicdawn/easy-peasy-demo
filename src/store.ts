import {createStore, createTypedHooks} from 'easy-peasy'
import * as models from './models'
import {cloneDeep} from 'lodash'

const store = createStore(cloneDeep(models))
export default store

export type StoreModel = typeof models
const {useStoreActions, useStoreState, useStoreDispatch, useStore} = createTypedHooks<StoreModel>()
export {useStoreActions, useStoreState, useStoreDispatch, useStore, store}
