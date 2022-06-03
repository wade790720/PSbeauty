import styled from "./Header.module.scss"
import cx from "classnames"

export type HeaderProps = {
  flex?: string
} & ReactProps.Component

const Header = ({ style = {}, ...props }: HeaderProps) => {
  return (
    <div className={cx(styled.wrapper, props.className)} style={{ ...style, flex: props.flex }}>
      {props.children}
    </div>
  )
}

export default Header
