import { gql } from "@apollo/client"

export const GetCollectedActivities = gql`
  query GetCollectedActivities {
    me {
      userCollectedActivities {
        id
        subject
        content
        createdAt
        image
        clinic {
          id
          name
        }
      }
    }
  }
`

export const CollectActivity = gql`
  mutation CollectActivity($activityId: String!) {
    collectActivity(input: { activityId: $activityId }) {
      activityId
    }
  }
`

export const RemoveCollectedActivity = gql`
  mutation RemoveCollectedActivity($activityId: String!) {
    removeCollectedActivity(input: { activityId: $activityId }) {
      userId
      activityId
    }
  }
`
