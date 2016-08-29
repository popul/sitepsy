import React from 'react';
import styles from 'styles/styles.css';
import Menu from '../Menu';
import Helmet from 'react-helmet';
import { browserHistory, Link } from 'react-router';
import { Layout, NavDrawer, Panel } from 'react-toolbox/lib/layout';
import Navigation from 'react-toolbox/lib/navigation';
import FontIcon from 'react-toolbox/lib/font_icon';
import Footer from '../Footer';

require('../../../../assets/images/icons/favicon.png');
require('../../../../assets/images/icons/Logo-128.png');
require('../../../../assets/images/icons/Logo-144.png');
require('../../../../assets/images/icons/Logo-152.png');
require('../../../../assets/images/icons/Logo-192.png');
require('../../../../assets/images/icons/Logo-256.png');

import s from './styles.css';
import theme from './theme.scss';

function getJSONLDMarkup() {
	return {
		__html: `
<script type="application/ld+json">
{
  "@context": "http://schema.org/",
  "@type": "Person",
  "name": "Audrey Barthélémy",
  "jobTitle": "Psychologue",
  "telephone": "0633065738",
  "url": "https://www.abarthelemy-psychologue-toulouse.fr"
}
</script>
`
	};
}

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
						<IconLink icon="person_pin" to="/quisuisje" text="Qui suis je ?" />
						<IconLink icon="mode_edit" to="/consultations" text="Consultations" />
						<IconLink icon="library_books" to="/articles" text="Articles" />
						<IconLink icon="contact_phone" to="/contact" text="Contact" />
					</Navigation>
	    		</NavDrawer>
	    		<Panel scrollY={true} theme={theme}>
					<span dangerouslySetInnerHTML={getJSONLDMarkup()}></span>
					<Helmet 
						title="A. Barthélémy Psychologue Toulouse La Salvetat Enfants Adolescents Parents"
						link={[
							{"rel": "icon", "type": "image/png", href:"/assets/images/favicon.png"},
							{"rel": "stylesheet", "type": "text/css", "href": "/styles.css"},
							{"rel": "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"},
							{"rel": "manifest", href: "/manifest.json"},
							{"rel": "apple-touch-icon", href: "/assets/images/Logo-152.png"}
						]}
						meta={[
							{"name": "description", "content": "Audrey Barthélémy, Psychologue clinicienne, spécialiste de l'enfant, de l'adolescent, de la parentalité et de la périnatalité. Région de Toulouse à La Salvetat Saint Gilles"},
							{"name": "viewport", "content": "width=device-width, user-scalable=no"},
							{"name": "apple-mobile-web-app-capable", content:"no"},
							{"name": "apple-mobile-web-app-status-bar-style", content:"white"},
							{"name": "apple-mobile-web-app-title", content:"Psy A.Barthélémy"},
							{"name": "application-name", content: "Psy A.Barthélémy"},
							{"name": "msapplication-tooltip", content: "Psy A.Barthélémy"},
							{"name": "msapplication-starturl", content: "/"},
							{"name": "msapplication-TileImage", content: "/assets/images/Logo-144x144.png"},
							{"name": "msapplication-TileColor", content: "#FFFFFF"}
					 	]} />
					<Menu toggleDrawerActive={this.toggleDrawerActive.bind(this)} path={this.props.location.pathname} />
					{this.props.children}
					<Footer />
	    		</Panel>
	    	</Layout>
		);
	}
}
