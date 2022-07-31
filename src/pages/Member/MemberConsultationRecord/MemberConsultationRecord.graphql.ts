import { gql } from "@apollo/client"

export const GetMe = gql`
  query GetMe {
    me {
      consults {
        id
        images
        days
        subject
        content
        consultAt
        enable
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
