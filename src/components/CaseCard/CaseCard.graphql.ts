import { gql } from "@apollo/client"

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
