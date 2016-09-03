import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server'
import { createHistory, createMemoryHistory } from 'history';
import { Router, RouterContext, match, browserHistory } from 'react-router';
import routes from './Routes';
import ReactGA from 'react-ga';
import Helmet from 'react-helmet';
//import Offline from 'offline-plugin/runtime';

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

if (typeof document !== 'undefined') {
	ReactGA.initialize('UA-82152802-1');
	ReactDOM.render(<Router history={browserHistory} routes={routes} onUpdate={logPageView} />, document.getElementById('app'));
	//Offline.install();
}

export default (locals, callback) => {
	match({ routes, location: locals.path }, (error, redirectLocation, renderProps) => {
		if (renderProps) {
			const body = renderToString(<RouterContext {...renderProps} />);
			const head = Helmet.rewind();
			let html = `
			<!DOCTYPE html>
			<html lang="fr">
				<head>
					<meta charset="utf-8" />
					${head.title}
					${head.meta}
					${head.link}
				</head>
				<body>
					<div id="app">${body}</div> 
					<script src="/bundle.js"></script>
				</body>
			</html>
			`;
			callback(null, html);
		}
	});
}