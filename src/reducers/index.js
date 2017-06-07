import { combineReducers } from 'redux';

import authenticated from './authentication_reducer';

const rootReducer = combineReducers({ authenticated });

export default rootReducer;
