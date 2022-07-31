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
    $userId: String
    $days: Int!
    $categories: [String]
    $images: [String]
    $subject: String!
    $content: String!
  ) {
    consultClinic(
      input: {
        userId: $userId
        days: $days
        categories: $categories
        images: $images
        subject: $subject
        content: $content
      }
    ) {
      id
      topicId
    }
  }
`
