import { gql } from "@apollo/client"

export const GetRefreshToken = gql`
  query GetRefreshToken {
    refreshToken {
      uid
      customToken
    }
  }
`
