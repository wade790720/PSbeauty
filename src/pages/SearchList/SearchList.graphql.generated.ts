import * as Types from "../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetSearchListQueryVariables = Types.Exact<{
  contains: Types.Scalars["String"]
}>

export type GetSearchListQuery = {
  cases: {
    __typename: "CasesConnection"
    pageInfo: {
      __typename: "PageInfo"
      hasNextPage: boolean
      hasPreviousPage: boolean
      startCursor: string | null
      endCursor: string | null
    }
    edges: Array<{
      __typename: "CasesEdge"
      cursor: string
      node: {
        __typename: "ClinicCase"
        id: string | null
        title: string | null
        beforeImage: string | null
        beforeImageText: string | null
        afterImage: string | null
        afterImageText: string | null
        clinic: { __typename: "Clinic"; id: string | null } | null
      } | null
    }> | null
  } | null
}

export type GetPopularKeywordsQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetPopularKeywordsQuery = {
  popularKeywords: { __typename: "PopularKeywords"; keywords: Array<string | null> | null } | null
}

export const GetSearchListDocument = gql`
  query getSearchList($contains: String!) {
    cases(
      where: {
        or: [
          { beforeImageText: { contains: $contains } }
          { afterImageText: { contains: $contains } }
        ]
      }
      first: 10
      order: { id: DESC }
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          title
          beforeImage
          beforeImageText
          afterImage
          afterImageText
          clinic {
            id
          }
        }
      }
    }
  }
`

/**
 * __useGetSearchListQuery__
 *
 * To run a query within a React component, call `useGetSearchListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSearchListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSearchListQuery({
 *   variables: {
 *      contains: // value for 'contains'
 *   },
 * });
 */
export function useGetSearchListQuery(
  baseOptions: Apollo.QueryHookOptions<GetSearchListQuery, GetSearchListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetSearchListQuery, GetSearchListQueryVariables>(
    GetSearchListDocument,
    options,
  )
}
export function useGetSearchListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetSearchListQuery, GetSearchListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetSearchListQuery, GetSearchListQueryVariables>(
    GetSearchListDocument,
    options,
  )
}
export type GetSearchListQueryHookResult = ReturnType<typeof useGetSearchListQuery>
export type GetSearchListLazyQueryHookResult = ReturnType<typeof useGetSearchListLazyQuery>
export type GetSearchListQueryResult = Apollo.QueryResult<
  GetSearchListQuery,
  GetSearchListQueryVariables
>
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
