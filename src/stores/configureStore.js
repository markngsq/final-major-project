import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers';

export default function configureStore(data) {
  const reduxRouterMiddleware = syncHistory(browserHistory)
  const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);
  const store = createStoreWithMiddleware(rootReducer, data);

  return store;
}
