import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Root from './components/Layout/Root';
import Welcome from './components/Welcome';
import Page from './components/Layout/Page';
import Contact from './components/Contact';
import Illusion, {meta as metaIllusion} from './components/Articles/illusion-incompetence.md';
import Helmet from 'react-helmet';

const WrapperArticle = (Content, meta) => props => {
	return <div>
		<Helmet title={meta.model.title} />
		<Content />
	</div>
}

export default (
  <Route path="/" component={Root}>
  	<IndexRoute component={Welcome} />
  	<Route component={Page}>
  		<Route path="contact" component={Contact} />
  		<Route path="articles">
			<Route path="illusion-incompetence" component={WrapperArticle(Illusion, metaIllusion)} />
  		</Route>
  	</Route>
  </Route>
);