import { createStore, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
// import logger from 'redux-logger';
import rootReducer from './reducers'
// import { composeWithDevTools } from '@redux-devtools/extension'
const composeEnhancers =
  (import.meta.env.DEV &&
    (globalThis as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

function createStoreInternal() {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}
let store: ReturnType<typeof createStoreInternal>

if (import.meta.env.DEV) {
  if ((globalThis as any).__REDUX_STORE__) {
    store = (globalThis as any).__REDUX_STORE__
  } else {
    store = createStoreInternal()
    ;(globalThis as any).__REDUX_STORE__ = store
  }
} else {
  store = createStoreInternal()
}

export default store
