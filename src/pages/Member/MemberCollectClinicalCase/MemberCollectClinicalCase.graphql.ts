import { gql } from "@apollo/client"

export const GetMe = gql`
  query GetMe {
    me {
      userCollectedCases {
        id
        title
        description
        beforeImage
        afterImage
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
