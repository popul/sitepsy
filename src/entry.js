import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server'
import { createHistory, createMemoryHistory } from 'history';
import { Router, RouterContext, match, browserHistory } from 'react-router';
import routes from './Routes';
import ReactGA from 'react-ga';

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

if (typeof document !== 'undefined') {
	ReactGA.initialize('UA-82152802-1');
	ReactDOM.render(<Router history={browserHistory} routes={routes} onUpdate={logPageView} />, document)
}

export default (locals, callback) => {
	match({ routes, location: locals.path }, (error, redirectLocation, renderProps) => {
		if (renderProps) {
			const html = renderToString(<RouterContext {...renderProps} />);
			callback(null, '<!DOCTYPE html>' + html);
		}
	});
}