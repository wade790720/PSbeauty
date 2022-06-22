import * as Types from "../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type AddUserMutationVariables = Types.Exact<{
  phone: Types.InputMaybe<Types.Scalars["String"]>
  clientToken: Types.InputMaybe<
    Array<Types.InputMaybe<Types.Scalars["String"]>> | Types.InputMaybe<Types.Scalars["String"]>
  >
  name: Types.InputMaybe<Types.Scalars["String"]>
}>

export type AddUserMutation = {
  addUser: { __typename: "AddUserPayload"; id: string | null } | null
}

export const AddUserDocument = gql`
  mutation AddUser($phone: String, $clientToken: [String], $name: String) {
    addUser(input: { phone: $phone, clientToken: $clientToken, name: $name }) {
      id
    }
  }
`
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *      clientToken: // value for 'clientToken'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAddUserMutation(
  baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options)
}
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>
export type AddUserMutationOptions = Apollo.BaseMutationOptions<
  AddUserMutation,
  AddUserMutationVariables
>
