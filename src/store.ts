import {createStore, createTypedHooks} from 'easy-peasy'
import * as models from './models'
import {cloneDeep} from 'lodash'

const store = createStore(cloneDeep(models))
export default store

// Wrapping dev only code like this normally gets stripped out by bundlers
// such as Webpack when creating a production build.
if (process.env.NODE_ENV === 'development') {
  if ((module as any).hot) {
    ;(module as any).hot.accept('./models', () => {
      store.reconfigure(cloneDeep(models)) // 👈 Here is the magic
    })
  }
}

export type StoreModel = typeof models
const {useStoreActions, useStoreState, useStoreDispatch, useStore} = createTypedHooks<StoreModel>()
export {useStoreActions, useStoreState, useStoreDispatch, useStore, store}
