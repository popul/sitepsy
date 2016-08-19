import React from 'react';
import styles from 'styles/styles.css';
import Menu from '../Menu';

import s from './styles.css';

export default props => {
    return (
		<html>
			<head>
				<title>{'Psychologue Toulouse, psychologue des enfants, décrochage scolaire'}</title>
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
				<link rel="stylesheet" type="text/css" href="/styles.css" />
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, user-scalable=no" />
				<meta name="description" content="Audrey Barthélémy, Psychologue des enfants, décrochage scolaire, agressivité, haut potentiel, autisme, énurésie, socialisation. Toulouse et la Salvetat Saint Gilles." />
			</head>
			<body>
				<div className={s.container}>
					<Menu />
					<div className={s.content}>
						{props.children}
					</div>
				</div>
				<script src='/bundle.js' />
			</body>
		</html>
	);
}
