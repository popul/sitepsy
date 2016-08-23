import React from 'react';
import { Link } from 'react-router';
import s from './styles.css';
import Helmet from 'react-helmet';

export default props => (
	<div className={s.content}>
		<Helmet titleTemplate="%s | Audrey Barthélémy Psychologue à Toulouse"/>
		{props.children}
	</div>
);