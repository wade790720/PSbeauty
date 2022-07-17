import * as Types from "../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetTopCategoriesQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetTopCategoriesQuery = {
  topCategories: Array<{
    __typename: "TopCategory"
    name: string | null
    secondCategories: Array<{
      __typename: "SecondCategory"
      name: string | null
      categories: Array<{
        __typename: "Category"
        id: string | null
        name: string | null
      } | null> | null
    } | null> | null
  } | null> | null
}

export const GetTopCategoriesDocument = gql`
  query GetTopCategories {
    topCategories {
      name
      secondCategories {
        name
        categories {
          id
          name
        }
      }
    }
  }
`

/**
 * __useGetTopCategoriesQuery__
 *
 * To run a query within a React component, call `useGetTopCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTopCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTopCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetTopCategoriesQuery, GetTopCategoriesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetTopCategoriesQuery, GetTopCategoriesQueryVariables>(
    GetTopCategoriesDocument,
    options,
  )
}
export function useGetTopCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTopCategoriesQuery, GetTopCategoriesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetTopCategoriesQuery, GetTopCategoriesQueryVariables>(
    GetTopCategoriesDocument,
    options,
  )
}
export type GetTopCategoriesQueryHookResult = ReturnType<typeof useGetTopCategoriesQuery>
export type GetTopCategoriesLazyQueryHookResult = ReturnType<typeof useGetTopCategoriesLazyQuery>
export type GetTopCategoriesQueryResult = Apollo.QueryResult<
  GetTopCategoriesQuery,
  GetTopCategoriesQueryVariables
>
