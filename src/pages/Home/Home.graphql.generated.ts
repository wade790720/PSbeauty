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
        title: string | null
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

export type GetCasesQueryVariables = Types.Exact<{
  contains: Types.InputMaybe<Types.Scalars["String"]>
}>

export type GetCasesQuery = {
  cases: {
    __typename: "CasesConnection"
    totalCount: number
    pageInfo: {
      __typename: "PageInfo"
      hasNextPage: boolean
      hasPreviousPage: boolean
      startCursor: string | null
      endCursor: string | null
    }
    nodes: Array<{
      __typename: "ClinicCase"
      id: string | null
      description: string | null
      title: string | null
      beforeImage: string | null
      afterImage: string | null
      collectedCount: any
      categories: Array<{
        __typename: "Category"
        id: string | null
        name: string | null
      } | null> | null
      clinic: {
        __typename: "Clinic"
        id: string | null
        name: string | null
        phone: string | null
      } | null
    } | null> | null
  } | null
}

export type GetAdCardsQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetAdCardsQuery = {
  adCards: {
    __typename: "AdCardsConnection"
    nodes: Array<{
      __typename: "AdCard"
      id: string | null
      image: string | null
      title: string | null
      content: string | null
    } | null> | null
  } | null
}

export const GetAdImagesDocument = gql`
  query GetAdImages {
    adImages(
      where: { and: [{ usageType: { eq: "首頁輪播" } }, { status: { eq: true } }] }
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
          title
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
export const GetCasesDocument = gql`
  query GetCases($contains: String) {
    cases(where: { title: { contains: $contains } }, first: 10, order: { id: DESC }) {
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
        beforeImage
        afterImage
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
 *      contains: // value for 'contains'
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
export const GetAdCardsDocument = gql`
  query GetAdCards {
    adCards(order: { id: DESC }) {
      nodes {
        id
        image
        title
        content
      }
    }
  }
`

/**
 * __useGetAdCardsQuery__
 *
 * To run a query within a React component, call `useGetAdCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdCardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdCardsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAdCardsQuery, GetAdCardsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAdCardsQuery, GetAdCardsQueryVariables>(GetAdCardsDocument, options)
}
export function useGetAdCardsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAdCardsQuery, GetAdCardsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAdCardsQuery, GetAdCardsQueryVariables>(GetAdCardsDocument, options)
}
export type GetAdCardsQueryHookResult = ReturnType<typeof useGetAdCardsQuery>
export type GetAdCardsLazyQueryHookResult = ReturnType<typeof useGetAdCardsLazyQuery>
export type GetAdCardsQueryResult = Apollo.QueryResult<GetAdCardsQuery, GetAdCardsQueryVariables>
