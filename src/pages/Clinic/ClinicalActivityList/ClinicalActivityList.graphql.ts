import { gql } from "@apollo/client"

export const GetActivities = gql`
  query GetActivities($after: String) {
    activities(first: 10, order: { id: DESC }, after: $after) {
      edges {
        cursor
      }
      pageInfo {
        hasNextPage
      }
      nodes {
        id
        image
        subject
        content
        clinic {
          id
        }
      }
    }
  }
`
