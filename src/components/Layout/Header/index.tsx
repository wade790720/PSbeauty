import styled from "./Header.module.scss"
import cx from "classnames"

export type HeaderProps = ReactProps.Component

const Header = ({ style = {}, ...props }: HeaderProps) => {
  return (
    <div className={cx(styled.wrapper, props.className)} style={{ ...style }}>
      {props.children}
    </div>
  )
}

export default Header
