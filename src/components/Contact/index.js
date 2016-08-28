import React from 'react';
import s from './styles.css';
import Helmet from "react-helmet";

export default props => (
	<div>
		<Helmet title="Contact" />
		<h1>Addresse du cabinet</h1>
		<div className='Grid Grid--gutters Grid--full large-Grid--fit'>
			<div className="Grid-cell">
				<div className={s.section}>
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