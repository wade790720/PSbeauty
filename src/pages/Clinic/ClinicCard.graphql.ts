import { gql } from "@apollo/client"

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
