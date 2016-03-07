import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './app'

const rootReducer = combineReducers({
  app: app,
  routing: routerReducer
});

export default rootReducer;
