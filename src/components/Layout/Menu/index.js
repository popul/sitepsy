import React from 'react';
import { Link } from 'react-router';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import { IconButton } from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';
import s from './styles.css';
import theme from './theme.scss';


export default class Menu extends React.Component {
	trimEndingSlash(str) {
		return str.replace(/\/$/, '');
	}

	getLinkClass(link, currentPath) {
		currentPath = this.trimEndingSlash(currentPath);
		const className = (new RegExp(`^${link}\$`)).test(currentPath) ? theme.activeLink : '';
		return className;			
	}
	render() {
		return (
			<div className='contentMenu'>
				<AppBar theme={theme}>
					<IconButton 
						icon='menu' 
						onClick={ this.props.toggleDrawerActive } />
					<div className={s.logo}>
						<h1>
							<Link to="/">
								<span className="secondary-color">Audrey BARTHELEMY</span>
							</Link>											
						</h1>
					</div>
					<Navigation type='horizontal' theme={theme}>
						<Link to="/" className={this.getLinkClass("", this.props.path)}>Accueil</Link>
						<Link to="/quisuisje/" className={this.getLinkClass("/quisuisje", this.props.path)}>Qui suis-je ?</Link>
						<Link to="/consultations/" className={this.getLinkClass("/consultations", this.props.path)}>Consultations</Link>
						<Link to="/cabinet/" className={this.getLinkClass("/cabinet", this.props.path)}>Cabinet</Link>
						<Link to="/articles/" className={this.getLinkClass("/articles", this.props.path)}>Articles</Link>
						<Link to="/contact/" className={theme.contact}>
							<FontIcon value="phone" />
							Contact
						</Link>
					</Navigation>
				</AppBar>		
			</div>
		);
	}
}

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