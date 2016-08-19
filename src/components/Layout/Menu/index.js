import React from 'react';
import { Link } from 'react-router';
import s from './styles.css';

export default props => (
	<div className={s.menu}>
		<div className={s.logo}>
			<Link to="/">
				<h1>
					<span className="secondary-color">Audrey BARTHELEMY</span>
				</h1>
			</Link>				
		</div>
		<div className={s.contact}>
			<Link to="/contact">Contact</Link>
		</div>
	</div>
);

/*
<div className="navigation">
	<Link to="/">Accueil</Link>
	<Link to="/quisuisje">Qui suis-je ?</Link>
	<a href="">Consultations</a>
	<a href="">Bilans</a>
	<a href="">Tarifs</a>
	<a href="">Partenaires</a>
</div>
 */