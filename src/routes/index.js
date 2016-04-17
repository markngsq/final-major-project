import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../containers/App';
import Main from '../containers/Main';

export default (store) => (
  <Route path="/" component={App}>
    <IndexRoute component={Main}/>
    <Route path="*" pageTitle="Page Not Found"/>
  </Route>
);
