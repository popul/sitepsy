import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { browserHistory, Link } from 'react-router';

import theme from './theme.scss';
import s from './styles.css';

const goTo = link => {
	browserHistory.push(link);
}

const SiteCard = props => (
	<Card 
		style={{width: '350px', cursor: 'pointer'}} 
		theme={theme} 
		onClick={goTo.bind(null, props.link)}>
		<CardMedia
			aspectRatio="wide"
			image={props.image}
			theme={theme}
			/>
		<Link to={props.link}>
			<CardTitle
				title={props.title}
				theme={theme}
				/>
		</Link>
		{props.summary && 
			<CardText theme={theme}>{props.summary}</CardText> 
		}

		{!props.cardLink && 
		<CardActions theme={theme}>
			<Link className={s.link} to={props.link}>Lire</Link>
		</CardActions>
		}
	</Card>
);

SiteCard.defaultProps = { 
	cardLink: false,
};

export default SiteCard;