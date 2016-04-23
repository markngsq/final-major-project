import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import search from './search';
import components from './components';

const rootReducer = combineReducers({
  search,
  components,
  routing: routerReducer
});

export default rootReducer;
