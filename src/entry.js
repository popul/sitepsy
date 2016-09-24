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
			<html lang="fr-rf">
				<head>
					<meta charset="utf-8" />
					<meta name="robots" content="index, follow" />
					<meta http-equiv="content-type" content="text/html; charset=utf-8" />
					${head.title}
					${head.meta}
					${head.link}
					<script type="application/ld+json">
					{
					  "@context": "http://schema.org",
					  "@type": "Person",
					  "name": "Audrey Barthélémy",
					  "jobTitle": "Psychologue",
					  "telephone": "0633065738",
					  "url": "https://www.abarthelemy-psychologue-toulouse.fr/",
					  "homeLocation": {
					  	"@type": "LocalBusiness",
						"address": {
							"@type": "PostalAddress",
							"addressLocality": "La Salvetat Saint Gilles",
							"streetAddress": "10 rue peyresourde"
						},
						"description": "Cabinet de psychologie pour enfant, adolescent et parent à la Salvetat Saint Gilles",
						"name": "Audrey Barthélémy Psychologue",
						"telephone": "06 33 06 57 38"
					  }
					}
					</script>
					<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSVu1BbhKtDNSkNwZnHFULLJsW0hr6WQU"></script> 
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