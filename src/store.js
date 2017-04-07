// *************************************
//
//   Store
//   1. All Reducers which we combined into `rootReducer`
//   2. An optional starting state - similar to React's getInitialState
//
// *************************************

// ----- Imports ----- //

import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// root reducer
import rootReducer from './reducers/index';

// Data
import resources from './data/resources';
import user from './data/user';

// ----- Default Data ----- //

const defaultState = {
  resources,
  user
}

// ----- Redux Devtools ----- //

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// ----- Store----- //

const store = createStore(rootReducer, defaultState, reduxDevtools);

// ----- History----- //

export const history = syncHistoryWithStore(browserHistory, store);

// ----- Hot Reload Reducers----- //

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

// ----- Export ----- //

export default store;
