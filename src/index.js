import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import makeRoutes from './routes';
import Root from './containers/Root';
import configureStore from './stores/configureStore';

const store = configureStore();
const routes = makeRoutes(store);

console.log(store.getState())

render(
  <Root history={browserHistory} routes={routes} store={store} />,
  document.getElementById('root')
)
