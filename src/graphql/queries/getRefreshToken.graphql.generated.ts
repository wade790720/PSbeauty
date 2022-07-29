import * as Types from "../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetRefreshTokenQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetRefreshTokenQuery = {
  refreshToken: {
    __typename: "CustomTokenPayload"
    uid: string | null
    customToken: string | null
  } | null
}

export const GetRefreshTokenDocument = gql`
  query GetRefreshToken {
    refreshToken {
      uid
      customToken
    }
  }
`

/**
 * __useGetRefreshTokenQuery__
 *
 * To run a query within a React component, call `useGetRefreshTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRefreshTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRefreshTokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRefreshTokenQuery(
  baseOptions?: Apollo.QueryHookOptions<GetRefreshTokenQuery, GetRefreshTokenQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetRefreshTokenQuery, GetRefreshTokenQueryVariables>(
    GetRefreshTokenDocument,
    options,
  )
}
export function useGetRefreshTokenLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetRefreshTokenQuery, GetRefreshTokenQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetRefreshTokenQuery, GetRefreshTokenQueryVariables>(
    GetRefreshTokenDocument,
    options,
  )
}
export type GetRefreshTokenQueryHookResult = ReturnType<typeof useGetRefreshTokenQuery>
export type GetRefreshTokenLazyQueryHookResult = ReturnType<typeof useGetRefreshTokenLazyQuery>
export type GetRefreshTokenQueryResult = Apollo.QueryResult<
  GetRefreshTokenQuery,
  GetRefreshTokenQueryVariables
>
