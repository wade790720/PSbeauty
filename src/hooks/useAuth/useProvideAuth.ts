import { useState } from "react"
import { getStorageValue, removeStorageValue } from "hooks/useLocalStorage"
import { AuthContextProps, DEFAULT_USER } from "./AuthContext"
import jwt_decode from "jwt-decode"
import { signOut as firebaseSignOut } from "firebaseClient"

const useProvideAuth = () => {
  const [user, setUser] = useState<AuthContextProps["user"]>(() => {
    const savedToken = getStorageValue("token", "")
    const email = getStorageValue("email", "")
    if (savedToken) {
      try {
        const payload: {
          claims: AuthContextProps["user"]
          exp: number
        } = jwt_decode(savedToken)
        if (new Date(payload.exp * 1000) > new Date()) {
          return {
            id: payload?.claims?.id,
            phone: payload?.claims?.phone,
            name: payload?.claims?.name,
            clinic: payload?.claims?.clinic,
            admin: payload?.claims?.admin,
            email: email,
          }
        }
      } catch {
        return {
          id: null,
          phone: null,
          name: null,
          clinic: null,
          admin: null,
          email: null,
        }
      }
    }
    return DEFAULT_USER
  })

  const signIn = (token: string, email: string) => {
    const payload: { claims: AuthContextProps["user"] } = jwt_decode(token)

    setUser({
      id: payload?.claims?.id,
      phone: payload?.claims?.phone,
      name: payload?.claims?.name,
      clinic: payload?.claims?.clinic,
      admin: payload?.claims?.admin,
      email,
    })
  }

  const signOut = () => {
    removeStorageValue("token")
    removeStorageValue("email")
    setUser(DEFAULT_USER)
    firebaseSignOut()
  }

  return {
    user,
    signIn,
    signOut,
  }
}

export default useProvideAuth
