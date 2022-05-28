import React, { useMemo } from "react"
import Loading from "../Loading"
import NoData from "../NoData"

export type QueryStatusProps = {
  loading?: boolean
  error?: boolean
  noData?: boolean
  renderNoData?: JSX.Element
} & ReactProps.Component

const QueryStatus = ({
  loading = false,
  error = false,
  noData = false,
  children,
  renderNoData,
}: QueryStatusProps) => {
  return useMemo(() => {
    if (loading) return <Loading />
    else if (renderNoData && error) return renderNoData
    else if (error) return <NoData />
    else if (renderNoData && noData) return renderNoData
    else if (noData) return <NoData />
    else return <>{children}</>
  }, [loading, error, noData, renderNoData, children])
}

export default QueryStatus
