import { gql } from "@apollo/client"

export const getSpecifyCases = gql`
  query getSpecifyCases($after: String, $searchKeys: [StringOperationFilterInput!]) {
    cases(
      first: 10
      order: { id: DESC }
      after: $after
      where: { categories: { some: { or: $searchKeys } } }
    ) {
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
