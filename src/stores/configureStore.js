import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import saveState from '../middleware/saveState';

export default function configureStore(data) {
  const store = createStore(rootReducer, data, compose(
    applyMiddleware(saveState),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
}
