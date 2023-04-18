import { query } from '$lib/queries/singleProjectQuery';

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
		const { project, projects } = responseObj.data;
		let allProjects = projects.nodes;
		let currentIdx = allProjects.findIndex((e) => e.id == project.id);
		const nextIdx = (currentIdx + 1) % allProjects.length;
		const prevIdx = (currentIdx - 1 + allProjects.length) % allProjects.length;

		return {
			project,
			prev: allProjects[prevIdx],
			next: allProjects[nextIdx]
		};
	}

	return {
		status: response.status,
		error: new Error(`Could not load data`)
	};
}
