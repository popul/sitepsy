import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Root from './components/Layout/Root';
import Welcome from './components/Welcome';
import Page from './components/Layout/Page';
import Contact from './components/Contact';
import QuiSuisJe, {meta as metaQuiSuisJe} from './components/Pages/quisuisje.md';
import Consultations, {meta as metaConsultations} from './components/Pages/consultations.md';
import Approches, {meta as metaApproches} from './components/Pages/approches.md';
import Articles from './components/Pages/Articles';
import Illusion, {meta as metaIllusion} from './components/Articles/illusion-incompetence.md';
import JeuxJouets, {meta as metaJeuxJouets} from './components/Articles/jeux-jouets-bebe.md';
import Helmet from 'react-helmet';

const Wrapper = (Content, meta) => props => {
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
		<Route path="quisuisje" component={Wrapper(QuiSuisJe, metaQuiSuisJe)} />
		<Route path="consultations" component={Wrapper(Consultations, metaConsultations)} />
		<Route path="approches" component={Wrapper(Approches, metaApproches)} />
  		<Route path="articles">
			<Route path="illusion-incompetence" component={Wrapper(Illusion, metaIllusion)} />
			<Route path="jeux-jouets-bebe" component={Wrapper(JeuxJouets, metaJeuxJouets)} />
			<IndexRoute component={Articles} />
  		</Route>
  	</Route>
  </Route>
);