import { gql } from "@apollo/client"

export const GetMe = gql`
  query GetMe {
    me {
      consults {
        id
        images
        subject
        content
        consultAt
        categories {
          name
          id
        }
      }
    }
  }
`
