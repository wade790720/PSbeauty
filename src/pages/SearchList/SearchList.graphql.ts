import { gql } from "@apollo/client"

export const getSearchList = gql`
  query getSearchList($contains: String!) {
    cases(where: { title: { contains: $contains } }, first: 10, order: { id: DESC }) {
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
          afterImage
        }
      }
    }
  }
`

export const getPopularKeywords = gql`
  query getPopularKeywords {
    popularKeywords {
      keywords
    }
  }
`
