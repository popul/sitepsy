import React from 'react';
import Helmet from "react-helmet";
import { Link } from 'react-router';

import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

import Intro from './intro.md';
import s from './styles.css';

import { getMetaTags } from '../../../util/seo';

const 
	title = "Psychologue du développement",
	description = "Psychologue clinicienne et du développement, enseignante à l'université. Psychologue pour enfant, pour adolescent et psychologue de la parentalité.";

export default props => {
	return (
		<div className={s.content}>
			<Helmet 
				title={title}
			    meta={getMetaTags(title, description)} />			
			<Intro />
			<List ripple>
				<ListItem leftIcon='send'>
					<Link to="/psychologue" className={s.link}>
						<div className="hidden-lg-up">
							Mon approche
						</div>
						<div className="hidden-md-down">
							Psychologue de l'enfant, de l'adolescent et de la parentalité
						</div>
					</Link>
				</ListItem>			
				<ListItem leftIcon='send'>
					<Link to="/diplomes" className={s.link}>
						Mes diplômes
					</Link>
				</ListItem>
				<ListItem leftIcon='send'>
					<Link to="/experience-clinique" className={s.link}>
						<div className="hidden-lg-up">
							Exp. cliniques
						</div>
						<div className="hidden-md-down">
							Mes expériences cliniques en psychothérapie et en éducation
						</div>
					</Link>
				</ListItem>
				<ListItem leftIcon='send'>
					<Link to="/experience-enseignement" className={s.link}>
						<div className="hidden-lg-up">
							Exp. en enseignement
						</div>
						<div className="hidden-md-down">
							Mes principales expériences d'enseignement
						</div>
					</Link>
				</ListItem>
				<ListItem leftIcon='send'>
					<Link to="/experience-recherche" className={s.link}>
						<div className="hidden-lg-up">
							Exp. en recherche
						</div>
						<div className="hidden-md-down">
							Mes expériences en recherche
						</div>
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
