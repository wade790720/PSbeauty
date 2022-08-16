import { gql } from "@apollo/client"

export const ConsltClinic = gql`
  mutation consultClinic($input: String) {
    consultClinic(input: { clinicId: $input, days: 7 }) {
      topicId
    }
  }
`
