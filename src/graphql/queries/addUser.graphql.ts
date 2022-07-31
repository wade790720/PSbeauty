import { gql } from "@apollo/client"

export const AddUser = gql`
  mutation addUser($phone: String, $clientToken: [String], $name: String!) {
    addUser(input: { phone: $phone, clientToken: $clientToken, name: $name }) {
      id
    }
  }
`
