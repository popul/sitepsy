import React from 'react';

import s from './styles.css';
var Content = require('html!./content.html');

function getMarkup() {
	return {
		__html: Content
	};
}

export default props => (
	<div>
		<div dangerouslySetInnerHTML={getMarkup()}></div>
	</div>
);