// Redux
import { createStore, applyMiddleware } from "redux";
// Redux Saga
import createSagaMiddleware from 'redux-saga';
// My imports
import reducer from './ducks/main';
import rootSaga from './sagas/main';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)    
);

sagaMiddleware.run(rootSaga);

export default store;