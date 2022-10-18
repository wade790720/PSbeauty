import { gql } from "@apollo/client"

export const SignInWithEmailAndPassword = gql`
  mutation SignInWithEmailAndPassword($email: String, $password: String) {
    signInWithEmailAndPassword(input: { email: $email, password: $password }) {
      customToken
      refreshToken
      firebaseToken
    }
  }
`
