import { query } from '$lib/queries/homepageProjectQuery.js';

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
		const projects = responseObj.data.projects.nodes;

		return {
			projects
		};
	}

	return {
		status: response.status,
		error: new Error(`Could not load data`)
	};
}
