import React from 'react';
import Helmet from "react-helmet";

import Card from '../../Card';

import s from './styles.css';

import '../../../../assets/images/illusion.jpg';
import '../../../../assets/images/jeux-jouets-bebe.jpg';
import '../../../../assets/images/cloches-paques.jpg';
import '../../../../assets/images/bebe-non.jpg';
import '../../../../assets/images/motricite-bebe.jpg';
import '../../../../assets/images/meditation-prenatale.jpg';
import '../../../../assets/images/bebe-in-utero-emotion-maternelle.jpg';

import { getMetaTags } from '../../../util/seo';

const 
	title = "Articles",
	description = "Actualité sur l'éducation et le développement de l'enfant, sur la grossesse et la parentalité";

export default props => (
	<div className={s.content}>
		<Helmet 
			title={title}
		    meta={getMetaTags(title, description)} />			
		<h1>{title}</h1>
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
			<Card
				title="Pourquoi mon bébé me dit toujours non ?"
				link="/articles/bebe-me-dit-toujours-non/"
				image="/assets/images/bebe-non.jpg"
				summary="Peut-être parce que je lui dis toujours non ?!? A quatre pattes ou droit dans ses baskets, bébé se déplace partout en un temps record. A peine le dos tourné, il part explorer le bac à douche encore humide, vider la poubelle, tester la texture de la terre de la plante verte ou la solidité de la télécommande, explorer la propreté de la litière du chat !" />
			<Card
				title="Comment favoriser le développement psychomoteur de mon bébé ?"
				link="/articles/favoriser-developpement-psychomoteur-bebe/"
				image="/assets/images/motricite-bebe.jpg"
				summary="Parce qu’apprendre à marcher est une grande étape dans la vie de bébé, vous êtes attentif à ce que tout se passe bien du point de vue de son développement psychomoteur. Vous vous demandez peut-être quelles sont les étapes par lesquelles il doit passer avant d’arriver à se déplacer debout et quelles sont les bonnes pratiques que l’on doit adopter pour favoriser le bon développement de bébé." />
			<Card
				title="La méditation prénatale influence le bien-être et le tempérament des bébés"
				link="/articles/meditation-prenatale-influence-bien-etre-bebe/"
				image="/assets/images/meditation-prenatale.jpg"
				summary="Ka Po Chan de l’Institut Bouddhiste d’Hong Kong étudie le rôle de la méditation maternelle sur la santé du bébé avant et après sa naissance. Selon lui, la méditation a des effets positifs sur la santé de la mère et améliore la santé du bébé in et hors utéro." />
			<Card
				title="Les bébés in utéro ressentent les émotions maternelles"
				link="/articles/bebe-in-utero-emotion-maternelle/"
				image="/assets/images/bebe-in-utero-emotion-maternelle.jpg"
				summary="Certains psychologues et psychiatres affirment que l’enfant, avant sa naissance, peut ressentir certaines émotions et possèderait déjà des sentiments, conscience et souvenirs. Tout ce qui peut arriver à ses parents et à lui-même pendant les 9 mois de la grossesse jouerait un rôle très important dans la formation et la structuration de la personnalité." />
		</div>
	</div>
);
