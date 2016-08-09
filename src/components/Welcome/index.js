import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-toolbox/lib/button';
import { browserHistory } from 'react-router';

import s from './styles.css';

function click() {
	setTimeout(browserHistory.push.bind(null, '/contact'), 300);
}

export default props => (
	<div className='cover'>
		<div className='topSection'></div>
		<div className='middleSection'>
			<div>
				<h2><span className='m-r-1' style={{fontWeight: 'bold'}}>Psychologue</span> Psychothérapeute</h2>
			</div>
			<ul className='targets'>
				<li>Enfants</li>
				<li className="pipe">|</li>
				<li>Adolescents</li>
				<li className="pipe">|</li>
				<li>Parents</li>
				<li className="pipe hideSmall">|</li>
				<li>Périnatalité</li>
			</ul>
			<div className={s.button}>
				<Button icon='event' label="Prendre rendez-vous" raised onClick={click} />
			</div>
		</div>
		<div className="bottomSection">
			<address className={s.footerAddress}>
				<div>Tel: 06 33 06 57 38</div>
				<div>Adresse: 4 avenue des Capitouls 31880 La Salvetat Saint Gilles</div>				
			</address>
		</div>
	</div>
);

//	
