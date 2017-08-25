import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import resources from './resources';
import users from './users';
import general from './general';

const rootReducer = combineReducers({
	resources,
	users,
	general,
	routing: routerReducer
});

export default rootReducer;
