import cx from "classnames"
import styled from "./ModalHeader.module.scss"

export type ModalHeaderProps = {
  /**
   * The Modal header.
   */
  title?: string
} & ReactProps.Component

const ModalHeader = (props: ModalHeaderProps) => {
  return (
    <header className={cx(styled.wrapper, props.className)} style={props.style}>
      <h1>{props.title}</h1>
      {props.children}
    </header>
  )
}

export default ModalHeader
