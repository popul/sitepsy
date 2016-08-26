import React from 'react';
import Helmet from "react-helmet";

import Card from '../../Card';

import s from './styles.css';

require('../../../../assets/images/illusion.jpg');
require('../../../../assets/images/jeux-jouets-bebe.jpg');
require('../../../../assets/images/cloches-paques.jpg');

export default props => (
	<div>
		<Helmet title="Articles" />
		<h1>Articles</h1>
		<div className={s.container}>
			<Card
				title="Illusion d'incompétence à l'école"
				link="/articles/illusion-incompetence/"
				image="/assets/images/illusion.jpg"
				summary="Un enfant convaincu de son incapacité à résoudre un problème ou à exécuter une action quelconque peut choisir l’abandon ou l’évitement. Il se prive alors d’occasions d’apprentissage et limite son propre développement" />
			<Card
				title="Les jeux et les jouets de mon bébé"
				link="/articles/jeux-jouets-bebe/"
				image="/assets/images/jeux-jouets-bebe.jpg"
				summary="Le premier mois, bébé dort beaucoup. Au cours du premier mois, cela peut varier de 16 à 20 heures environ sur 24. Les temps d’éveil sont brefs et vous avez envie d'aller à la rencontre de ce petit bout. Quels sont les jeux que l'on peut proposer à bébé, peut-il s'amuser avec des jouets ?" />
			<Card
				title="Jusqu'à quel âge mon enfant va-t-il croire aux cloches de pâques ?"
				link="/articles/cloches-paques/"
				image="/assets/images/cloches-paques.jpg"
				summary="Croire aux cloches, lapins ou poules de Pâques qui passent pendant la nuit cacher des œufs dans le jardin, c’est incroyable pour un adulte. C’est surnaturel ! Pourquoi les enfants y croient-ils ?" />
		</div>

	</div>
);
