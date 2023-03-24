// export const load = async (serverLoadEvent) => {
// 	const { fetch } = serverLoadEvent;
// 	const response = await fetch('http://testing.tushardate.com/wp-json/td/v1/projects');
// 	const projects = await response.json();
// 	return {
// 		projects
// 	};
// };

const query = `
	query getProjects {
		projects (first: 50) {
			nodes {
				id
				slug
				title
				projectDetails {
				  thumbnailCdn
				  clientName
				}
			}
		}
	}
	`;

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
