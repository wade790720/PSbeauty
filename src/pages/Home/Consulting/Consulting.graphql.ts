import { gql } from "@apollo/client"

export const GetTopCategories = gql`
  query GetTopCategories {
    topCategories {
      name
      secondCategories {
        name
        categories {
          id
          name
        }
      }
    }
  }
`
