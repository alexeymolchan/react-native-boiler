import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers.js';
import rootSaga from '../components/app/sagas.js';
import createSagaMiddleware from 'redux-saga'
import devToolsEnhancer, { composeWithDevTools } from 'remote-redux-devtools';


const sagaMiddleware = createSagaMiddleware();



const createStoreWithMiddleware = applyMiddleware(
  sagaMiddleware,
)(createStore);

export default function configureStore(initialState = {}) {
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    devToolsEnhancer({runtime: true}),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
