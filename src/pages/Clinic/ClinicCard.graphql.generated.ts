import * as Types from "../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetClinicsQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetClinicsQuery = {
  clinics: {
    __typename: "ClinicsConnection"
    totalCount: number
    pageInfo: {
      __typename: "PageInfo"
      hasNextPage: boolean
      hasPreviousPage: boolean
      startCursor: string | null
      endCursor: string | null
    }
    edges: Array<{
      __typename: "ClinicsEdge"
      cursor: string
      node: {
        __typename: "Clinic"
        consultReplyCount: number
        caseCount: number
        county: string | null
        town: string | null
        name: string | null
        id: string | null
      } | null
    }> | null
  } | null
}

export type GetClinicsSearchQueryVariables = Types.Exact<{
  county: Types.InputMaybe<
    Array<Types.InputMaybe<Types.Scalars["String"]>> | Types.InputMaybe<Types.Scalars["String"]>
  >
  town: Types.InputMaybe<
    Array<Types.InputMaybe<Types.Scalars["String"]>> | Types.InputMaybe<Types.Scalars["String"]>
  >
}>

export type GetClinicsSearchQuery = {
  clinics: {
    __typename: "ClinicsConnection"
    totalCount: number
    pageInfo: {
      __typename: "PageInfo"
      hasNextPage: boolean
      hasPreviousPage: boolean
      startCursor: string | null
      endCursor: string | null
    }
    edges: Array<{
      __typename: "ClinicsEdge"
      cursor: string
      node: {
        __typename: "Clinic"
        consultReplyCount: number
        caseCount: number
        county: string | null
        town: string | null
        name: string | null
        id: string | null
      } | null
    }> | null
  } | null
}

export const GetClinicsDocument = gql`
  query GetClinics {
    clinics(order: { consultReplyCount: DESC }, first: 10, after: "MA==") {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          consultReplyCount
          caseCount
          county
          town
          name
          id
        }
      }
    }
  }
`

/**
 * __useGetClinicsQuery__
 *
 * To run a query within a React component, call `useGetClinicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClinicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClinicsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetClinicsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetClinicsQuery, GetClinicsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetClinicsQuery, GetClinicsQueryVariables>(GetClinicsDocument, options)
}
export function useGetClinicsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetClinicsQuery, GetClinicsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetClinicsQuery, GetClinicsQueryVariables>(GetClinicsDocument, options)
}
export type GetClinicsQueryHookResult = ReturnType<typeof useGetClinicsQuery>
export type GetClinicsLazyQueryHookResult = ReturnType<typeof useGetClinicsLazyQuery>
export type GetClinicsQueryResult = Apollo.QueryResult<GetClinicsQuery, GetClinicsQueryVariables>
export const GetClinicsSearchDocument = gql`
  query GetClinicsSearch($county: [String], $town: [String]) {
    clinics(
      where: { county: { in: $county }, town: { in: $town } }
      order: { consultReplyCount: DESC }
      first: 10
      after: "MA=="
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          consultReplyCount
          caseCount
          county
          town
          name
          id
        }
      }
    }
  }
`

/**
 * __useGetClinicsSearchQuery__
 *
 * To run a query within a React component, call `useGetClinicsSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClinicsSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClinicsSearchQuery({
 *   variables: {
 *      county: // value for 'county'
 *      town: // value for 'town'
 *   },
 * });
 */
export function useGetClinicsSearchQuery(
  baseOptions?: Apollo.QueryHookOptions<GetClinicsSearchQuery, GetClinicsSearchQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetClinicsSearchQuery, GetClinicsSearchQueryVariables>(
    GetClinicsSearchDocument,
    options,
  )
}
export function useGetClinicsSearchLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetClinicsSearchQuery, GetClinicsSearchQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetClinicsSearchQuery, GetClinicsSearchQueryVariables>(
    GetClinicsSearchDocument,
    options,
  )
}
export type GetClinicsSearchQueryHookResult = ReturnType<typeof useGetClinicsSearchQuery>
export type GetClinicsSearchLazyQueryHookResult = ReturnType<typeof useGetClinicsSearchLazyQuery>
export type GetClinicsSearchQueryResult = Apollo.QueryResult<
  GetClinicsSearchQuery,
  GetClinicsSearchQueryVariables
>
