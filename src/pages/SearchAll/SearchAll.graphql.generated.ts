import * as Types from "../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetSearchListAllQueryVariables = Types.Exact<{
  after?: Types.InputMaybe<Types.Scalars["String"]>
}>

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

export type GetSpecifyCasesQueryVariables = Types.Exact<{
  after?: Types.InputMaybe<Types.Scalars["String"]>
  searchKeys?: Types.InputMaybe<
    Array<Types.StringOperationFilterInput> | Types.StringOperationFilterInput
  >
}>

export type GetSpecifyCasesQuery = {
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
  query getSearchListAll($after: String) {
    cases(first: 10, order: { id: DESC }, after: $after) {
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
 *      after: // value for 'after'
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
export const GetSpecifyCasesDocument = gql`
  query getSpecifyCases($after: String, $searchKeys: [StringOperationFilterInput!]) {
    cases(
      first: 10
      order: { id: DESC }
      after: $after
      where: { categories: { some: { or: $searchKeys } } }
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
 * __useGetSpecifyCasesQuery__
 *
 * To run a query within a React component, call `useGetSpecifyCasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpecifyCasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpecifyCasesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      searchKeys: // value for 'searchKeys'
 *   },
 * });
 */
export function useGetSpecifyCasesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetSpecifyCasesQuery, GetSpecifyCasesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetSpecifyCasesQuery, GetSpecifyCasesQueryVariables>(
    GetSpecifyCasesDocument,
    options,
  )
}
export function useGetSpecifyCasesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetSpecifyCasesQuery, GetSpecifyCasesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetSpecifyCasesQuery, GetSpecifyCasesQueryVariables>(
    GetSpecifyCasesDocument,
    options,
  )
}
export type GetSpecifyCasesQueryHookResult = ReturnType<typeof useGetSpecifyCasesQuery>
export type GetSpecifyCasesLazyQueryHookResult = ReturnType<typeof useGetSpecifyCasesLazyQuery>
export type GetSpecifyCasesQueryResult = Apollo.QueryResult<
  GetSpecifyCasesQuery,
  GetSpecifyCasesQueryVariables
>
