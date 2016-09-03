import React from 'react';
import Helmet from "react-helmet";
import { Link } from 'react-router';

import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

import Intro from './intro.md';
import s from './styles.css';

import { getMetaTags } from '../../../util/seo';

const 
	title = "Qui suis-je ?",
	description = "Psychologue clinicienne, enseignante à l'université. Mes diplômes universitaires, mes expériences cliniques, d'enseignement et de recherche.";

export default props => {
	return (
		<div className={s.content}>
			<Helmet 
				title={title}
			    meta={getMetaTags(title, description)} />			
			<Intro />
			<List ripple>
				<ListItem leftIcon='send'>
					<Link to="/specialiste" className={s.link}>
						Spécialiste de l'enfant, de l'adolescent et de la parentalité
					</Link>
				</ListItem>			
				<ListItem leftIcon='send'>
					<Link to="/diplomes" className={s.link}>
						Mes diplômes
					</Link>
				</ListItem>
				<ListItem leftIcon='send'>
					<Link to="/experience-clinique" className={s.link}>
						Mes expériences cliniques en psychothérapie et en éducation
					</Link>
				</ListItem>
				<ListItem leftIcon='send'>
					<Link to="/experience-enseignement" className={s.link}>
						Mes principales expériences d'enseignement
					</Link>
				</ListItem>
				<ListItem leftIcon='send'>
					<Link to="/experience-recherche" className={s.link}>
						Mes expériences en recherche
					</Link>
				</ListItem>
			</List>
		</div>
	);
}

/*
<ListItem leftIcon='send'>
	<Link to="/partenaires" className={s.link}>
		Mes partenaires
	</Link>
</ListItem>
 */
