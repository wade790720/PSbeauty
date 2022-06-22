import { useContext } from "react"
import AuthContext from "./AuthContext"
import useProvideAuth from "./useProvideAuth"

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = (props: ReactProps.Component) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}
