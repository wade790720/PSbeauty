import React, { Suspense } from "react"
import { HashRouter } from "react-router-dom"
import { Container, Row } from "react-grid-system"
import Router from "components/Router"
import styled from "./App.module.scss"
import QueryStatus from "components/QueryStatus"

export default function App() {
  return (
    <HashRouter>
      <Container fluid className={styled.container}>
        <Row direction="column" style={{ flex: 1 }}>
          <Suspense fallback={<QueryStatus.Loading />}>
            <Router />
          </Suspense>
        </Row>
      </Container>
    </HashRouter>
  )
}
