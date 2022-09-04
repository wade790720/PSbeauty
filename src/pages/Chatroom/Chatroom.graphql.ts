import { gql } from "@apollo/client"

export const GetTopicDetail = gql`
  query GeTopicDetail($input: String) {
    topic(topicId: $input) {
      clinic {
        id
        name
        paid
        owners {
          id
        }
      }
      consult {
        id
        consultAt
        days
        subject
        images
        consultAt
        content
        oneOnOne
        poster {
          id
        }
        categories {
          id
          name
        }
      }
      replies {
        id
        content
        contentType
        readAt
        userId
      }
    }
  }
`

export const ReplyTopic = gql`
  mutation replyTopic($input: ReplyTopicInput) {
    replyTopic(input: $input) {
      id
    }
  }
`

export const ReadReply = gql`
  mutation readReply($input: ReadReplyInput) {
    readReply(input: $input) {
      replyId
    }
  }
`
