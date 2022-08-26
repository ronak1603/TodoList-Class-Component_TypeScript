import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import todo from './Reducers/index';


const logger = createLogger();
const store = createStore(todo, applyMiddleware(logger))
export default store;
