import React from 'react';
import Helmet from "react-helmet";
import FontIcon from 'react-toolbox/lib/font_icon';

import GMap from '../Map';

import s from './styles.css';

function nearOf(city) {
	if (city !== Contact.defaultProps.city) {
		return `près de ${city}`;
	}
	return '';
}

const Contact = props => (
	<div className={s.content}>
		{props.redefineTitle && <Helmet 
			title={`Contact ${props.city}`}
			meta={[
				{"name": "description", "content": "Contactez-moi au 06-33-06-57-38. Adresse du cabinet: 4 avenue des Capitouls 31880 La Salvetat Saint Gilles. Email: audrey.barthelemy@outlook.com"}
			]} />}
		{React.createElement(props.title, {}, 'Contactez-moi')}
		<div className='Grid Grid--gutters Grid--full large-Grid--fit'>
			<div className="Grid-cell">
				<h4>Psychologue pour enfant, adolescent et parent {`${nearOf(props.city)}`},<br /> à la Salvetat Saint Gilles</h4>
				<div className={s.section}>
					<FontIcon value='person_pin' />
					<address>
						4 avenue des capitouls<br/>
						31880 La Salvetat Saint Gilles
					</address>			
				</div>
				<div className={s.section}>
					<FontIcon value='calendar' />				
					<div><a href="https://www.maiia.com/psychologue/31880-la-salvetat-saint-gilles/barthelemy-audrey?centerId=62d68b0d19b7c66f93f6178c">Prendre rendez-vous sur Maiia</a></div>			
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
					<div>De 9h à 17h (du Lundi au Samedi)</div>			
				</div>
				<div className={s.section}>
					{React.createElement(props.subTitles, {}, 'Tarif des consultations')}
					<FontIcon value='info' />
					<div>
						50€ la séance <br/>
						Une séance dure 40 minutes
					</div>
				</div>
			</div>
		</div>
		{props.showMap && <section style={{height:'500px', padding: '0px'}}>
			<GMap zoomLevel={props.mapZoomLevel} />				
		</section>}
	</div>
);

Contact.defaultProps = { 
	redefineTitle: true,
	title: 'h1', 
	subTitles: 'h2',
	showMap: true,
	mapZoomLevel: 11,
	city: 'La Salvetat Saint Gilles'
};

export const ContactNearOf = (city, mapZoomLevel=11) => props => {
	return <Contact city={city} mapZoomLevel={mapZoomLevel} />
}

export default Contact;
