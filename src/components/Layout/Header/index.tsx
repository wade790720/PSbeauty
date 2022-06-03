import styled from "./Header.module.scss"
import cx from "classnames"
import { ReactComponent as LeftArrow } from "./leftArrow.svg"

export type HeaderProps = ReactProps.Component

const Header = ({ style = {}, ...props }: HeaderProps) => {
  return (
    <div className={cx(styled.wrapper, props.className)} style={{ ...style }}>
      <LeftArrow />
      {props.children}
    </div>
  )
}

export default Header
