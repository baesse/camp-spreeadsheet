/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import Reducers from './ducks';
import Sagas from './sagas/Sagas';
import { history } from '../utils/routes';

const reduxDevTools =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];
export default createStore(
  Reducers(history),
  reduxDevTools
    ? compose(applyMiddleware(...middlewares), reduxDevTools)
    : compose(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(Sagas);
