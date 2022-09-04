import { gql } from "@apollo/client"

export const GetMe = gql`
  query GetMe {
    me {
      consults {
        id
        images
        days
        oneOnOne
        subject
        content
        consultAt
        enable
        topics {
          id
          clinic {
            id
          }
        }
        categories {
          name
          id
        }
      }
    }
  }
`

export const EnableConsult = gql`
  mutation EnableConsult($id: String!, $enable: Boolean!) {
    enableConsult(input: { id: $id, enable: $enable }) {
      id
      enable
    }
  }
`
