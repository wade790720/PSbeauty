import { gql } from "@apollo/client"

export const GetAdImages = gql`
  query GetAdImages {
    adImages(
      where: { and: [{ usageType: { eq: "診所頁輪播" } }, { status: { eq: true } }] }
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

export const GetClinics = gql`
  query GetClinics {
    clinics(order: { consultReplyCount: DESC }, first: 10, after: "MA==") {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          consultReplyCount
          caseCount
          county
          town
          name
          id
        }
      }
    }
  }
`
