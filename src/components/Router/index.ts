import { useRoutes } from "react-router-dom"
import getRoutes from "./getRoutes"
import useGo from "./useGo"

export default function Router() {
  const routes = getRoutes()
  return useRoutes(routes)
}
export { useGo }
