import QueryStatusBase from "./QueryStatus"
import Loading from "./Loading"
import Error from "./Error"
import NoData from "./NoData"
export type { QueryStatusProps } from "./QueryStatus"

const QueryStatus = Object.assign(QueryStatusBase, {
  Loading,
  Error,
  NoData,
})

export default QueryStatus
