import * as Types from "../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetAdImagesQueryVariables = Types.Exact<{
  first: Types.InputMaybe<Types.Scalars["Int"]>
  orderId: Types.InputMaybe<Types.SortEnumType>
  where: Types.InputMaybe<Types.Scalars["String"]>
}>

export type GetAdImagesQuery = {
  adImages: {
    __typename: "AdImagesConnection"
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
        clinicId: string | null
        status: boolean
        title: string | null
      } | null
    }> | null
  } | null
}

export const GetAdImagesDocument = gql`
  query GetAdImages($first: Int, $orderId: SortEnumType, $where: String) {
    adImages(where: { usageType: { eq: $where } }, order: { id: $orderId }, first: $first) {
      edges {
        cursor
        node {
          id
          image
          sort
          usageType
          redirectType
          targetId
          clinicId
          status
          title
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
 *      first: // value for 'first'
 *      orderId: // value for 'orderId'
 *      where: // value for 'where'
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
