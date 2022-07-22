import cx from "classnames"
import styled from "./DropdownFooter.module.scss"

export type DropdownFooterProps = ReactProps.Component

const DropdownFooter = (props: DropdownFooterProps) => {
  return <div className={cx(styled.wrapper, props.className)}>{props.children}</div>
}

export default DropdownFooter
