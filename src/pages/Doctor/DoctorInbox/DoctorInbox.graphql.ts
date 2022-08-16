import { gql } from "@apollo/client"

export const GetDoctorInbox = gql`
  query GetDoctorInbox($input: String) {
    clinicInbox(first: 15, after: $input, order: { id: DESC }) {
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
          readAt
          user {
            id
            name
          }
          topic {
            id
            consult {
              id
              subject
              content
            }
            replies {
              id
              createdAt
              contentType
              content
              readAt
            }
          }
        }
      }
    }
  }
`

export const readClinicInbox = gql`
  mutation readClinicInbox($input: ReadClinicInboxInput!) {
    readClinicInbox(input: $input) {
      id
    }
  }
`
