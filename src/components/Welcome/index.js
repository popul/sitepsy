import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-toolbox/lib/button';
import { browserHistory } from 'react-router';
import Helmet from 'react-helmet';

import Contact from '../Contact';

import s from './styles.css';

import { getMetaTags } from '../../util/seo';

function click() {
	setTimeout(browserHistory.push.bind(null, '/contact'), 300);
}

function createInitMap() {
	return {
		__html: `
function initMap() {
	setTimeout(function() {
		var map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: -34.397, lng: 150.644},
			scrollwheel: false,
			zoom: 8
		});
	}, 1000);
}
		`
	};	
}

function getWindowHeight() {
	const w = window,
	    d = document,
	    e = d.documentElement,
	    g = d.getElementsByTagName('body')[0];
	    return w.innerHeight|| e.clientHeight|| g.clientHeight;
}

export default class Welcome extends React.Component {
	componentDidMount() {
		this.resizeHeight();
		this.resizeHandler = this.resizeHeight.bind(this)
		window.addEventListener('resize', this.resizeHandler);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resizeHandler);
	}

	resizeHeight() {
		const menuHeight = document.querySelector('.contentMenu').offsetHeight;
		this.refs.header.style.minHeight = (getWindowHeight() - menuHeight) + 'px';
		this.refs.header.style.height = (getWindowHeight() - menuHeight) + 'px';
	}

	render() {
		const 
			title = "Psychologue clinicienne près de Toulouse, La Salvetat",
			description = "Difficultés d'apprentissage, d'intégration sociale, troubles du comportements, TED ... Un psychologue proche de Toulouse peut vous aider. Cabinet à la Salvetat";

		return (
			<div className={s.content}>
				<Helmet 
					title={title} 
					meta={getMetaTags(title, description)} />
				<div className={s.bgImage}>
				</div>
				<header ref="header">
					<div className={s.middleSection}>
						<div>
							<h1>
								<span style={{fontWeight: 'bold'}}>Psychologue</span> 
								{' '}
								<span className="hidden-sm-down m-l-1"></span>
								Psychothérapeute
							</h1>
						</div>
						<ul className={s.targets}>
							<li><Link to="/enfant">Enfants</Link> & <Link to="adolescent">Adolescents</Link></li>
							<li><Link to="/femme-enceinte">Femmes enceintes</Link></li>
							<li><Link to="/parent">Parents</Link></li>
							<li><Link to="/autisme">Autisme</Link></li>
							<li><Link to="/bilan">Bilans</Link></li>
						</ul>
						<div className={s.button}>
							<Button icon='event'raised onClick={click}>
								<span className="hidden-sm-down">Prendre&nbsp;</span>rendez-vous
							</Button>
						</div>
					</div>
				</header>
				<section>
					<div className={s.container}>
						<p>Bienvenue sur le site de mon cabinet de psychologue à La Salvetat-Saint-Gilles.</p>
						<p>{description}.</p>
						<p>Je vous accueille tous les jours. Toutes les consultations sont sur rendez-vous.</p>
						<p>J'interviens à différents moments de la vie, au tout début, pendant la grossesse ou pour accompagner le désir d'enfants, pendant l'enfance, l'adolescence et auprès des parents pour soutenir l'établissement de relations familiales positives.</p>	
						<p>Mon approche clinique est intégrative, basée sur la psychologie du développement, la psychologie de l'éducation, la psychologie humaniste et la psychanalyse.</p>
						<p>Je propose un premier rendez-vous d'environ 1 heure afin de faire connaissance et de comprendre  votre problématique.</p>
						<p>Nous pouvons alors envisager ensemble le suivi le plus approprié : des entretiens de soutien (45 mn), des entretiens psychothérapeutiques (45mn), des séances psycho-éducatives (45 min), des séances enfants-parents ou la réalisation d'un bilan sur plusieurs séances impliquant la passation d'épreuves d'efficience intellectuelle et/ou de tests de personnalité.</p>
					</div>
				</section>
				
				<section className={s.alternative}>
					<div className={s.container}>
						<Contact 
							redefineTitle={false}
							title='h2'
							subTitles='h3'/>
					</div>
				</section>
			</div>
		);
	}
}

// 				<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSVu1BbhKtDNSkNwZnHFULLJsW0hr6WQU&callback=initMap"
//		    async defer></script>



/*
			<div className="bottomSection">
				<address className={s.footerAddress}>
					<div>06 33 06 57 38</div>
					<div>4 avenue des Capitouls 31880<br />La Salvetat Saint Gilles</div>
				</address>
			</div>
 */
