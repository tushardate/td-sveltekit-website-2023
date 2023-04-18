import { query } from '$lib/queries/aboutPageQuery.js';

export async function load({ fetch }) {
	const response = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ query })
	});

	if (response.ok) {
		const responseObj = await response.json();
		const about = responseObj.data.pageBy.about;

		return {
			about
		};
	}

	return {
		status: response.status,
		error: new Error(`Could not load data`)
	};
}
