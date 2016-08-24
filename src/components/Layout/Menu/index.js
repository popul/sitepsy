import React from 'react';
import { Link } from 'react-router';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import { IconButton } from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';
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
			<Link to="/">Accueil</Link>
			<Link to="/quisuisje">Qui suis-je ?</Link>
			<Link to="/consultations">Consultations</Link>
			<Link to="/approches">Approches</Link>
			<Link to="/articles">Articles</Link>
			<div className={s.contact}>
				<FontIcon value="phone" />
				<Link to="/contact">Contact</Link>
			</div>
		</Navigation>
	</AppBar>
);

/*



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