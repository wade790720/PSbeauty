import { gql } from "@apollo/client"

export const GetMe = gql`
  query GetMe {
    me {
      userCollectedCases {
        id
        title
        description
        image
        clinic {
          id
          name
        }
        categories {
          id
          name
        }
      }
    }
  }
`
