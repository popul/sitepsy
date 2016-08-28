import React from 'react';
import Helmet from "react-helmet";
import FontIcon from 'react-toolbox/lib/font_icon';

import s from './styles.css';

export default props => (
	<div className={s.content}>
		<Helmet title="Contact" />
		<h1>Contactez-moi</h1>
		<div className='Grid Grid--gutters Grid--full large-Grid--fit'>
			<div className="Grid-cell">
				<div className={s.section}>
					<FontIcon value='person_pin' />
					<address>
						4 avenue des capitouls<br/>
						31880 La Salvetat Saint Gilles
					</address>			
				</div>
				<div className={s.section}>
					<FontIcon value='phone' />				
					<div>06 33 06 57 38</div>			
				</div>
				<div className={s.section}>
					<FontIcon value='email' />	
					<div>
						<a 
							href="mailto:audrey.barthelemy@outlook.com?subject=Demande de rendez-vous">
							audrey.barthelemy@outlook.com
						</a>
					</div>			
				</div>	
				<div className={`${s.section} m-t-2`}>
					<h2>Horaires d'ouverture</h2>
					<FontIcon value='access_time' />
					<div>De 9h à 20h (du Lundi au Samedi)</div>			
				</div>
				<div className={s.section}>
					<h2>Tarif des consultations</h2>
					<FontIcon value='info' />
					<div>
						50€ la séance <br/>
						Une séance dure 45 minutes
					</div>
				</div>
			</div>
		</div>

	</div>
);