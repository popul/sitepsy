export function getMetaTags(title, description, url) {
	const metas = [
		{ "name": "description", "content": description },
		{ "property": "og:type", "content": "article" },
		{ "property": "og:title", "content": title },
		{ "property": "og:image", "content": "https://www.abarthelemy-psychologue-toulouse.fr/assets/images/Logo-256.png"},
		{ "name": "twitter:card", content: "summary" },
		{ "name": "twitter:site", content: "@abarthelemy31" },
		{ "name": "twitter:title", content: title },
		{ "name": "twitter:description", content: description }
	];
	if (url) {
		metas.push({ "property": "og:url", "content": url });
	}
	return metas;
} 