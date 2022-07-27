import { gql } from "@apollo/client"

export const GetClinic = gql`
  query GetClinic($id: String!) {
    clinic(id: $id) {
      name
      activities {
        id
        subject
        content
        createdAt
        image
      }
    }
  }
`
