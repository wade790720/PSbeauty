import * as Types from "../../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetCaseQueryVariables = Types.Exact<{
  id: Types.Scalars["String"]
}>

export type GetCaseQuery = {
  case: {
    __typename: "ClinicCase"
    id: string | null
    title: string | null
    description: string | null
    beforeImage: string | null
    afterImage: string | null
    categories: Array<{
      __typename: "Category"
      id: string | null
      name: string | null
    } | null> | null
    clinic: { __typename: "Clinic"; id: string | null; name: string | null } | null
  } | null
}

export type GetCollectItemsQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetCollectItemsQuery = {
  me: {
    __typename: "User"
    userCollectedCases: Array<{ __typename: "ClinicCase"; id: string | null } | null> | null
  } | null
}

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

export const GetCaseDocument = gql`
  query GetCase($id: String!) {
    case(id: $id) {
      id
      title
      description
      beforeImage
      afterImage
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

/**
 * __useGetCaseQuery__
 *
 * To run a query within a React component, call `useGetCaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCaseQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCaseQuery(
  baseOptions: Apollo.QueryHookOptions<GetCaseQuery, GetCaseQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCaseQuery, GetCaseQueryVariables>(GetCaseDocument, options)
}
export function useGetCaseLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCaseQuery, GetCaseQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCaseQuery, GetCaseQueryVariables>(GetCaseDocument, options)
}
export type GetCaseQueryHookResult = ReturnType<typeof useGetCaseQuery>
export type GetCaseLazyQueryHookResult = ReturnType<typeof useGetCaseLazyQuery>
export type GetCaseQueryResult = Apollo.QueryResult<GetCaseQuery, GetCaseQueryVariables>
export const GetCollectItemsDocument = gql`
  query GetCollectItems {
    me {
      userCollectedCases {
        id
      }
    }
  }
`

/**
 * __useGetCollectItemsQuery__
 *
 * To run a query within a React component, call `useGetCollectItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCollectItemsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCollectItemsQuery, GetCollectItemsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCollectItemsQuery, GetCollectItemsQueryVariables>(
    GetCollectItemsDocument,
    options,
  )
}
export function useGetCollectItemsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCollectItemsQuery, GetCollectItemsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCollectItemsQuery, GetCollectItemsQueryVariables>(
    GetCollectItemsDocument,
    options,
  )
}
export type GetCollectItemsQueryHookResult = ReturnType<typeof useGetCollectItemsQuery>
export type GetCollectItemsLazyQueryHookResult = ReturnType<typeof useGetCollectItemsLazyQuery>
export type GetCollectItemsQueryResult = Apollo.QueryResult<
  GetCollectItemsQuery,
  GetCollectItemsQueryVariables
>
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
