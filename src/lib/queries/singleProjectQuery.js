export const query = `query getProjectBySlug($slug: ID!) {
  project(id: $slug, idType: SLUG) {
    project {
      headline
      summary
      thumbnailImage
      thumbnailVideo
      sections {
        sectionClasses
        items {
          ... on Project_Project_sections_Items_Text {
            content
            fieldGroupName
            textClasses
          }
          ... on Project_Project_sections_Items_Image {
            fieldGroupName
            imageClasses
            url
          }
          ... on Project_Project_sections_Items_Video {
            fieldGroupName
            url
            poster
            videoClasses
            type
          }
          ...on Project_Project_sections_Items_Embed {
            content
            embedClasses
            fieldGroupName
          }
        }
      }
      password {
        key
        required
        message
      }
      client
      role
    }
    title
    id
    slug
  }
  projects (first: 50) {
    nodes {
      project {
        client
        thumbnailImage
        thumbnailVideo
      }
      title
      slug
      id
    }
  }
}`;