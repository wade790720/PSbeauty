import * as Types from "../../types/schema"

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

export type UpdateClinicCategoryMutationVariables = Types.Exact<{
  categories: Types.InputMaybe<
    Array<Types.InputMaybe<Types.Scalars["String"]>> | Types.InputMaybe<Types.Scalars["String"]>
  >
}>

export type UpdateClinicCategoryMutation = {
  updateClinicCategory: { __typename: "UpdateClinicCategoryPayload"; id: string | null } | null
}

export type GetMyClinicQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetMyClinicQuery = {
  myClinic: {
    __typename: "Clinic"
    categories: Array<{
      __typename: "Category"
      id: string | null
      name: string | null
    } | null> | null
  } | null
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
export const UpdateClinicCategoryDocument = gql`
  mutation UpdateClinicCategory($categories: [String]) {
    updateClinicCategory(input: { categories: $categories }) {
      id
    }
  }
`
export type UpdateClinicCategoryMutationFn = Apollo.MutationFunction<
  UpdateClinicCategoryMutation,
  UpdateClinicCategoryMutationVariables
>

/**
 * __useUpdateClinicCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateClinicCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClinicCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClinicCategoryMutation, { data, loading, error }] = useUpdateClinicCategoryMutation({
 *   variables: {
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useUpdateClinicCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateClinicCategoryMutation,
    UpdateClinicCategoryMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateClinicCategoryMutation, UpdateClinicCategoryMutationVariables>(
    UpdateClinicCategoryDocument,
    options,
  )
}
export type UpdateClinicCategoryMutationHookResult = ReturnType<
  typeof useUpdateClinicCategoryMutation
>
export type UpdateClinicCategoryMutationResult = Apollo.MutationResult<UpdateClinicCategoryMutation>
export type UpdateClinicCategoryMutationOptions = Apollo.BaseMutationOptions<
  UpdateClinicCategoryMutation,
  UpdateClinicCategoryMutationVariables
>
export const GetMyClinicDocument = gql`
  query GetMyClinic {
    myClinic {
      categories {
        id
        name
      }
    }
  }
`

/**
 * __useGetMyClinicQuery__
 *
 * To run a query within a React component, call `useGetMyClinicQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyClinicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyClinicQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyClinicQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMyClinicQuery, GetMyClinicQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetMyClinicQuery, GetMyClinicQueryVariables>(GetMyClinicDocument, options)
}
export function useGetMyClinicLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMyClinicQuery, GetMyClinicQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetMyClinicQuery, GetMyClinicQueryVariables>(
    GetMyClinicDocument,
    options,
  )
}
export type GetMyClinicQueryHookResult = ReturnType<typeof useGetMyClinicQuery>
export type GetMyClinicLazyQueryHookResult = ReturnType<typeof useGetMyClinicLazyQuery>
export type GetMyClinicQueryResult = Apollo.QueryResult<GetMyClinicQuery, GetMyClinicQueryVariables>
