import { gql } from "@apollo/client"

export const AddUser = gql`
  mutation AddUser($phone: String, $clientToken: [String], $name: String) {
    addUser(input: { phone: $phone, clientToken: $clientToken, name: $name }) {
      id
    }
  }
`
