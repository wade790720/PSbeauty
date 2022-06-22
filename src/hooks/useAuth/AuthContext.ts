import React from "react"

export const DEFAULT_USER = {
  id: null,
  phone: null,
  name: null,
  clinic: null,
  admin: null,
}

export type AuthContextProps = {
  user: {
    id: string | null
    phone: string | null
    name: string | null
    clinic: string | null
    admin: boolean | null
  }

  signIn: (token: string) => void
  signOut: () => void
}

const AuthContext = React.createContext<AuthContextProps>({
  user: DEFAULT_USER,
  signIn: () => {
    // sign in
  },
  signOut: () => {
    // sign out
  },
})

export default AuthContext
