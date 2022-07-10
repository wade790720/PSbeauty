import { gql } from "@apollo/client"

export const GetTopicDetail = gql`
  query GeTopicDetail($input: String) {
    topic(topicId: $input) {
      clinic {
        id name
      }
      consult {
        id days subject images consultAt content 
        poster {
          id
        }
      }
      replies {
        id content contentType readAt userId
      }
    }
  }
`
