import { useContext } from "react"
import jwt_decode from "jwt-decode"
import AuthContext from "./AuthContext"
import useProvideAuth from "./useProvideAuth"
import apolloClient from "graphql/apolloClient"
import { getStorageValue, setStorageValue } from "../useLocalStorage"
import { GetRefreshTokenDocument } from "graphql/queries/getRefreshToken.graphql.generated"

export const refreshToken = async () => {
  const customToken = getStorageValue("customToken", "")
  if (customToken) {
    const payload: { exp: number; iat: number } = jwt_decode(customToken)
    const expiredTime = new Date(payload.exp * 1000)
    const renewTime = new Date((payload.iat + ((payload.exp - payload.iat) * 5) / 10) * 1000)
    if (expiredTime > new Date() && renewTime <= new Date()) {
      try {
        const res = await apolloClient.query({ query: GetRefreshTokenDocument })
        const newCustomToken = res.data.refreshToken?.customToken
        if (newCustomToken) {
          setStorageValue("customToken", newCustomToken)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
refreshToken()
setInterval(() => {
  refreshToken()
}, 60 * 1000) // every 60 seconds check again

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = (props: ReactProps.Component) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}
