import * as Types from "../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetCollectedActivitiesQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetCollectedActivitiesQuery = {
  me?: {
    __typename: "User"
    userCollectedActivities?: Array<{
      __typename: "ClinicActivity"
      id?: string | null
      subject?: string | null
      content?: string | null
      createdAt: number
      clinic?: { __typename: "Clinic"; id?: string | null; name?: string | null } | null
    } | null> | null
  } | null
}

export type CollectActivityMutationVariables = Types.Exact<{
  activityId: Types.Scalars["String"]
}>

export type CollectActivityMutation = {
  collectActivity?: { __typename: "CollectActivityPayload"; activityId?: string | null } | null
}

export type RemoveCollectedActivityMutationVariables = Types.Exact<{
  activityId: Types.Scalars["String"]
}>

export type RemoveCollectedActivityMutation = {
  removeCollectedActivity?: {
    __typename: "RemoveCollectedActivityPayload"
    userId?: string | null
    activityId?: string | null
  } | null
}

export const GetCollectedActivitiesDocument = gql`
  query GetCollectedActivities {
    me {
      userCollectedActivities {
        id
        subject
        content
        createdAt
        clinic {
          id
          name
        }
      }
    }
  }
`

/**
 * __useGetCollectedActivitiesQuery__
 *
 * To run a query within a React component, call `useGetCollectedActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectedActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectedActivitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCollectedActivitiesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCollectedActivitiesQuery,
    GetCollectedActivitiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCollectedActivitiesQuery, GetCollectedActivitiesQueryVariables>(
    GetCollectedActivitiesDocument,
    options,
  )
}
export function useGetCollectedActivitiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCollectedActivitiesQuery,
    GetCollectedActivitiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCollectedActivitiesQuery, GetCollectedActivitiesQueryVariables>(
    GetCollectedActivitiesDocument,
    options,
  )
}
export type GetCollectedActivitiesQueryHookResult = ReturnType<
  typeof useGetCollectedActivitiesQuery
>
export type GetCollectedActivitiesLazyQueryHookResult = ReturnType<
  typeof useGetCollectedActivitiesLazyQuery
>
export type GetCollectedActivitiesQueryResult = Apollo.QueryResult<
  GetCollectedActivitiesQuery,
  GetCollectedActivitiesQueryVariables
>
export const CollectActivityDocument = gql`
  mutation CollectActivity($activityId: String!) {
    collectActivity(input: { activityId: $activityId }) {
      activityId
    }
  }
`
export type CollectActivityMutationFn = Apollo.MutationFunction<
  CollectActivityMutation,
  CollectActivityMutationVariables
>

/**
 * __useCollectActivityMutation__
 *
 * To run a mutation, you first call `useCollectActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCollectActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [collectActivityMutation, { data, loading, error }] = useCollectActivityMutation({
 *   variables: {
 *      activityId: // value for 'activityId'
 *   },
 * });
 */
export function useCollectActivityMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CollectActivityMutation,
    CollectActivityMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CollectActivityMutation, CollectActivityMutationVariables>(
    CollectActivityDocument,
    options,
  )
}
export type CollectActivityMutationHookResult = ReturnType<typeof useCollectActivityMutation>
export type CollectActivityMutationResult = Apollo.MutationResult<CollectActivityMutation>
export type CollectActivityMutationOptions = Apollo.BaseMutationOptions<
  CollectActivityMutation,
  CollectActivityMutationVariables
>
export const RemoveCollectedActivityDocument = gql`
  mutation RemoveCollectedActivity($activityId: String!) {
    removeCollectedActivity(input: { activityId: $activityId }) {
      userId
      activityId
    }
  }
`
export type RemoveCollectedActivityMutationFn = Apollo.MutationFunction<
  RemoveCollectedActivityMutation,
  RemoveCollectedActivityMutationVariables
>

/**
 * __useRemoveCollectedActivityMutation__
 *
 * To run a mutation, you first call `useRemoveCollectedActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCollectedActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCollectedActivityMutation, { data, loading, error }] = useRemoveCollectedActivityMutation({
 *   variables: {
 *      activityId: // value for 'activityId'
 *   },
 * });
 */
export function useRemoveCollectedActivityMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveCollectedActivityMutation,
    RemoveCollectedActivityMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    RemoveCollectedActivityMutation,
    RemoveCollectedActivityMutationVariables
  >(RemoveCollectedActivityDocument, options)
}
export type RemoveCollectedActivityMutationHookResult = ReturnType<
  typeof useRemoveCollectedActivityMutation
>
export type RemoveCollectedActivityMutationResult =
  Apollo.MutationResult<RemoveCollectedActivityMutation>
export type RemoveCollectedActivityMutationOptions = Apollo.BaseMutationOptions<
  RemoveCollectedActivityMutation,
  RemoveCollectedActivityMutationVariables
>
