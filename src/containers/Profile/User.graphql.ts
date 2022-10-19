import { gql } from "@apollo/client"

export const UpdateUser = gql`
  mutation UpdateUser($name: String) {
    updateUser(input: { name: $name }) {
      id
    }
  }
`

export const Me = gql`
  query Me {
    me {
      name
    }
  }
`
