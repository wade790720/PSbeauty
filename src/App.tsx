import { Suspense } from "react"
import { HashRouter } from "react-router-dom"
import Router from "components/Router"
import styled from "./App.module.scss"
import { useAuth, refresh } from "hooks/useAuth"
import QueryStatus from "components/QueryStatus"

let internal: ReturnType<typeof setInterval>

export default function App() {
  const auth = useAuth()

  refresh(auth)
  clearInterval(internal)
  internal = setInterval(() => {
    refresh(auth)
  }, 10 * 60 * 1000) // every 10 minutes check again

  return (
    <HashRouter>
      <div className={styled.container}>
        <Suspense fallback={<QueryStatus.Loading />}>
          <Router />
        </Suspense>
      </div>
    </HashRouter>
  )
}
