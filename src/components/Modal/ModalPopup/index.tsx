import Popup from "reactjs-popup"
import { PopupProps } from "reactjs-popup/dist/types"

export type ModalPopupProps = {
  /**
   * Should the modal appear on screen or not
   */
  open?: boolean
  backdrop?: boolean
} & Partial<Pick<PopupProps, "open" | "closeOnDocumentClick" | "onClose" | "children">>

const ModalPopup = ({ open = false, backdrop = true, ...props }: ModalPopupProps) => {
  return (
    <Popup
      modal
      nested
      lockScroll
      open={open}
      closeOnDocumentClick={backdrop}
      closeOnEscape
      onClose={props.onClose}
      contentStyle={{
        background: "transparent",
        border: "none",
        width: "auto",
      }}
      overlayStyle={{
        backgroundColor: "#091e428a",
      }}>
      {props.children}
    </Popup>
  )
}

export default ModalPopup
