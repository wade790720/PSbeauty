import { gql } from "@apollo/client"

export const getUserId = gql`
  query getClinics {
    clinic {
      id
      name
    }
  }
`
