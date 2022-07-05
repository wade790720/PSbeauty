import { gql } from "@apollo/client"

export const GetAdImages = gql`
  query GetAdImages {
    adImages(
      where: { and: [{ usageType: { eq: "首頁輪播" } }, { status: { eq: true } }] }
      order: { id: DESC }
      first: 5
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
          image
          sort
          usageType
          redirectType
          targetId
          status
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
          parent
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
