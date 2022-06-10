import ModalBase, { ModalProps } from "./Modal"
import CustomModal from "./CustomModal"
import ModalDialog from "./ModalDialog"
import ModalHeader from "./ModalHeader"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"
import { open, withAlert, withConfirm } from "./withOpen"

export type { ModalProps } from "./Modal"
export type { CustomModalProps } from "./CustomModal"
export type { ModalHeaderProps } from "./ModalHeader"
export type { ModalFooterProps } from "./ModalFooter"

const Modal = Object.assign(ModalBase, {
  alert: (config: ModalProps) => open(ModalBase, withAlert(config)),
  confirm: (config: ModalProps) => open(ModalBase, withConfirm(config)),
  Dialog: ModalDialog,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
})

export { CustomModal }
export default Modal
