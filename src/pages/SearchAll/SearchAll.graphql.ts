import { gql } from "@apollo/client"

export const getSearchListAll = gql`
  query getSearchListAll {
    cases(first: 10, order: { id: DESC }) {
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
