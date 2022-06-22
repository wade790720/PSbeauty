import { useState } from "react"
import { getStorageValue, removeStorageValue } from "hooks/useLocalStorage"
import { AuthContextProps, DEFAULT_USER } from "./AuthContext"
import jwt_decode from "jwt-decode"

const useProvideAuth = () => {
  const [user, setUser] = useState<AuthContextProps["user"]>(() => {
    const savedToken = getStorageValue("token", "")
    if (savedToken) {
      try {
        const payload: { claims: AuthContextProps["user"] } = jwt_decode(savedToken)
        return {
          id: payload?.claims?.id,
          phone: payload?.claims?.phone,
          name: payload?.claims?.name,
          clinic: payload?.claims?.clinic,
          admin: payload?.claims?.admin,
        }
      } catch {
        return {
          id: null,
          phone: null,
          name: null,
          clinic: null,
          admin: null,
        }
      }
    } else {
      return DEFAULT_USER
    }
  })

  const signIn = (token: string) => {
    const payload: { claims: AuthContextProps["user"] } = jwt_decode(token)
    setUser({
      id: payload?.claims?.id,
      phone: payload?.claims?.phone,
      name: payload?.claims?.name,
      clinic: payload?.claims?.clinic,
      admin: payload?.claims?.admin,
    })
  }

  const signOut = () => {
    removeStorageValue("token")
    setUser(DEFAULT_USER)
  }

  return {
    user,
    signIn,
    signOut,
  }
}

export default useProvideAuth
