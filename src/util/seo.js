export function getMetaTags(title, description, url) {
	const metas = [
		{ "name": "description", "content": description },
		{ "property": "og:type", "content": "article" },
		{ "property": "og:title", "content": title },
		{ "property": "og:image", "content": "https://www.abarthelemy-psychologue-toulouse.fr/assets/images/Logo-256.png"},
		{ "property": "fb:app_id", content: "1130289380340612" },
		{ "property": "business:contact_data:street_address", content:"4 avenue des Capitouls" },
		{ "property": "business:contact_data:locality", content:"La Salvetat Saint Gilles" },
		{ "property": "business:contact_data:postal_code", content:"31880" },
		{ "property": "business:contact_data:country_name", content:"France" },
		{ "property": "business:contact_data:email", content:"audrey.barthelemy@outlook.com" },
		{ "property": "business:contact_data:phone_number", content:"0633065738" },
		{ "property": "place:location:latitude", content:"43.578425" },
		{ "property": "place:location:longitude", content:"1.272752" },		
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