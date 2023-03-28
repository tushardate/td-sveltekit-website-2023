export const query = `query getProjectBySlug($slug: ID!) {
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

export const SINGLE_PROJECT_QUERY = `query getProjectBySlug($slug: ID!) {
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

export const TEMP = `query getProjectBySlug($slug: ID!) {
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
          singleItem {
            __typename
            ... on Project_ProjectItem_groupRowRepeater_groupRowRepeaterItems_SingleItem_SingleItemTextBlock {
              textItemClasses
              contentTextItem
              fieldGroupName
            }
            ... on Project_ProjectItem_groupRowRepeater_groupRowRepeaterItems_SingleItem_SingleItemImage {
              imageItemClasses
              contentImage {
                sourceUrl
              }
              fieldGroupName
            }
            ... on Project_ProjectItem_groupRowRepeater_groupRowRepeaterItems_SingleItem_SingleItemVideo {
              videoRatio
              videoItemClasses
              contentVideo
              contentVideoId
              fieldGroupName
            }
          }
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
