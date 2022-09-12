import { gql } from "@apollo/client"

export const UserInboxes = gql`
  fragment UserInboxes on ConsultExt {
    userInboxes {
      id
      read
      readAt
      topicId
      replies {
        content
      }
      clinic {
        id
        name
      }
    }
  }
`

export const GetMemberInbox = gql`
  query GetMemberInbox {
    me {
      consults {
        id
        subject
        county
        content
        days
        images
        oneOnOne
        ...UserInboxes
      }
    }
  }
`
