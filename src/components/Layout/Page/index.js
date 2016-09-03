import React from 'react';
import { Link } from 'react-router';
import s from './styles.css';
import Helmet from 'react-helmet';

import EditOnGithub from '../../EditOnGithub';

export default props => (
	<div className={s.content}>
		<Helmet titleTemplate="%s | A.Barthelemy Psychologue Toulouse"/>
		<EditOnGithub path='' />
		{props.children}
	</div>
);