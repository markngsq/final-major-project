import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../containers/App';

export default (store) => (
  <Route path="/" component={App}>
    <Route path="*" pageTitle="Page Not Found"/>
  </Route>
)
/*
  <IndexRoute component={Services}/>
  <Route path="/services">
    <IndexRoute component={Services}/>
    <Route path=":service_key" component={Details}/>
  </Route>
*/
