import * as Types from "../../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetActivitiesQueryVariables = Types.Exact<{
  after?: Types.InputMaybe<Types.Scalars["String"]>
}>

export type GetActivitiesQuery = {
  activities?: {
    __typename: "ActivitiesConnection"
    edges?: Array<{ __typename: "ActivitiesEdge"; cursor: string }> | null
    pageInfo: { __typename: "PageInfo"; hasNextPage: boolean }
    nodes?: Array<{
      __typename: "ClinicActivity"
      id?: string | null
      image?: string | null
      subject?: string | null
      content?: string | null
      clinic?: { __typename: "Clinic"; id?: string | null } | null
    } | null> | null
  } | null
}

export const GetActivitiesDocument = gql`
  query GetActivities($after: String) {
    activities(first: 10, order: { id: DESC }, after: $after) {
      edges {
        cursor
      }
      pageInfo {
        hasNextPage
      }
      nodes {
        id
        image
        subject
        content
        clinic {
          id
        }
      }
    }
  }
`

/**
 * __useGetActivitiesQuery__
 *
 * To run a query within a React component, call `useGetActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActivitiesQuery({
 *   variables: {
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetActivitiesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetActivitiesQuery, GetActivitiesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetActivitiesQuery, GetActivitiesQueryVariables>(
    GetActivitiesDocument,
    options,
  )
}
export function useGetActivitiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetActivitiesQuery, GetActivitiesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetActivitiesQuery, GetActivitiesQueryVariables>(
    GetActivitiesDocument,
    options,
  )
}
export type GetActivitiesQueryHookResult = ReturnType<typeof useGetActivitiesQuery>
export type GetActivitiesLazyQueryHookResult = ReturnType<typeof useGetActivitiesLazyQuery>
export type GetActivitiesQueryResult = Apollo.QueryResult<
  GetActivitiesQuery,
  GetActivitiesQueryVariables
>
