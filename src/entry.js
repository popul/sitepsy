import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server'
import { createHistory, createMemoryHistory } from 'history';
import { Router, RouterContext, match, browserHistory } from 'react-router';
import routes from './Routes';

if (typeof document !== 'undefined') {
	ReactDOM.render(<Router history={browserHistory} routes={routes} />, document)
}

export default (locals, callback) => {
	match({ routes, location: locals.path }, (error, redirectLocation, renderProps) => {
		if (renderProps) {
			const html = renderToString(<RouterContext {...renderProps} />);
			callback(null, '<!DOCTYPE html>' + html);
		}
	});
}