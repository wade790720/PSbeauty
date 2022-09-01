import * as Types from "../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetCasesQueryVariables = Types.Exact<{
  after?: Types.InputMaybe<Types.Scalars["String"]>
}>

export type GetCasesQuery = {
  cases?: {
    __typename: "CasesConnection"
    totalCount: number
    pageInfo: {
      __typename: "PageInfo"
      hasNextPage: boolean
      hasPreviousPage: boolean
      startCursor?: string | null
      endCursor?: string | null
    }
    nodes?: Array<{
      __typename: "ClinicCase"
      id?: string | null
      description?: string | null
      title?: string | null
      image?: string | null
      collectedCount: number
      categories?: Array<{
        __typename: "Category"
        id?: string | null
        name?: string | null
      } | null> | null
      clinic?: {
        __typename: "Clinic"
        id?: string | null
        name?: string | null
        phone?: string | null
      } | null
    } | null> | null
    edges?: Array<{ __typename: "CasesEdge"; cursor: string }> | null
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
    totalCount: number
    pageInfo: {
      __typename: "PageInfo"
      hasNextPage: boolean
      hasPreviousPage: boolean
      startCursor?: string | null
      endCursor?: string | null
    }
    nodes?: Array<{
      __typename: "ClinicCase"
      id?: string | null
      description?: string | null
      title?: string | null
      image?: string | null
      collectedCount: number
      categories?: Array<{
        __typename: "Category"
        id?: string | null
        name?: string | null
      } | null> | null
      clinic?: {
        __typename: "Clinic"
        id?: string | null
        name?: string | null
        phone?: string | null
      } | null
    } | null> | null
    edges?: Array<{ __typename: "CasesEdge"; cursor: string }> | null
  } | null
}

export const GetCasesDocument = gql`
  query GetCases($after: String) {
    cases(first: 10, order: { id: DESC }, after: $after) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
      nodes {
        id
        description
        title
        image
        collectedCount
        categories {
          id
          name
        }
        clinic {
          id
          name
          phone
        }
      }
      edges {
        cursor
      }
    }
  }
`

/**
 * __useGetCasesQuery__
 *
 * To run a query within a React component, call `useGetCasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCasesQuery({
 *   variables: {
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetCasesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCasesQuery, GetCasesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCasesQuery, GetCasesQueryVariables>(GetCasesDocument, options)
}
export function useGetCasesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCasesQuery, GetCasesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCasesQuery, GetCasesQueryVariables>(GetCasesDocument, options)
}
export type GetCasesQueryHookResult = ReturnType<typeof useGetCasesQuery>
export type GetCasesLazyQueryHookResult = ReturnType<typeof useGetCasesLazyQuery>
export type GetCasesQueryResult = Apollo.QueryResult<GetCasesQuery, GetCasesQueryVariables>
export const GetSpecifyCasesDocument = gql`
  query GetSpecifyCases($after: String, $searchKeys: [StringOperationFilterInput!]) {
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
      totalCount
      nodes {
        id
        description
        title
        image
        collectedCount
        categories {
          id
          name
        }
        clinic {
          id
          name
          phone
        }
      }
      edges {
        cursor
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
