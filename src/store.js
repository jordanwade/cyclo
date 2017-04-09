// *************************************
//
//   Store
//   1. All Reducers which we combined into `rootReducer`
//   2. An optional starting state - similar to React's getInitialState
//
// *************************************

// ----- Imports ----- //

import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';

// root reducer
import rootReducer from './reducers/index';
import rootSaga from './sagas/index'

// Data
import resources from './data/resources';
import user from './data/user';

// ----- Default Data ----- //

const defaultState = {
  resources,
  user
}

// ----- Redux Devtools ----- //

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware

const sagaMiddleware = createSagaMiddleware();

// ----- Store----- //

const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(sagaMiddleware)));

// ----- History----- //

export const history = syncHistoryWithStore(browserHistory, store);

// ----- Hot Reload Reducers----- //

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

// ----- Run Saga ----- //

sagaMiddleware.run(rootSaga);

// ----- Export ----- //

export default store;
