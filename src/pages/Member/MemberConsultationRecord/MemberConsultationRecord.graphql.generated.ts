import * as Types from "../../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetMeQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetMeQuery = {
  me?: {
    __typename: "User"
    consults?: Array<{
      __typename: "ConsultExt"
      id?: string | null
      images?: Array<string | null> | null
      days: number
      oneOnOne: boolean
      consultAt: number
      subject?: string | null
      content?: string | null
      enable: boolean
      categories?: Array<{
        __typename: "Category"
        name?: string | null
        id?: string | null
      } | null> | null
    } | null> | null
  } | null
}

export type EnableConsultMutationVariables = Types.Exact<{
  id: Types.Scalars["String"]
  enable: Types.Scalars["Boolean"]
}>

export type EnableConsultMutation = {
  enableConsult?: { __typename: "EnableConsultPayload"; id?: string | null; enable: boolean } | null
}

export const GetMeDocument = gql`
  query GetMe {
    me {
      consults {
        id
        images
        days
        oneOnOne
        consultAt
        subject
        content
        enable
        categories {
          name
          id
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
export const EnableConsultDocument = gql`
  mutation EnableConsult($id: String!, $enable: Boolean!) {
    enableConsult(input: { id: $id, enable: $enable }) {
      id
      enable
    }
  }
`
export type EnableConsultMutationFn = Apollo.MutationFunction<
  EnableConsultMutation,
  EnableConsultMutationVariables
>

/**
 * __useEnableConsultMutation__
 *
 * To run a mutation, you first call `useEnableConsultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableConsultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableConsultMutation, { data, loading, error }] = useEnableConsultMutation({
 *   variables: {
 *      id: // value for 'id'
 *      enable: // value for 'enable'
 *   },
 * });
 */
export function useEnableConsultMutation(
  baseOptions?: Apollo.MutationHookOptions<EnableConsultMutation, EnableConsultMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<EnableConsultMutation, EnableConsultMutationVariables>(
    EnableConsultDocument,
    options,
  )
}
export type EnableConsultMutationHookResult = ReturnType<typeof useEnableConsultMutation>
export type EnableConsultMutationResult = Apollo.MutationResult<EnableConsultMutation>
export type EnableConsultMutationOptions = Apollo.BaseMutationOptions<
  EnableConsultMutation,
  EnableConsultMutationVariables
>
