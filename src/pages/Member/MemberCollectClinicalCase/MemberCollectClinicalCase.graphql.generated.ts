import * as Types from "../../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetMeQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetMeQuery = {
  me: {
    __typename: "User"
    userCollectedCases: Array<{
      __typename: "ClinicCase"
      id: string | null
      title: string | null
      description: string | null
      beforeImage: string | null
      afterImage: string | null
      clinic: { __typename: "Clinic"; id: string | null; name: string | null } | null
      categories: Array<{
        __typename: "Category"
        id: string | null
        name: string | null
      } | null> | null
    } | null> | null
  } | null
}

export const GetMeDocument = gql`
  query GetMe {
    me {
      userCollectedCases {
        id
        title
        description
        beforeImage
        afterImage
        clinic {
          id
          name
        }
        categories {
          id
          name
        }
      }
    }
  }
`

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options)
}
export function useGetMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options)
}
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>
