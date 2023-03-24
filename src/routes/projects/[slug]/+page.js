// export const load = async (serverLoadEvent) => {
// 	const { fetch, params } = serverLoadEvent;
// 	const { slug } = params;
// 	const response = await fetch(`http://testing.tushardate.com/wp-json/td/v1/projects/${slug}`);
// 	const project = await response.json();
// 	return {
// 		project
// 	};
// };

const query = `query getProjectBySlug($slug: ID!) {
	project(id: $slug, idType: SLUG) {
	  id
	  slug
	  title
	  projectId
	  projectDetails {
		generalProjectDescription
		projectHeadline
		clientName
	  }
	  project_item {
		groupRowRepeater {
		  groupRowRepeaterClasses
		  groupRowRepeaterWidth
		  groupRowRepeaterItems {
			singleItemClasses
			singleItemWidth
		  }
		}
	  }
	  featuredImage {
		node {
		  srcSet(size: THUMBNAIL)
		}
	  }
	}
  }`;

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
