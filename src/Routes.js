import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import Helmet from 'react-helmet';

import Root from './components/Layout/Root';
import Welcome from './components/Welcome';
import Page from './components/Layout/Page';
import Contact from './components/Contact';
import Cabinet from './components/Cabinet';

import QuiSuisJe from './components/Pages/QuiSuisJe';
import Spécialiste, {meta as metaSpécialiste} from './components/Pages/QuiSuisJe/spécialiste.md';
import Diplomes, {meta as metaDiplomes} from './components/Pages/QuiSuisJe/diplomes.md';
import ExpClinique, {meta as metaExpClinique} from './components/Pages/QuiSuisJe/experience-clinique.md';
import ExpEnseignement, {meta as metaExpEnseignement} from './components/Pages/QuiSuisJe/experience-enseignement.md';
import ExpRecherche, {meta as metaExpRecherche} from './components/Pages/QuiSuisJe/experience-recherche.md';
import Partenaires, {meta as metaPartenaires} from './components/Pages/QuiSuisJe/partenaires.md';

import Consultations from './components/Pages/Consultations';

import Enfant, {meta as metaEnfant} from './components/Pages/enfant.md';
import Adolescent, {meta as metaAdolescent} from './components/Pages/adolescent.md';
import FemmeEnceinte, {meta as metaFemmeEnceinte} from './components/Pages/femme-enceinte.md';
import Parent, {meta as metaParent} from './components/Pages/parent.md';
import Autisme, {meta as metaAutisme} from './components/Pages/autisme.md';
import Bilan, {meta as metaBilan} from './components/Pages/bilan.md';

import Articles from './components/Pages/Articles';

import Illusion, {meta as metaIllusion} from './components/Pages/Articles/illusion-incompetence.md';
import JeuxJouets, {meta as metaJeuxJouets} from './components/Pages/Articles/jeux-jouets-bebe.md';
import ClochesPaques, {meta as metaClochesPaques} from './components/Pages/Articles/cloches-paques.md';
import BebeNon, {meta as metaBebeNon} from './components/Pages/Articles/bebe-me-dit-toujours-non.md';
import MotriciteBebe, {meta as metaMotriciteBebe} from './components/Pages/Articles/favoriser-developpement-psychomoteur-bebe.md';
import MeditationPrenatale, {meta as metaMeditationPrenatale} from './components/Pages/Articles/meditation-prenatale-influence-bien-etre-bebe.md';
import BebeEmotionMaternelle, {meta as metaBebeEmotionMaternelle} from './components/Pages/Articles/bebe-in-utero-emotion-maternelle.md';
import Referencement, {meta as metaReferencement} from './components/Pages/referencement.md';

import { getMetaTags } from './util/seo';

const Wrapper = (Content, meta) => props => {
	return <div>
		<Helmet 
			title={meta.data.title}
		    meta={[
		    	...getMetaTags(meta.data.title, meta.data.description)
  			]} />
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
	<Route path="consultations" component={Consultations} />
	<Route path="cabinet" component={Cabinet} />
  	<Route component={Page}>
		<Route path="contact" component={Contact} />
		<Route path="quisuisje" component={QuiSuisJe} />
		<Route path="specialiste" component={Wrapper(Spécialiste, metaSpécialiste)} />
		<Route path="diplomes" component={Wrapper(Diplomes, metaDiplomes)} />
		<Route path="experience-clinique" component={Wrapper(ExpClinique, metaExpClinique)} />
		<Route path="experience-enseignement" component={Wrapper(ExpEnseignement, metaExpEnseignement)} />
		<Route path="experience-recherche" component={Wrapper(ExpRecherche, metaExpRecherche)} />
		<Route path="partenaires" component={Wrapper(Partenaires, metaPartenaires)} />		
		<Route path="enfant" component={Wrapper(Enfant, metaEnfant)} />
		<Route path="adolescent" component={Wrapper(Adolescent, metaAdolescent)} />
		<Route path="femme-enceinte" component={Wrapper(FemmeEnceinte, metaFemmeEnceinte)} />
		<Route path="parent" component={Wrapper(Parent, metaParent)} />
		<Route path="autisme" component={Wrapper(Autisme, metaAutisme)} />
		<Route path="bilan" component={Wrapper(Bilan, metaBilan)} />
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
  	<Redirect from="*" to="/" />
  </Route>
);