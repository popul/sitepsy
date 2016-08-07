import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Root from './components/Layout/Root';
import Welcome from './components/Welcome';
import Page from './components/Layout/Page';
import Contact from './components/Contact';

export default (
  <Route path="/" component={Root}>
  	<IndexRoute component={Welcome} />
  	<Route component={Page}>
  		<Route path="contact" component={Contact} />
  	</Route>
  </Route>
);