import { gql } from "@apollo/client"

export const GetAdCards = gql`
  query GetAdCards($id: String!) {
    adCards(order: { id: DESC }, where: { id: { in: [$id] } }) {
      nodes {
        id
        image
        title
        content
      }
    }
  }
`
