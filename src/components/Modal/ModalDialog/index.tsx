import cx from "classnames"
import styled from "./ModalDialog.module.scss"

export type ModalDialogProps = ReactProps.Component

const ModalDialog = (props: ModalDialogProps) => {
  return (
    <div className={cx(styled.wrapper, props.className)} style={props.style}>
      {props.children}
    </div>
  )
}

export default ModalDialog
