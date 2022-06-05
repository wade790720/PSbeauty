import { Suspense } from "react"
import { HashRouter } from "react-router-dom"
import Router from "components/Router"
import styled from "./App.module.scss"
import QueryStatus from "components/QueryStatus"

export default function App() {
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
