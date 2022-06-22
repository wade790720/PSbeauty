import { useRoutes } from "react-router-dom"
import getRoutes from "./getRoutes"
import { useAuth } from "hooks/useAuth"
import useGo from "./useGo"

export default function Router() {
  const auth = useAuth()
  const routes = getRoutes(auth)
  return useRoutes(routes)
}
export { useGo }
