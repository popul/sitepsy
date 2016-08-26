import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Link from 'react-toolbox/lib/link';
import { browserHistory } from 'react-router';
import NativeListener from 'react-native-listener';

import theme from './theme.scss';

const goTo = path => {
	browserHistory.push(path);
}

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
			<NativeListener onClick={goTo.bind(this, props.link)}>
				<Link label="Lire" href={props.link} theme={theme} />
			</NativeListener>
		</CardActions>
	</Card>
);