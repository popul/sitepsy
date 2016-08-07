import React from 'react';
import { Link } from 'react-router';
import s from './styles.css';

export default props => (
	<div className={s.content}>
		{props.children}
	</div>
);