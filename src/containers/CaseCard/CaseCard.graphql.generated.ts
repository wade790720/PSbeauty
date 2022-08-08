import * as Types from "../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type CollectCaseMutationVariables = Types.Exact<{
  caseId: Types.Scalars["String"]
}>

export type CollectCaseMutation = {
  collectCase: {
    __typename: "CollectCasePayload"
    userId: string | null
    collectedCount: number
  } | null
}

export type RemoveCollectedCaseMutationVariables = Types.Exact<{
  caseId: Types.Scalars["String"]
}>

export type RemoveCollectedCaseMutation = {
  removeCollectedCase: {
    __typename: "RemoveCollectedCasePayload"
    userId: string | null
    collectedCount: number
  } | null
}

export const CollectCaseDocument = gql`
  mutation CollectCase($caseId: String!) {
    collectCase(input: { caseId: $caseId }) {
      userId
      collectedCount
    }
  }
`
export type CollectCaseMutationFn = Apollo.MutationFunction<
  CollectCaseMutation,
  CollectCaseMutationVariables
>

/**
 * __useCollectCaseMutation__
 *
 * To run a mutation, you first call `useCollectCaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCollectCaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [collectCaseMutation, { data, loading, error }] = useCollectCaseMutation({
 *   variables: {
 *      caseId: // value for 'caseId'
 *   },
 * });
 */
export function useCollectCaseMutation(
  baseOptions?: Apollo.MutationHookOptions<CollectCaseMutation, CollectCaseMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CollectCaseMutation, CollectCaseMutationVariables>(
    CollectCaseDocument,
    options,
  )
}
export type CollectCaseMutationHookResult = ReturnType<typeof useCollectCaseMutation>
export type CollectCaseMutationResult = Apollo.MutationResult<CollectCaseMutation>
export type CollectCaseMutationOptions = Apollo.BaseMutationOptions<
  CollectCaseMutation,
  CollectCaseMutationVariables
>
export const RemoveCollectedCaseDocument = gql`
  mutation RemoveCollectedCase($caseId: String!) {
    removeCollectedCase(input: { caseId: $caseId }) {
      userId
      collectedCount
    }
  }
`
export type RemoveCollectedCaseMutationFn = Apollo.MutationFunction<
  RemoveCollectedCaseMutation,
  RemoveCollectedCaseMutationVariables
>

/**
 * __useRemoveCollectedCaseMutation__
 *
 * To run a mutation, you first call `useRemoveCollectedCaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCollectedCaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCollectedCaseMutation, { data, loading, error }] = useRemoveCollectedCaseMutation({
 *   variables: {
 *      caseId: // value for 'caseId'
 *   },
 * });
 */
export function useRemoveCollectedCaseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveCollectedCaseMutation,
    RemoveCollectedCaseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RemoveCollectedCaseMutation, RemoveCollectedCaseMutationVariables>(
    RemoveCollectedCaseDocument,
    options,
  )
}
export type RemoveCollectedCaseMutationHookResult = ReturnType<
  typeof useRemoveCollectedCaseMutation
>
export type RemoveCollectedCaseMutationResult = Apollo.MutationResult<RemoveCollectedCaseMutation>
export type RemoveCollectedCaseMutationOptions = Apollo.BaseMutationOptions<
  RemoveCollectedCaseMutation,
  RemoveCollectedCaseMutationVariables
>
