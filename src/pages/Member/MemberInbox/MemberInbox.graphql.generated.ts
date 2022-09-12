import * as Types from "../../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type UserInboxesFragment = {
  __typename: "ConsultExt"
  userInboxes?: Array<{
    __typename: "UserInbox"
    id?: string | null
    read: boolean
    readAt: number
    topicId?: string | null
    replies?: Array<{ __typename: "ConsultTopicReply"; content?: string | null } | null> | null
    clinic?: { __typename: "Clinic"; id?: string | null; name?: string | null } | null
  } | null> | null
}

export type GetMemberInboxQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetMemberInboxQuery = {
  me?: {
    __typename: "User"
    consults?: Array<{
      __typename: "ConsultExt"
      id?: string | null
      subject?: string | null
      county?: string | null
      content?: string | null
      days: number
      images?: Array<string | null> | null
      oneOnOne: boolean
      userInboxes?: Array<{
        __typename: "UserInbox"
        id?: string | null
        read: boolean
        readAt: number
        topicId?: string | null
        replies?: Array<{ __typename: "ConsultTopicReply"; content?: string | null } | null> | null
        clinic?: { __typename: "Clinic"; id?: string | null; name?: string | null } | null
      } | null> | null
    } | null> | null
  } | null
}

export const UserInboxesFragmentDoc = gql`
  fragment UserInboxes on ConsultExt {
    userInboxes {
      id
      read
      readAt
      topicId
      replies {
        content
      }
      clinic {
        id
        name
      }
    }
  }
`
export const GetMemberInboxDocument = gql`
  query GetMemberInbox {
    me {
      consults {
        id
        subject
        county
        content
        days
        images
        oneOnOne
        ...UserInboxes
      }
    }
  }
  ${UserInboxesFragmentDoc}
`

/**
 * __useGetMemberInboxQuery__
 *
 * To run a query within a React component, call `useGetMemberInboxQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemberInboxQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemberInboxQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMemberInboxQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMemberInboxQuery, GetMemberInboxQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetMemberInboxQuery, GetMemberInboxQueryVariables>(
    GetMemberInboxDocument,
    options,
  )
}
export function useGetMemberInboxLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMemberInboxQuery, GetMemberInboxQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetMemberInboxQuery, GetMemberInboxQueryVariables>(
    GetMemberInboxDocument,
    options,
  )
}
export type GetMemberInboxQueryHookResult = ReturnType<typeof useGetMemberInboxQuery>
export type GetMemberInboxLazyQueryHookResult = ReturnType<typeof useGetMemberInboxLazyQuery>
export type GetMemberInboxQueryResult = Apollo.QueryResult<
  GetMemberInboxQuery,
  GetMemberInboxQueryVariables
>
