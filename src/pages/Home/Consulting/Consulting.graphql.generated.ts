import * as Types from "../../../types/schema"

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

export type GetConsultClinicMutationVariables = Types.Exact<{
  categories: Types.InputMaybe<
    Array<Types.InputMaybe<Types.Scalars["String"]>> | Types.InputMaybe<Types.Scalars["String"]>
  >
  days: Types.Scalars["Int"]
  images: Types.InputMaybe<
    Array<Types.InputMaybe<Types.Scalars["String"]>> | Types.InputMaybe<Types.Scalars["String"]>
  >
  subject: Types.Scalars["String"]
  content: Types.InputMaybe<Types.Scalars["String"]>
}>

export type GetConsultClinicMutation = {
  addConsult: { __typename: "AddConsultPayload"; id: string | null } | null
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
export const GetConsultClinicDocument = gql`
  mutation GetConsultClinic(
    $categories: [String]
    $days: Int!
    $images: [String]
    $subject: String!
    $content: String
  ) {
    addConsult(
      input: {
        categories: $categories
        days: $days
        images: $images
        subject: $subject
        content: $content
      }
    ) {
      id
    }
  }
`
export type GetConsultClinicMutationFn = Apollo.MutationFunction<
  GetConsultClinicMutation,
  GetConsultClinicMutationVariables
>

/**
 * __useGetConsultClinicMutation__
 *
 * To run a mutation, you first call `useGetConsultClinicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetConsultClinicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getConsultClinicMutation, { data, loading, error }] = useGetConsultClinicMutation({
 *   variables: {
 *      categories: // value for 'categories'
 *      days: // value for 'days'
 *      images: // value for 'images'
 *      subject: // value for 'subject'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useGetConsultClinicMutation(
  baseOptions?: Apollo.MutationHookOptions<
    GetConsultClinicMutation,
    GetConsultClinicMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<GetConsultClinicMutation, GetConsultClinicMutationVariables>(
    GetConsultClinicDocument,
    options,
  )
}
export type GetConsultClinicMutationHookResult = ReturnType<typeof useGetConsultClinicMutation>
export type GetConsultClinicMutationResult = Apollo.MutationResult<GetConsultClinicMutation>
export type GetConsultClinicMutationOptions = Apollo.BaseMutationOptions<
  GetConsultClinicMutation,
  GetConsultClinicMutationVariables
>
