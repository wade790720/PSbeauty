import * as Types from "../../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetDoctorInboxQueryVariables = Types.Exact<{
  input: Types.InputMaybe<Types.Scalars["String"]>
}>

export type GetDoctorInboxQuery = {
  clinicInbox: {
    __typename: "ClinicInboxConnection"
    pageInfo: {
      __typename: "PageInfo"
      hasNextPage: boolean
      hasPreviousPage: boolean
      startCursor: string | null
      endCursor: string | null
    }
    edges: Array<{
      __typename: "ClinicInboxEdge"
      cursor: string
      node: {
        __typename: "ClinicInbox"
        id: string | null
        readAt: number
        user: { __typename: "User"; id: string | null; name: string | null } | null
        topic: {
          __typename: "ClinicConsultTopic"
          id: string | null
          consult: {
            __typename: "Consult"
            id: string | null
            subject: string | null
            content: string | null
          } | null
        } | null
        reply: {
          __typename: "ConsultTopicReply"
          id: string | null
          createdAt: number
          contentType: string | null
          content: string | null
          readAt: number
        } | null
      } | null
    }> | null
  } | null
}

export type ReadClinicInboxMutationVariables = Types.Exact<{
  input: Types.ReadClinicInboxInput
}>

export type ReadClinicInboxMutation = {
  readClinicInbox: { __typename: "ReadClinicInboxPayload"; id: string | null } | null
}

export const GetDoctorInboxDocument = gql`
  query GetDoctorInbox($input: String) {
    clinicInbox(first: 15, after: $input, order: { id: DESC }) {
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
          readAt
          user {
            id
            name
          }
          topic {
            id
            consult {
              id
              subject
              content
            }
          }
          reply {
            id
            createdAt
            contentType
            content
            readAt
          }
        }
      }
    }
  }
`

/**
 * __useGetDoctorInboxQuery__
 *
 * To run a query within a React component, call `useGetDoctorInboxQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDoctorInboxQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDoctorInboxQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetDoctorInboxQuery(
  baseOptions?: Apollo.QueryHookOptions<GetDoctorInboxQuery, GetDoctorInboxQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetDoctorInboxQuery, GetDoctorInboxQueryVariables>(
    GetDoctorInboxDocument,
    options,
  )
}
export function useGetDoctorInboxLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetDoctorInboxQuery, GetDoctorInboxQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetDoctorInboxQuery, GetDoctorInboxQueryVariables>(
    GetDoctorInboxDocument,
    options,
  )
}
export type GetDoctorInboxQueryHookResult = ReturnType<typeof useGetDoctorInboxQuery>
export type GetDoctorInboxLazyQueryHookResult = ReturnType<typeof useGetDoctorInboxLazyQuery>
export type GetDoctorInboxQueryResult = Apollo.QueryResult<
  GetDoctorInboxQuery,
  GetDoctorInboxQueryVariables
>
export const ReadClinicInboxDocument = gql`
  mutation readClinicInbox($input: ReadClinicInboxInput!) {
    readClinicInbox(input: $input) {
      id
    }
  }
`
export type ReadClinicInboxMutationFn = Apollo.MutationFunction<
  ReadClinicInboxMutation,
  ReadClinicInboxMutationVariables
>

/**
 * __useReadClinicInboxMutation__
 *
 * To run a mutation, you first call `useReadClinicInboxMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReadClinicInboxMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [readClinicInboxMutation, { data, loading, error }] = useReadClinicInboxMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReadClinicInboxMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ReadClinicInboxMutation,
    ReadClinicInboxMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ReadClinicInboxMutation, ReadClinicInboxMutationVariables>(
    ReadClinicInboxDocument,
    options,
  )
}
export type ReadClinicInboxMutationHookResult = ReturnType<typeof useReadClinicInboxMutation>
export type ReadClinicInboxMutationResult = Apollo.MutationResult<ReadClinicInboxMutation>
export type ReadClinicInboxMutationOptions = Apollo.BaseMutationOptions<
  ReadClinicInboxMutation,
  ReadClinicInboxMutationVariables
>
