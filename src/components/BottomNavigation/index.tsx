import styled from "./BottomNavigation.module.scss"
import cx from "classnames"

import { ReactComponent as Home } from "./svg/home.svg"

const BottomNavigation = () => {
  return (
    <div style={{ background: "red" }}>
      Navigation
      <Home />
    </div>
  )
}

export default BottomNavigation
