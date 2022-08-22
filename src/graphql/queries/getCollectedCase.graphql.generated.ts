import * as Types from "../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetCollectedCaseQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetCollectedCaseQuery = {
  me?: {
    __typename: "User"
    userCollectedCases?: Array<{ __typename: "ClinicCase"; id?: string | null } | null> | null
  } | null
}

export const GetCollectedCaseDocument = gql`
  query GetCollectedCase {
    me {
      userCollectedCases {
        id
      }
    }
  }
`

/**
 * __useGetCollectedCaseQuery__
 *
 * To run a query within a React component, call `useGetCollectedCaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectedCaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectedCaseQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCollectedCaseQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCollectedCaseQuery, GetCollectedCaseQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCollectedCaseQuery, GetCollectedCaseQueryVariables>(
    GetCollectedCaseDocument,
    options,
  )
}
export function useGetCollectedCaseLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCollectedCaseQuery, GetCollectedCaseQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCollectedCaseQuery, GetCollectedCaseQueryVariables>(
    GetCollectedCaseDocument,
    options,
  )
}
export type GetCollectedCaseQueryHookResult = ReturnType<typeof useGetCollectedCaseQuery>
export type GetCollectedCaseLazyQueryHookResult = ReturnType<typeof useGetCollectedCaseLazyQuery>
export type GetCollectedCaseQueryResult = Apollo.QueryResult<
  GetCollectedCaseQuery,
  GetCollectedCaseQueryVariables
>
