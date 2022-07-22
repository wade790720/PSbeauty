import * as Types from "../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type SignInWithEmailAndPasswordMutationVariables = Types.Exact<{
  email: Types.InputMaybe<Types.Scalars["String"]>
  password: Types.InputMaybe<Types.Scalars["String"]>
}>

export type SignInWithEmailAndPasswordMutation = {
  signInWithEmailAndPassword: {
    __typename: "SignInWithEmailAndPasswordPayload"
    token: string | null
  } | null
}

export const SignInWithEmailAndPasswordDocument = gql`
  mutation SignInWithEmailAndPassword($email: String, $password: String) {
    signInWithEmailAndPassword(input: { email: $email, password: $password }) {
      token
    }
  }
`
export type SignInWithEmailAndPasswordMutationFn = Apollo.MutationFunction<
  SignInWithEmailAndPasswordMutation,
  SignInWithEmailAndPasswordMutationVariables
>

/**
 * __useSignInWithEmailAndPasswordMutation__
 *
 * To run a mutation, you first call `useSignInWithEmailAndPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInWithEmailAndPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInWithEmailAndPasswordMutation, { data, loading, error }] = useSignInWithEmailAndPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInWithEmailAndPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignInWithEmailAndPasswordMutation,
    SignInWithEmailAndPasswordMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    SignInWithEmailAndPasswordMutation,
    SignInWithEmailAndPasswordMutationVariables
  >(SignInWithEmailAndPasswordDocument, options)
}
export type SignInWithEmailAndPasswordMutationHookResult = ReturnType<
  typeof useSignInWithEmailAndPasswordMutation
>
export type SignInWithEmailAndPasswordMutationResult =
  Apollo.MutationResult<SignInWithEmailAndPasswordMutation>
export type SignInWithEmailAndPasswordMutationOptions = Apollo.BaseMutationOptions<
  SignInWithEmailAndPasswordMutation,
  SignInWithEmailAndPasswordMutationVariables
>
