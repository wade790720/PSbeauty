import { gql } from "@apollo/client"

export const getSearchList = gql`
  query getSearchList($contains: String!) {
    cases(where: { or: [{ imageText: { contains: $contains } }] }, first: 10, order: { id: DESC }) {
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
