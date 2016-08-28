import React from 'react';
import s from './styles.css';
import Helmet from "react-helmet";

export default props => (
	<div>
		<Helmet title="Contact" />
		<h1>Contactez-moi</h1>
		<div className='Grid Grid--gutters Grid--full large-Grid--fit'>
			<div className="Grid-cell">
				<div className={s.section}>
					<h2>Adresse du cabinet</h2>
					<address>
						4 avenue des capitouls<br/>
						31880 La Salvetat Saint Gilles
					</address>			
				</div>
				<div className={s.section}>
					<h2>Téléphone</h2>
					<div>06 33 06 57 38</div>			
				</div>
				<div className={s.section}>
					<h2>Email</h2>
					<div>
						<a 
							href="mailto:audrey.barthelemy@outlook.com?subject=Demande de rendez-vous">
							audrey.barthelemy@outlook.com
						</a>
					</div>			
				</div>	
				<div className={s.section}>
					<h2>Horaires d'ouverture</h2>
					<div>De 9h à 20h (du Lundi au Samedi)</div>			
				</div>
				<div className={s.section}>
					<h2>Tarif des consultations</h2>
					<div>
						50€ la séance <br/>
						Une séance dure 45 minutes
					</div>
				</div>
			</div>
		</div>

	</div>
);