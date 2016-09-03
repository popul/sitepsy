import React from 'react';
import SocialButtons from '../../SocialButtons';
import s from './styles.css';

const url = "https://www.abarthelemy-psychologue-toulouse.fr",
	FBAppId = "1130289380340612"

export default props => (
	<div className={s.container}>
		<div className={s.content}>
			<p>Audrey Barthélémy - Psychologue Clinicienne - Spécialiste de l'enfant, de l'adolescent, de la parentalité et de la périnatalité</p> 
			<p>A proximité de Toulouse - La Salvetat Saint Gilles</p>
			<SocialButtons />
		</div>
	</div>
);