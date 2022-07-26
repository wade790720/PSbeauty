import { gql } from "@apollo/client"

export const GetTopCategories = gql`
  query GetTopCategories {
    topCategories {
      name
      secondCategories {
        name
        categories {
          id
          name
        }
      }
    }
  }
`

export const GetCases = gql`
  query GetCases {
    cases(first: 10, order: { id: DESC }) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
      edges {
        cursor
        node {
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
      }
    }
  }
`
