import * as Types from "../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetPopularKeywordsQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetPopularKeywordsQuery = {
  popularKeywords?: { __typename: "PopularKeywords"; keywords?: Array<string | null> | null } | null
}

export const GetPopularKeywordsDocument = gql`
  query getPopularKeywords {
    popularKeywords {
      keywords
    }
  }
`

/**
 * __useGetPopularKeywordsQuery__
 *
 * To run a query within a React component, call `useGetPopularKeywordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPopularKeywordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPopularKeywordsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPopularKeywordsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPopularKeywordsQuery, GetPopularKeywordsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPopularKeywordsQuery, GetPopularKeywordsQueryVariables>(
    GetPopularKeywordsDocument,
    options,
  )
}
export function useGetPopularKeywordsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPopularKeywordsQuery,
    GetPopularKeywordsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPopularKeywordsQuery, GetPopularKeywordsQueryVariables>(
    GetPopularKeywordsDocument,
    options,
  )
}
export type GetPopularKeywordsQueryHookResult = ReturnType<typeof useGetPopularKeywordsQuery>
export type GetPopularKeywordsLazyQueryHookResult = ReturnType<
  typeof useGetPopularKeywordsLazyQuery
>
export type GetPopularKeywordsQueryResult = Apollo.QueryResult<
  GetPopularKeywordsQuery,
  GetPopularKeywordsQueryVariables
>
