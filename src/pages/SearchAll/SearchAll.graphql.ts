import { gql } from "@apollo/client"

export const getSearchListAll = gql`
  query getSearchListAll($after: String) {
    cases(first: 10, order: { id: DESC }, after: $after) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          title
          image
          imageText
          clinic {
            id
          }
        }
      }
    }
  }
`
