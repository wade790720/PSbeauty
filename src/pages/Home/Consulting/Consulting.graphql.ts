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

export const GetConsultClinic = gql`
  mutation GetConsultClinic(
    $categories: [String]
    $days: Int!
    $images: [String]
    $subject: String!
    $content: String
  ) {
    addConsult(
      input: {
        categories: $categories
        days: $days
        images: $images
        subject: $subject
        content: $content
      }
    ) {
      id
    }
  }
`
