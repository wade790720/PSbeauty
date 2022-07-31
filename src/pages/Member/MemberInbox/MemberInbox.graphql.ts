import { gql } from "@apollo/client"

export const GetMemberInbox = gql`
  query GetMemberInbox {
    me {
      replyInbox {
        id
        content
        readAt
        topic {
          id
          clinic {
            id
            name
          }
        }
      }
    }
  }
`
