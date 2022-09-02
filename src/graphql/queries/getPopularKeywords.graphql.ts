import { gql } from "@apollo/client"

export const getPopularKeywords = gql`
  query getPopularKeywords {
    popularKeywords {
      keywords
    }
  }
`
