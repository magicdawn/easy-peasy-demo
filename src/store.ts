import {createStore, createTypedHooks} from 'easy-peasy'
import * as models from './models'

const store = createStore(models)
export default store

type StoreModel = typeof models
const {useStoreActions, useStoreState, useStoreDispatch, useStore} = createTypedHooks<StoreModel>()
export {useStoreActions, useStoreState, useStoreDispatch, useStore, store}
