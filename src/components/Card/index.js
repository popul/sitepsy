import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import { browserHistory } from 'react-router';

import theme from './theme.scss';

require('../../../assets/images/avatar.jpg');

const goTo = path => {
	browserHistory.push(path);
}

export default props => (
	<Card style={{width: '350px'}} theme={theme}>
		<CardTitle
			avatar='/assets/images/avatar.jpg'
			title={props.title}
			theme={theme}
			/>
		<CardMedia
			aspectRatio="wide"
			image={props.image}
			theme={theme}
			/>
		<CardText theme={theme}>{props.summary}</CardText>
		<CardActions theme={theme}>
			<Button label="Lire" theme={theme} onClick={goTo.bind(this, props.link)} />
		</CardActions>
	</Card>
);