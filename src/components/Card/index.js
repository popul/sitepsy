import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { browserHistory, Link } from 'react-router';

import theme from './theme.scss';
import s from './styles.css';

export default props => (
	<Card style={{width: '350px'}} theme={theme}>
		<CardMedia
			aspectRatio="wide"
			image={props.image}
			theme={theme}
			/>
		<CardTitle
			title={props.title}
			theme={theme}
			/>
		<CardText theme={theme}>{props.summary}</CardText>
		<CardActions theme={theme}>
			<Link className={s.link} to={props.link}>Lire</Link>
		</CardActions>
	</Card>
);