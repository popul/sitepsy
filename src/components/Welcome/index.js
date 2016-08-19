import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-toolbox/lib/button';
import { browserHistory } from 'react-router';

import s from './styles.css';

function click() {
	setTimeout(browserHistory.push.bind(null, '/contact'), 300);
}

function createInitMap() {
	return {
		__html: `
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		scrollwheel: false,
		zoom: 8
	});
}
		`
	};	
}

export default props => (
	<div className={s.content}>
		<header className={s.bgImage}>
			<div className={s.middleSection}>
				<div>
					<h2>
						<span style={{fontWeight: 'bold'}}>Psychologue</span> 
						{' '}
						<span className="hidden-sm-down m-l-1"></span>
						Psychothérapeute
					</h2>
				</div>
				<ul className={s.targets}>
					<li>Enfants</li>
					<li className={s.pipe}>|</li>
					<li>Adolescents</li>
					<li className={s.pipe}>|</li>
					<li>Parents</li>
					<li className={`${s.pipe} ${s.hideSmall}`}>|</li>
					<li>Périnatalité</li>
				</ul>
				<div className={s.button}>
					<Button icon='event' label="Prendre rendez-vous" raised onClick={click} />
				</div>
			</div>
		</header>
		<section>
			<div className={s.container}>
				<p>Bienvenue sur le site de mon cabinet de psychologue à La Salvetat-Saint-Gilles.</p>
				<p>Je vous accueille tous les jours. Toutes les consultations sont sur rendez-vous.</p>
				<p>J'interviens à différents moments de la vie, au tout début, pendant la grossesse ou pour accompagner le désir d'enfants, pendant l'enfance, l'adolescence et auprès des parents pour soutenir l'établissement de relations familiales positives.</p>	
				<p>Mon approche clinique est intégrative, basée sur la psychologie du développement, la psychologie de l'éducation, la psychologie comportementaliste, la psychologie humaniste et la psychanalyse.</p>
				<p>Je propose un premier rendez-vous d'environ 1 heure afin de faire connaissance et de comprendre  votre problématique.</p>
				<p>Nous pouvons alors envisager ensemble le suivi le plus approprié : des entretiens de soutien (45 minutes), des entretiens psychothérapeutiques (45mn), des séances psycho-éducatives (45 minutes), des séances enfants-parents ou la réalisation d'un bilan sur plusieurs séances impliquant la passation d'épreuves d'efficience intellectuelle et/ou de tests de personnalité.</p>
			</div>
		</section>
		<section className={s.alternative}>
			<div className={s.container}>
				<div className={s.section}>
					<strong>Adresse du cabinet</strong>
					<address>
						4 avenue des capitouls
						31880 La Salvetat Saint Gilles
					</address>
				</div>
				<div id="map"></div>
				<script dangerouslySetInnerHTML={createInitMap()}></script>
				<div className={s.section}>
					<strong>Téléphone</strong>
					<div>06 33 06 57 38</div>			
				</div>
				<div className={s.section}>
					<strong>Email</strong>
					<div>
						<a 
							href="mailto:audrey.barthelemy@outlook.com?subject=Demande de rendez-vous">
							audrey.barthelemy@outlook.com
						</a>
					</div>			
				</div>	
				<div className={s.section}>
					<strong>Horaires d'ouverture</strong>
					<div>De 9h à 20h (du Lundi au Samedi)</div>			
				</div>
				<div className={s.section}>
					<strong>Tarif des consultations</strong>
					<div>
						50€ la séance <br/>
						Une séance dure 45 minutes
					</div>
				</div>
			</div>
		</section>
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSVu1BbhKtDNSkNwZnHFULLJsW0hr6WQU&callback=initMap"
    async defer></script>
	</div>
);

/*
			<div className="bottomSection">
				<address className={s.footerAddress}>
					<div>06 33 06 57 38</div>
					<div>4 avenue des Capitouls 31880<br />La Salvetat Saint Gilles</div>
				</address>
			</div>
 */
