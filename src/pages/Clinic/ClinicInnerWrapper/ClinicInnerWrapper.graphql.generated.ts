import * as Types from "../../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type GetClinicQueryVariables = Types.Exact<{
  id: Types.Scalars["String"]
}>

export type GetClinicQuery = {
  clinic?: {
    __typename: "Clinic"
    name?: string | null
    county?: string | null
    town?: string | null
    address?: string | null
    phone?: string | null
    web?: string | null
    consultReplyCount: number
    caseCount: number
    description?: string | null
    cases?: Array<{
      __typename: "ClinicCase"
      id?: string | null
      description?: string | null
      title?: string | null
      image?: string | null
      collectedCount: number
      categories?: Array<{
        __typename: "Category"
        id?: string | null
        name?: string | null
      } | null> | null
    } | null> | null
    images?: Array<{
      __typename: "ClinicImage"
      id?: string | null
      image?: string | null
      redirectType?: string | null
      targetId?: string | null
      sort: number
    } | null> | null
    doctors?: Array<{
      __typename: "ClinicDoctor"
      id?: string | null
      name?: string | null
      resumes?: string | null
      photo?: string | null
      title?: string | null
      expertise?: string | null
    } | null> | null
    activities?: Array<{
      __typename: "ClinicActivity"
      id?: string | null
      subject?: string | null
      content?: string | null
      createdAt: number
      image?: string | null
    } | null> | null
  } | null
}

export const GetClinicDocument = gql`
  query GetClinic($id: String!) {
    clinic(id: $id) {
      name
      county
      town
      address
      phone
      web
      consultReplyCount
      caseCount
      description
      cases {
        id
        description
        title
        image
        collectedCount
        categories {
          id
          name
        }
      }
      images {
        id
        image
        redirectType
        targetId
        sort
      }
      doctors {
        id
        name
        resumes
        photo
        title
        expertise
      }
      activities {
        id
        subject
        content
        createdAt
        image
      }
    }
  }
`

/**
 * __useGetClinicQuery__
 *
 * To run a query within a React component, call `useGetClinicQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClinicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClinicQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetClinicQuery(
  baseOptions: Apollo.QueryHookOptions<GetClinicQuery, GetClinicQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetClinicQuery, GetClinicQueryVariables>(GetClinicDocument, options)
}
export function useGetClinicLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetClinicQuery, GetClinicQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetClinicQuery, GetClinicQueryVariables>(GetClinicDocument, options)
}
export type GetClinicQueryHookResult = ReturnType<typeof useGetClinicQuery>
export type GetClinicLazyQueryHookResult = ReturnType<typeof useGetClinicLazyQuery>
export type GetClinicQueryResult = Apollo.QueryResult<GetClinicQuery, GetClinicQueryVariables>
