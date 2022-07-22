import cx from "classnames"
import styled from "./DropdownHeader.module.scss"

export type DropdownHeaderProps = ReactProps.Component

const DropdownHeader = (props: DropdownHeaderProps) => {
  return <div className={cx(styled.wrapper, props.className)}>{props.children}</div>
}

export default DropdownHeader
