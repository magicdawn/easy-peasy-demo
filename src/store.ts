import {createStore, createTypedHooks} from 'easy-peasy'
import {cloneDeep} from 'lodash'
import {useMemo} from 'react'
import shallowEqual from 'shallowequal'

import * as models from './models'
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

export const useEasy = <NSP extends keyof StoreModel>(nsp: NSP) => {
  const state = useStoreState((state) => state[nsp], shallowEqual)
  const actions = useStoreActions((actions) => actions[nsp])
  return useMemo(() => {
    return {
      ...state,
      ...actions,
    }
  }, [state, actions])
}
