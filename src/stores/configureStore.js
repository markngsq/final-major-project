import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import saveState from '../middleware/saveState';

export default function configureStore(data) {
  const middlewares = applyMiddleware(
    routerMiddleware(browserHistory),
    saveState,
  );
  const store = createStore(rootReducer, data, compose(
    middlewares,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
}
