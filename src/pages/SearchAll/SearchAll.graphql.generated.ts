import * as Types from "../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetSearchListAllQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetSearchListAllQuery = {
  cases?: {
    __typename: "CasesConnection"
    pageInfo: {
      __typename: "PageInfo"
      hasNextPage: boolean
      hasPreviousPage: boolean
      startCursor?: string | null
      endCursor?: string | null
    }
    edges?: Array<{
      __typename: "CasesEdge"
      cursor: string
      node?: {
        __typename: "ClinicCase"
        id?: string | null
        title?: string | null
        image?: string | null
        imageText?: string | null
        clinic?: { __typename: "Clinic"; id?: string | null } | null
      } | null
    }> | null
  } | null
}

export const GetSearchListAllDocument = gql`
  query getSearchListAll {
    cases(first: 50, order: { id: DESC }) {
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
          image
          imageText
          clinic {
            id
          }
        }
      }
    }
  }
`

/**
 * __useGetSearchListAllQuery__
 *
 * To run a query within a React component, call `useGetSearchListAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSearchListAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSearchListAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSearchListAllQuery(
  baseOptions?: Apollo.QueryHookOptions<GetSearchListAllQuery, GetSearchListAllQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetSearchListAllQuery, GetSearchListAllQueryVariables>(
    GetSearchListAllDocument,
    options,
  )
}
export function useGetSearchListAllLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetSearchListAllQuery, GetSearchListAllQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetSearchListAllQuery, GetSearchListAllQueryVariables>(
    GetSearchListAllDocument,
    options,
  )
}
export type GetSearchListAllQueryHookResult = ReturnType<typeof useGetSearchListAllQuery>
export type GetSearchListAllLazyQueryHookResult = ReturnType<typeof useGetSearchListAllLazyQuery>
export type GetSearchListAllQueryResult = Apollo.QueryResult<
  GetSearchListAllQuery,
  GetSearchListAllQueryVariables
>
