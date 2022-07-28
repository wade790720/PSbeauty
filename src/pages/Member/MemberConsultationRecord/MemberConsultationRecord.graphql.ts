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
        categories {
          name
          id
        }
      }
    }
  }
`
