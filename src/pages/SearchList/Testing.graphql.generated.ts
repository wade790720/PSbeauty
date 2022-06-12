import * as Types from "../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetClinicsQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetClinicsQuery = {
  clinic: { __typename: "Clinic"; id: string | null; name: string | null } | null
}

export const GetClinicsDocument = gql`
  query getClinics {
    clinic {
      id
      name
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
