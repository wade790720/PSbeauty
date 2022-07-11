import * as Types from "../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetAdImagesQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetAdImagesQuery = {
  adImages: {
    __typename: "AdImagesConnection"
    pageInfo: {
      __typename: "PageInfo"
      hasNextPage: boolean
      hasPreviousPage: boolean
      startCursor: string | null
      endCursor: string | null
    }
    edges: Array<{
      __typename: "AdImagesEdge"
      cursor: string
      node: {
        __typename: "AdImage"
        id: string | null
        image: string | null
        sort: number
        usageType: string | null
        redirectType: string | null
        targetId: string | null
        status: boolean
      } | null
    }> | null
  } | null
}

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
        consultReplyCount: any
        caseCount: any
        county: string | null
        town: string | null
        name: string | null
        id: string | null
      } | null
    }> | null
  } | null
}

export const GetAdImagesDocument = gql`
  query GetAdImages {
    adImages(
      where: { and: [{ usageType: { eq: "診所頁輪播" } }, { status: { eq: true } }] }
      order: { id: DESC }
      first: 5
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
          image
          sort
          usageType
          redirectType
          targetId
          status
        }
      }
    }
  }
`

/**
 * __useGetAdImagesQuery__
 *
 * To run a query within a React component, call `useGetAdImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdImagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdImagesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAdImagesQuery, GetAdImagesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAdImagesQuery, GetAdImagesQueryVariables>(GetAdImagesDocument, options)
}
export function useGetAdImagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAdImagesQuery, GetAdImagesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAdImagesQuery, GetAdImagesQueryVariables>(
    GetAdImagesDocument,
    options,
  )
}
export type GetAdImagesQueryHookResult = ReturnType<typeof useGetAdImagesQuery>
export type GetAdImagesLazyQueryHookResult = ReturnType<typeof useGetAdImagesLazyQuery>
export type GetAdImagesQueryResult = Apollo.QueryResult<GetAdImagesQuery, GetAdImagesQueryVariables>
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
