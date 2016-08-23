import React from 'react';
import s from './styles.css';
import Helmet from "react-helmet";

export default props => (
	<div>
		<Helmet title="Contact" />
		<h1>Contact</h1>
		<div className='Grid Grid--gutters Grid--full large-Grid--fit'>
			<div className="Grid-cell">
				<div className={`${s.section} ${s.presentation}`}>
					<p>Bienvenue sur le site de mon cabinet de psychologue à La Salvetat-Saint-Gilles.</p>
					<p>Je vous accueille tous les jours. Toutes les consultations sont sur rendez-vous.</p>
					<p>J'interviens à différents moments de la vie, au tout début, pendant la grossesse ou pour accompagner le désir d'enfants, pendant l'enfance, l'adolescence et auprès des parents pour soutenir l'établissement de relations familiales positives.</p>	
					<p>Mon approche clinique est intégrative, basée sur la psychologie du développement, la psychologie de l'éducation, la psychologie comportementaliste, la psychologie humaniste et la psychanalyse.</p>
					<p>Je propose un premier rendez-vous d'environ 1 heure afin de faire connaissance et de comprendre  votre problématique.</p>
					<p>Nous pouvons alors envisager ensemble le suivi le plus approprié : des entretiens de soutien (45 minutes), des entretiens psychothérapeutiques (45mn), des séances psycho-éducatives (45 minutes), des séances enfants-parents ou la réalisation d'un bilan sur plusieurs séances impliquant la passation d'épreuves d'efficience intellectuelle et/ou de tests de personnalité.</p>
				</div>	
			</div>
			<div className="Grid-cell">
				<div className={s.section}>
					<strong>Adresse du cabinet</strong>
					<address>
						4 avenue des capitouls
						31880 La Salvetat Saint Gilles
					</address>			
				</div>
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
		</div>

	</div>
);