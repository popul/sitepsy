import React from 'react';
import styles from 'styles/styles.css';
import Menu from './Menu';

export default props => {
    return (
			<html>
				<head>
					<title>{'Audrey Barthélémy Psychologue Toulouse décrochage scolaire psychologue enfant'}</title>
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
					<link rel="stylesheet" type="text/css" href="/styles.css" />
					<meta charSet="UTF-8" />
					<meta name="viewport" content="width=device-width, user-scalable=no" />
					<meta name="description" content="Psychologue Toulouse, psychologue clinicienne, Psychothérapeute sur La Salvetat Saint Gilles et dans la région de Toulouse. Psychologue enfant, décrochage scolaire" />
				</head>
				<body>
					<div className="container">
						<Menu />
						<div className="content">
							{props.children}					
						</div>
					</div>
					<script src='/bundle.js' />
				</body>
			</html>
	);
}
