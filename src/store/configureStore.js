import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../reducers';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStore = () => createStore(
	rootReducer,
	applyMiddleware(epicMiddleware),
);

export default configureStore;
