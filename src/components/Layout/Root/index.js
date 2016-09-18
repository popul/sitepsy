import React from 'react';
import styles from 'styles/styles.css';
import Menu from '../Menu';
import Helmet from 'react-helmet';
import { browserHistory, Link } from 'react-router';
import { Layout, NavDrawer, Panel } from 'react-toolbox/lib/layout';
import Navigation from 'react-toolbox/lib/navigation';
import FontIcon from 'react-toolbox/lib/font_icon';
import Footer from '../Footer';
import { getMetaTags } from '../../../util/seo';
import { RouteTransition, presets } from 'react-router-transition';

import '../../../../assets/images/icons/favicon.png';
import '../../../../assets/images/icons/Logo-128.png';
import '../../../../assets/images/icons/Logo-144.png';
import '../../../../assets/images/icons/Logo-152.png';
import '../../../../assets/images/icons/Logo-192.png';
import '../../../../assets/images/icons/Logo-256.png';

import s from './styles.css';
import theme from './theme.scss';


const IconLink = props => (
	<div className={s.link}>
		<FontIcon className={s.icon} value={props.icon}></FontIcon>
		<Link className={s.text} to={props.to}>{props.text}</Link>
	</div>
);

export default class RootLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			drawerActive: false
		};
		this.title = "Psychologue pour enfant, ado, parent. Toulouse, La Salvetat";
		this.description = "Difficultés d'apprentissage, d'intégration sociale, troubles du comportement, dépressions, TED. Audrey Barthelemy, psychologue pour enfant, proche de Toulouse";
		this.rootUrl = "https://www.abarthelemy-psychologue-toulouse.com"
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
						<IconLink icon="home" to="/" text="Accueil" />
						<IconLink icon="person_pin" to="/quisuisje/" text="Qui suis je ?" />
						<IconLink icon="mode_edit" to="/consultations/" text="Consultations" />
						<IconLink icon="business_center" to="/cabinet/" text="Cabinet" />
						<IconLink icon="library_books" to="/articles/" text="Articles" />
						<IconLink icon="contact_phone" to="/salvetat/" text="Contact" />
					</Navigation>
	    		</NavDrawer>
	    		<Panel scrollY={true} theme={theme}>
					<Helmet 
						title={this.title}
						link={[
							{"rel": "icon", "type": "image/png", href:"/assets/images/favicon.png"},
							{"rel": "stylesheet", "type": "text/css", "href": "/styles.css"},
							{"rel": "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"},
							{"rel": "manifest", href: "/manifest.json"},
							{"rel": "apple-touch-icon", href: "/assets/images/Logo-152.png"},
							{"rel": "publisher", href:"https://plus.google.com/115772951654603083174"}
						]}
						meta={[
							...getMetaTags(this.title, this.description, `${this.rootUrl}${this.props.location.pathname}`),
							{"name": "viewport", "content": "width=device-width, user-scalable=no"},
							{"name": "apple-mobile-web-app-capable", content:"no"},
							{"name": "apple-mobile-web-app-status-bar-style", content:"white"},
							{"name": "apple-mobile-web-app-title", content:"Psy A.Barthélémy"},
							{"name": "application-name", content: "Psy A.Barthélémy"},
							{"name": "msapplication-tooltip", content: "Psy A.Barthélémy"},
							{"name": "msapplication-starturl", content: "./"},
							{"name": "msapplication-TileImage", content: "/assets/images/Logo-144.png"},
							{"name": "msapplication-TileColor", content: "#FFFFFF"}
					 	]} />
					<Menu toggleDrawerActive={this.toggleDrawerActive.bind(this)} path={this.props.location.pathname} />
					<RouteTransition
						pathname={this.props.location.pathname}
						{...presets.fade}>
						{this.props.children}
					</RouteTransition>
					<Footer />
	    		</Panel>
	    	</Layout>
		);
	}
}
