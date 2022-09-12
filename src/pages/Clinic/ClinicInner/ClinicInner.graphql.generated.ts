import * as Types from "../../../types/schema"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type ConsultClinicMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.Scalars["String"]>
}>

export type ConsultClinicMutation = {
  consultClinic?: { __typename: "ConsultClinicPayload"; topicId?: string | null } | null
}

export const ConsultClinicDocument = gql`
  mutation consultClinic($input: String) {
    consultClinic(input: { clinicId: $input, days: 90, subject: "OneOnOne", content: "OneOnOne" }) {
      topicId
    }
  }
`
export type ConsultClinicMutationFn = Apollo.MutationFunction<
  ConsultClinicMutation,
  ConsultClinicMutationVariables
>

/**
 * __useConsultClinicMutation__
 *
 * To run a mutation, you first call `useConsultClinicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConsultClinicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [consultClinicMutation, { data, loading, error }] = useConsultClinicMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConsultClinicMutation(
  baseOptions?: Apollo.MutationHookOptions<ConsultClinicMutation, ConsultClinicMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ConsultClinicMutation, ConsultClinicMutationVariables>(
    ConsultClinicDocument,
    options,
  )
}
export type ConsultClinicMutationHookResult = ReturnType<typeof useConsultClinicMutation>
export type ConsultClinicMutationResult = Apollo.MutationResult<ConsultClinicMutation>
export type ConsultClinicMutationOptions = Apollo.BaseMutationOptions<
  ConsultClinicMutation,
  ConsultClinicMutationVariables
>
