import React from 'react';
import { Link } from 'react-router';
import { AppBar, Navigation, IconButton } from 'react-toolbox';
import s from './styles.css';
import theme from './theme.scss';

export default props => (
	<AppBar theme={theme}>
		<IconButton 
			icon='menu' 
			onClick={ props.toggleDrawerActive } />
		<div className={s.logo}>
			<Link to="/">
				<span className="secondary-color">Audrey BARTHELEMY</span>
			</Link>				
		</div>
		 <Navigation type='horizontal' theme={theme}>
		 	<div className={s.contact}>
			 	<Link to="/contact">Contact</Link>
		 	</div>
		 </Navigation>
	</AppBar>
);

/*

<Link to="Partenaires">Partenaires</Link>

<div className={s.menu}>

	<div className={s.contact}>
		<Link to="/contact">Contact</Link>
	</div>
</div>
 */

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