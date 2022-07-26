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
      cases {
        id
        description
        title
        beforeImage
        afterImage
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
