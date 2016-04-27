import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from '../containers/App';
import Main from '../containers/Main';

export default () => (
  <Route path="/" component={App}>
    <IndexRedirect to="FMP" />
    <Route path="FMP">
      <IndexRoute component={Main}/>
    </Route>
    <Route path="*" pageTitle="Page Not Found"/>
  </Route>
);
