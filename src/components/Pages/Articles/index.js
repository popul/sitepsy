import React from 'react';
import Helmet from "react-helmet";

import Cards from './cards';

import s from './styles.css';

import '../../../../assets/images/illusion.jpg';
import '../../../../assets/images/jeux-jouets-bebe.jpg';
import '../../../../assets/images/cloches-paques.jpg';
import '../../../../assets/images/bebe-non.jpg';
import '../../../../assets/images/motricite-bebe.jpg';
import '../../../../assets/images/meditation-prenatale.jpg';
import '../../../../assets/images/bebe-in-utero-emotion-maternelle.jpg';

import { getMetaTags } from '../../../util/seo';

const 
	title = "Articles",
	description = "Actualité sur l'éducation et le développement de l'enfant, sur la grossesse et la parentalité";

export default props => (
	<div className={s.content}>
		<Helmet 
			title={title}
		    meta={getMetaTags(title, description)} />			
		<h1>{title}</h1>
		<Cards />
	</div>
);
