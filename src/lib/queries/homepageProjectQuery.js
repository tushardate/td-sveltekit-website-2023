export const query = `
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
