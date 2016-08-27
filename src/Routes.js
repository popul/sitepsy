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
import ClochesPaques, {meta as metaClochesPaques} from './components/Articles/cloches-paques.md';
import BebeNon, {meta as metaBebeNon} from './components/Articles/bebe-me-dit-toujours-non.md';
import MotriciteBebe, {meta as metaMotriciteBebe} from './components/Articles/favoriser-developpement-psychomoteur-bebe.md';
import MeditationPrenatale, {meta as metaMeditationPrenatale} from './components/Articles/meditation-prenatale-influence-bien-etre-bebe.md';
import Referencement, {meta as metaReferencement} from './components/Pages/referencement.md';
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
		<Route path="referencement" component={Wrapper(Referencement, metaReferencement)} />
  		<Route path="articles">
			<Route path="illusion-incompetence" component={Wrapper(Illusion, metaIllusion)} />
			<Route path="jeux-jouets-bebe" component={Wrapper(JeuxJouets, metaJeuxJouets)} />
			<Route path="cloches-paques" component={Wrapper(ClochesPaques, metaClochesPaques)} />
			<Route path="bebe-me-dit-toujours-non" component={Wrapper(BebeNon, metaBebeNon)} />
			<Route path="favoriser-developpement-psychomoteur-bebe" component={Wrapper(MotriciteBebe, metaMotriciteBebe)} />
			<Route path="meditation-prenatale-influence-bien-etre-bebe" component={Wrapper(MeditationPrenatale, metaMeditationPrenatale)} />
			<IndexRoute component={Articles} />
  		</Route>
  	</Route>
  </Route>
);