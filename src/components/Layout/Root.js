import React from 'react';
import styles from 'styles/styles.css';
import Menu from './Menu';

export default props => {
    return (
			<html>
				<head>
					<title>{'Psychologue Audrey Barthélémy Toulouse La Salvetat Saint Gilles'}</title>
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
					<link rel="stylesheet" type="text/css" href="/styles.css" />
					<meta charSet="UTF-8" />
					<meta name="viewport" content="width=device-width, user-scalable=no" />
					<meta name="description" content="Psychologue clinicienne, Psychothérapeute sur La Salvetat Saint Gilles et dans la région de Toulouse" />
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
