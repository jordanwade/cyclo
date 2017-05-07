import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import resources from './resources';
import users from './users';

const rootReducer = combineReducers({resources, users, routing: routerReducer });

export default rootReducer;
