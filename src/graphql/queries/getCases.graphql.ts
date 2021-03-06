import { gql } from "@apollo/client"

export const GetCases = gql`
  query GetCases($after: String) {
    cases(first: 10, order: { id: DESC }, after: $after) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
      nodes {
        id
        description
        title
        beforeImage
        afterImage
        collectedCount
        categories {
          id
          name
        }
        clinic {
          id
          name
          phone
        }
      }
      edges {
        cursor
      }
    }
  }
`
