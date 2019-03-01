import { createStore,compose,applyMiddleware} from 'redux'

import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
import reducer from './reducer'


const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);
let store = createStore(reducer, enhancer);


sagaMiddleware.run(mySaga)

export default store;