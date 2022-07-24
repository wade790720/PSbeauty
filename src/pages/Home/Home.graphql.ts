import { gql } from "@apollo/client"

export const GetCases = gql`
  query GetCases($contains: String) {
    cases(where: { title: { contains: $contains } }, first: 10, order: { id: DESC }) {
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
    }
  }
`

export const GetAdCards = gql`
  query GetAdCards {
    adCards(order: { id: DESC }) {
      nodes {
        id
        image
        title
        content
      }
    }
  }
`
