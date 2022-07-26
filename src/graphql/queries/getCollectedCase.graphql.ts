import { gql } from "@apollo/client"

export const GetCollectedCase = gql`
  query GetCollectedCase {
    me {
      userCollectedCases {
        id
      }
    }
  }
`
