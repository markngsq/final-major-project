import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import makeRoutes from './routes';
import Root from './containers/Root';
import configureStore from './stores/configureStore';

let state = {};
if (localStorage.getItem('appState')) {
  //state = JSON.parse(localStorage.getItem('appState'));
}
const store = configureStore(state);
const routes = makeRoutes();

render(
  <Root history={browserHistory} routes={routes} store={store} />,
  document.getElementById('root')
)
