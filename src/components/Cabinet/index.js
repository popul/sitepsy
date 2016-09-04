import React from 'react';
import ImageGallery from 'react-image-gallery';
import Helmet from "react-helmet";

import s from './styles.css';

import '../../../node_modules/react-image-gallery/build/image-gallery.css';

import '../../../assets/images/cabinet/bureau.jpg';
import '../../../assets/images/cabinet/bureau-mini.jpg';
import '../../../assets/images/cabinet/bureau-chaise.jpg';
import '../../../assets/images/cabinet/bureau-chaise-mini.jpg';
import '../../../assets/images/cabinet/emotion.jpg';
import '../../../assets/images/cabinet/emotion-mini.jpg';
import '../../../assets/images/cabinet/maison.jpg';
import '../../../assets/images/cabinet/maison-mini.jpg';
import '../../../assets/images/cabinet/maman.jpg';
import '../../../assets/images/cabinet/maman-mini.jpg';
import '../../../assets/images/cabinet/dehors.jpg';
import '../../../assets/images/cabinet/dehors-mini.jpg';
import '../../../assets/images/cabinet/parking.jpg';
import '../../../assets/images/cabinet/parking-mini.jpg';
import '../../../assets/images/cabinet/attente.jpg';
import '../../../assets/images/cabinet/attente-mini.jpg';

const images = [
	{
		original: '/assets/images/bureau.jpg',
		thumbnail: '/assets/images/bureau-mini.jpg',
		description: 'Bienvenue dans mon cabinet de psychologie clinique'
	},
	{
		original: '/assets/images/bureau-chaise.jpg',
		thumbnail: '/assets/images/bureau-chaise-mini.jpg',
		description: 'Enfants, adolescents, parents : Un lieu pour vous écouter et vous aider'
	},
	{
		original: '/assets/images/maison.jpg',
		thumbnail: '/assets/images/maison-mini.jpg',
		description: 'Le jeu symbolique: une activité essentielle au développement et un outil thérapeutique dans la régulation des conflits intérieurs'
	},
	{
		original: '/assets/images/maman.jpg',
		thumbnail: '/assets/images/maman-mini.jpg',
		description: 'Mamans et futures mamans, un espace d\'accueil adapté' 
	},
	{
		original: '/assets/images/emotion.jpg',
		thumbnail: '/assets/images/emotion-mini.jpg',
		description: 'Apprendre les émotions pour développer l\'affirmation de soi et la sociabilité'
	},
	{
		original: '/assets/images/attente.jpg',
		thumbnail: '/assets/images/attente-mini.jpg',
		description: 'La salle d\'attente de l\'espace de santé des Capitouls'
	},
	{
		original: '/assets/images/dehors.jpg',
		thumbnail: '/assets/images/dehors-mini.jpg',
		description: 'L\'espace de santé des Capitouls vous accueille sur rendez-vous'
	},
	{
		original: '/assets/images/parking.jpg',
		thumbnail: '/assets/images/parking-mini.jpg',
		description: 'Un parking se trouve juste en face du cabinet'
	}
];

export default props => {
	return (
		<div className={s.content}>
			<Helmet 
				title="Cabinet La Salvetat Saint Gilles"
				meta={[
					{"name": "description", "content": "Visite guidée du cabinet de psychologie clinique de la Salvetat Saint Gilles, à proximité de Toulouse"}
			]} />
			<ImageGallery
				autoPlay={true}
				items={images}
				slideInterval={8000}
				showThumbnails={true} />
		</div>
	);
}