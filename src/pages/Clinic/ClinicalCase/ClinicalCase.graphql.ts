import { gql } from "@apollo/client"

export const GetCase = gql`
  query GetCase($id: String!) {
    case(id: $id) {
      id
      title
      description
      image
      categories {
        id
        name
      }
      clinic {
        id
        name
      }
    }
  }
`

export const GetCollectItems = gql`
  query GetCollectItems {
    me {
      userCollectedCases {
        id
      }
    }
  }
`

export const CollectCase = gql`
  mutation CollectCase($caseId: String!) {
    collectCase(input: { caseId: $caseId }) {
      userId
      collectedCount
    }
  }
`

export const RemoveCollectedCase = gql`
  mutation RemoveCollectedCase($caseId: String!) {
    removeCollectedCase(input: { caseId: $caseId }) {
      userId
      collectedCount
    }
  }
`
