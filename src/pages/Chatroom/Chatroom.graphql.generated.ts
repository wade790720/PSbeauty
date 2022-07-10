import * as Types from "../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GeTopicDetailQueryVariables = Types.Exact<{
  input: Types.InputMaybe<Types.Scalars["String"]>
}>

export type GeTopicDetailQuery = {
  topic: {
    __typename: "ClinicConsultTopic"
    clinic: { __typename: "Clinic"; id: string | null; name: string | null } | null
    consult: {
      __typename: "Consult"
      id: string | null
      days: number
      subject: string | null
      images: Array<string | null> | null
      consultAt: any
      content: string | null
      poster: { __typename: "User"; id: string | null } | null
    } | null
    replies: Array<{
      __typename: "ConsultTopicReply"
      id: string | null
      content: string | null
      contentType: string | null
      readAt: any
      userId: string | null
    } | null> | null
  } | null
}

export const GeTopicDetailDocument = gql`
  query GeTopicDetail($input: String) {
    topic(topicId: $input) {
      clinic {
        id
        name
      }
      consult {
        id
        days
        subject
        images
        consultAt
        content
        poster {
          id
        }
      }
      replies {
        id
        content
        contentType
        readAt
        userId
      }
    }
  }
`

/**
 * __useGeTopicDetailQuery__
 *
 * To run a query within a React component, call `useGeTopicDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGeTopicDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGeTopicDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGeTopicDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<GeTopicDetailQuery, GeTopicDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GeTopicDetailQuery, GeTopicDetailQueryVariables>(
    GeTopicDetailDocument,
    options,
  )
}
export function useGeTopicDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GeTopicDetailQuery, GeTopicDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GeTopicDetailQuery, GeTopicDetailQueryVariables>(
    GeTopicDetailDocument,
    options,
  )
}
export type GeTopicDetailQueryHookResult = ReturnType<typeof useGeTopicDetailQuery>
export type GeTopicDetailLazyQueryHookResult = ReturnType<typeof useGeTopicDetailLazyQuery>
export type GeTopicDetailQueryResult = Apollo.QueryResult<
  GeTopicDetailQuery,
  GeTopicDetailQueryVariables
>
