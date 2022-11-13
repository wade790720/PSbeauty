import { gql } from "@apollo/client"

export const GetClinics = gql`
  query GetClinics($after: String) {
    clinics(order: { consultReplyCount: DESC }, first: 10, after: $after) {
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

export const GetClinicsSearch = gql`
  query GetClinicsSearch($county: [String], $town: [String], $after: String) {
    clinics(
      where: { county: { in: $county }, town: { in: $town } }
      order: { consultReplyCount: DESC }
      first: 10
      after: $after
    ) {
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
