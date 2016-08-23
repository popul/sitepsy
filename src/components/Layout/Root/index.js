import React from 'react';
import styles from 'styles/styles.css';
import Menu from '../Menu';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import { Layout, NavDrawer, Panel, Sidebar, Navigation, FontIcon, Button, Link } from 'react-toolbox';

import s from './styles.css';
import theme from './theme.scss';

export default class RootLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			drawerActive: false
		};
	}

	toggleDrawerActive() {
		this.setState({ drawerActive: !this.state.drawerActive });
	}

	goTo(path) {
		browserHistory.push(path);
	}

	render() {
	    return (
	    	<Layout>
	    		<NavDrawer 
	    			active={this.state.drawerActive}
	    			onOverlayClick={ this.toggleDrawerActive.bind(this) }
	    			theme={theme}>
					<Navigation type="vertical">
						<Link label="Accueil" icon="home" onClick={this.goTo.bind(this, '/')} />
						<Link label="Qui suis je ?" icon="person_pin" onClick={this.goTo.bind(this, '/quisuisje')} />
						<Link label="Consultations" icon="mode_edit" onClick={this.goTo.bind(this, '/consultations')} />
						<Link label="Approches" icon="search" onClick={this.goTo.bind(this, '/approches')} />
						<Link label="Articles" icon="library_books" onClick={this.goTo.bind(this, '/articles')} />
						<Link label="Contact" icon="contact_phone" onClick={this.goTo.bind(this, '/contact')} />
					</Navigation>
	    		</NavDrawer>
	    		<Panel>
					<Helmet 
						title="A. Barthélémy Psychologue Psychothérapeute Toulouse enfant ado parent"
						link={[
							{"rel": "stylesheet", "type": "text/css", "href": "/styles.css"},
							{"rel": "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
						]}
						meta={[
							{"name": "description", "content": "Audrey Barthélémy Psychologue Enfant Adolescent Parent Décrochage scolaire Agressivité Haut potentiel Autisme Enurésie Socialisation Toulouse La Salvetat Saint Gilles"},
							{"name": "viewport", "content": "width=device-width, user-scalable=no"}
					 	]} />
					<Menu toggleDrawerActive={this.toggleDrawerActive.bind(this)} />
					{this.props.children}
	    		</Panel>
	    	</Layout>
		);
	}
}
