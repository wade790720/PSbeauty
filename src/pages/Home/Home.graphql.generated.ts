import * as Types from "../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetAdCardsQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetAdCardsQuery = {
  adCards?: {
    __typename: "AdCardsConnection"
    nodes?: Array<{
      __typename: "AdCard"
      id?: string | null
      image?: string | null
      title?: string | null
      content?: string | null
    } | null> | null
  } | null
}

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
