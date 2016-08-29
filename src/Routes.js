import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Root from './components/Layout/Root';
import Welcome from './components/Welcome';
import Page from './components/Layout/Page';
import Contact from './components/Contact';
import QuiSuisJe, {meta as metaQuiSuisJe} from './components/Pages/quisuisje.md';
import Consultations, {meta as metaConsultations} from './components/Pages/consultations.md';
import Articles from './components/Pages/Articles';
import Illusion, {meta as metaIllusion} from './components/Pages/Articles/illusion-incompetence.md';
import JeuxJouets, {meta as metaJeuxJouets} from './components/Pages/Articles/jeux-jouets-bebe.md';
import ClochesPaques, {meta as metaClochesPaques} from './components/Pages/Articles/cloches-paques.md';
import BebeNon, {meta as metaBebeNon} from './components/Pages/Articles/bebe-me-dit-toujours-non.md';
import MotriciteBebe, {meta as metaMotriciteBebe} from './components/Pages/Articles/favoriser-developpement-psychomoteur-bebe.md';
import MeditationPrenatale, {meta as metaMeditationPrenatale} from './components/Pages/Articles/meditation-prenatale-influence-bien-etre-bebe.md';
import BebeEmotionMaternelle, {meta as metaBebeEmotionMaternelle} from './components/Pages/Articles/bebe-in-utero-emotion-maternelle.md';
import Referencement, {meta as metaReferencement} from './components/Pages/referencement.md';
import Helmet from 'react-helmet';

const Wrapper = (Content, meta) => props => {
	return <div>
		<Helmet title={meta.model.title} />
		<Content />
	</div>
}

const scrollTop = () => {
	if (typeof document !== 'undefined') {
		const panel = document.querySelector('[data-react-toolbox=panel]');
		panel.scrollTop = 0;
	}
}

export default (
  <Route path="/" component={Root} onChange={scrollTop}>
  	<IndexRoute component={Welcome} />
	<Route path="articles" component={Articles} />
  	<Route component={Page}>
		<Route path="contact" component={Contact} />
		<Route path="quisuisje" component={Wrapper(QuiSuisJe, metaQuiSuisJe)} />
		<Route path="consultations" component={Wrapper(Consultations, metaConsultations)} />
		<Route path="referencement" component={Wrapper(Referencement, metaReferencement)} />
  		<Route path="articles">
			<Route path="illusion-incompetence" component={Wrapper(Illusion, metaIllusion)} />
			<Route path="jeux-jouets-bebe" component={Wrapper(JeuxJouets, metaJeuxJouets)} />
			<Route path="cloches-paques" component={Wrapper(ClochesPaques, metaClochesPaques)} />
			<Route path="bebe-me-dit-toujours-non" component={Wrapper(BebeNon, metaBebeNon)} />
			<Route path="favoriser-developpement-psychomoteur-bebe" component={Wrapper(MotriciteBebe, metaMotriciteBebe)} />
			<Route path="meditation-prenatale-influence-bien-etre-bebe" component={Wrapper(MeditationPrenatale, metaMeditationPrenatale)} />
			<Route path="bebe-in-utero-emotion-maternelle" component={Wrapper(BebeEmotionMaternelle, metaBebeEmotionMaternelle)} />
  		</Route>
  	</Route>
  </Route>
);