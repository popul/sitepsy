import React from 'react';
import Helmet from "react-helmet";
import FontIcon from 'react-toolbox/lib/font_icon';

import s from './styles.css';

const Contact = props => (
	<div className={s.content}>
		{props.redefineTitle && <Helmet 
			title="Contact"
			meta={[
				{"name": "description", "content": "Contactez-moi au 06-33-06-57-38. Adresse du cabinet: 4 avenue des Capitouls 31880 La Salvetat Saint Gilles. Email: audrey.barthelemy@outlook.com"}
			]} />}
		{React.createElement(props.title, {}, 'Contactez-moi')}
		<div className='Grid Grid--gutters Grid--full large-Grid--fit'>
			<div className="Grid-cell">
				<h4>Psychologue clinicienne</h4>
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
					{React.createElement(props.subTitles, {}, 'Horaires d\'ouverture')}
					<FontIcon value='access_time' />
					<div>De 9h à 20h (du Lundi au Samedi)</div>			
				</div>
				<div className={s.section}>
					{React.createElement(props.subTitles, {}, 'Tarif des consultations')}
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

Contact.defaultProps = { 
	redefineTitle: true,
	title: 'h1', 
	subTitles: 'h2' 
};

export default Contact;