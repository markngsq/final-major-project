import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import makeRoutes from './routes';
import Root from './containers/Root';
import configureStore from './stores/configureStore';

let state = {};
if (localStorage.getItem('appState')) {
  //state = JSON.parse(localStorage.getItem('appState'));
}
const store = configureStore(state);
const routes = makeRoutes(store);
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('root')
)
