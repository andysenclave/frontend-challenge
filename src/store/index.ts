import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeWithDevTools(
  applyMiddleware(sagaMiddleware)
);

const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

export default store;
