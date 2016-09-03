import React from 'react';
import Helmet from 'react-helmet';

import Card from '../../Card';

import s from './styles.css';

import '../../../../assets/images/enfant.jpg';
import '../../../../assets/images/adolescent.jpg';
import '../../../../assets/images/parent.jpg';
import '../../../../assets/images/femme-enceinte.jpg';
import '../../../../assets/images/autisme.jpg';
import '../../../../assets/images/bilan.jpg';

import { getMetaTags } from '../../../util/seo';

const 
	title = "Consultations",
	description = "Les différentes populations que j'adresse et les troubles que je traite";

export default props => {
	return (
		<div className={s.content}>
			<Helmet 
				title={title}
			    meta={getMetaTags(title, description)} />			
			<h1>{title}</h1>
			<div className={s.container}>
				<Card
					title="Enfants"
					link="/enfant/"
					cardLink={true}
					image="/assets/images/enfant.jpg" />
				<Card
					title="Adolescents"
					link="/adolescent/"
					cardLink={true}
					image="/assets/images/adolescent.jpg" />
				<Card
					title="Femmes enceintes"
					link="/femme-enceinte/"
					cardLink={true}
					image="/assets/images/femme-enceinte.jpg" />
				<Card
					title="Parents"
					link="/parent/"
					cardLink={true}
					image="/assets/images/parent.jpg" />
				<Card
					title="Troubles envahissants du développement"
					link="/autisme/"
					cardLink={true}
					image="/assets/images/autisme.jpg" />
				<Card
					title="Bilans psychologiques"
					link="/bilan/"
					cardLink={true}
					image="/assets/images/bilan.jpg" />					
			</div>
		</div>
	);
}
