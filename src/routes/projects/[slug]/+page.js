import { TEMP as query  } from '$lib/queries/singleProjectQuery';

export async function load({ fetch, params }) {
	const response = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query,
			variables: {
				slug: params.slug
			}
		})
	});

	if (response.ok) {
		const responseObj = await response.json();
		const { project } = responseObj.data;

		return {
			project
		};
	}

	return {
		status: response.status,
		error: new Error(`Could not load data`)
	};
}
