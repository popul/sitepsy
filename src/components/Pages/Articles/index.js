import React from 'react';
import Helmet from "react-helmet";

import Card from '../../Card';

import s from './styles.css';

require('../../../../assets/images/illusion.jpg');

export default props => (
	<div>
		<Helmet title="Articles" />
		<h1>Articles</h1>
		<div className={s.container}>
			<Card
				title="Illusion d'incompétence à l'école"
				link="/articles/illusion-incompetence"
				image="/assets/images/illusion.jpg"
				summary="Un enfant convaincu de son incapacité à résoudre un problème ou à exécuter une action quelconque peut choisir l’abandon ou l’évitement. Il se prive alors d’occasions d’apprentissage et limite son propre développement" />
		</div>

	</div>
);