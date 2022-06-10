import ModalPopup from "../ModalPopup"
import ModalDialog from "../ModalDialog"
import Header from "../ModalHeader"
import Body from "../ModalBody"
import Footer from "../ModalFooter"
import { ModalPopupProps } from "../ModalPopup"
import { ModalBodyProps } from "../ModalBody"
import { ModalHeaderProps } from "../ModalHeader"
import { ModalFooterProps } from "../ModalFooter"
import { PopupProps } from "reactjs-popup/dist/types"

export type ModalProps = ModalPopupProps &
  ModalBodyProps &
  ModalHeaderProps &
  ModalFooterProps &
  Partial<Pick<PopupProps, "open" | "closeOnDocumentClick" | "onClose" | "children">>

const Modal = (props: ModalProps) => {
  return (
    <ModalPopup open={props.open} closeOnDocumentClick={props.backdrop} onClose={props.onClose}>
      <ModalDialog>
        <Header title={props.title} />
        <Body content={props.content}>{props.children}</Body>
        <Footer
          confirmText={props.confirmText}
          confirmButtonProps={props.confirmButtonProps}
          cancelText={props.cancelText}
          cancelButtonProps={props.cancelButtonProps}
          onConfirm={props.onConfirm}
          onCancel={props.onCancel}
          onClose={props.onClose}
        />
      </ModalDialog>
    </ModalPopup>
  )
}

export default Modal
