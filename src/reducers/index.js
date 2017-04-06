import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import resources from './resources';
import user from './user';

const rootReducer = combineReducers({resources, user, routing: routerReducer });

export default rootReducer;
