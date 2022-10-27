import { useContext } from "react"
import jwt_decode from "jwt-decode"
import AuthContext, { AuthContextProps } from "./AuthContext"
import useProvideAuth from "./useProvideAuth"
import apolloClient from "graphql/apolloClient"
import { getStorageValue, setStorageValue } from "../useLocalStorage"
import { GetRefreshTokenDocument } from "graphql/queries/getRefreshToken.graphql.generated"

export const refresh = async (auth: AuthContextProps) => {
  const customToken = getStorageValue("customToken", "")
  const refreshToken = getStorageValue("refreshToken", "")
  const email = getStorageValue("email", "")
  if (customToken && refreshToken && email) {
    const customPayload: { exp: number; iat: number } = jwt_decode(customToken)
    const refreshPayload: { exp: number; iat: number } = jwt_decode(refreshToken)
    const refreshExpiredTime = new Date(refreshPayload.exp * 1000)
    const customRenewTime = new Date(
      (customPayload.iat + ((customPayload.exp - customPayload.iat) * 5) / 10) * 1000,
    )
    if (new Date() >= refreshExpiredTime) {
      auth.signOut()
    } else if (new Date() >= customRenewTime) {
      try {
        const res = await apolloClient.query({
          query: GetRefreshTokenDocument,
          fetchPolicy: "no-cache",
          context: { headers: { authorization: `Bearer ${refreshToken}` } },
        })
        const newCustomToken = res.data.refreshToken?.customToken
        if (newCustomToken) {
          setStorageValue("customToken", newCustomToken)
          auth.signIn(newCustomToken, email)
        }
        const newRefreshToken = res.data.refreshToken?.refreshToken
        if (newRefreshToken) {
          setStorageValue("refreshToken", newRefreshToken)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = (props: ReactProps.Component) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}
