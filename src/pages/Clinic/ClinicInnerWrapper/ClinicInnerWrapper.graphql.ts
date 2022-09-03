import { gql } from "@apollo/client"

export const GetClinic = gql`
  query GetClinic($id: String!) {
    clinic(id: $id) {
      name
      county
      town
      address
      phone
      web
      consultReplyCount
      caseCount
      description
      categories {
        name
      }
      cases {
        id
        description
        title
        image
        collectedCount
        categories {
          id
          name
        }
      }
      images {
        id
        image
        redirectType
        targetId
        sort
      }
      doctors {
        id
        name
        resumes
        photo
        title
        expertise
      }
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
