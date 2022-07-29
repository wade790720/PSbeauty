import { gql } from "@apollo/client"

export const getSearchList = gql`
  query getSearchList($contains: String!) {
    cases(
      where: {
        or: [
          { beforeImageText: { contains: $contains } }
          { afterImageText: { contains: $contains } }
        ]
      }
      first: 10
      order: { id: DESC }
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
          beforeImage
          beforeImageText
          afterImage
          afterImageText
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
