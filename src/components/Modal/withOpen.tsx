import React from "react"
import ReactDOM from "react-dom"
import { ModalProps } from "./Modal"

export const getPopupRoot = () => {
  let popupRoot = document.getElementById("popup-root")
  if (!popupRoot) {
    popupRoot = document.createElement("div")
    popupRoot.setAttribute("id", "popup-root")
    document.body.appendChild(popupRoot)
  }
  return popupRoot
}

export function open(Modal: React.FC<ModalProps>, config: ModalProps) {
  const modalRoot = getPopupRoot()
  const modalDiv = document.createElement("div")
  modalRoot.appendChild(modalDiv)

  function bindClose(config: ModalProps) {
    const { onConfirm, onCancel, onClose, ...theOtherConfig } = config
    const bind = (fn?: () => void) =>
      fn
        ? () => {
            typeof fn === "function" && fn()
            close()
          }
        : close

    return {
      ...theOtherConfig,
      onConfirm: bind(onConfirm),
      onCancel: bind(onCancel),
      onClose: bind(onClose),
    }
  }

  function render(config: ModalProps) {
    ReactDOM.render(<Modal {...bindClose(config)} />, modalDiv)
  }

  function update(newConfig: ModalProps) {
    render({
      ...config,
      ...newConfig,
      open: true,
    })
  }

  function close() {
    render({
      ...config,
      open: false,
    })
  }

  render({
    ...config,
    open: true,
  })

  return {
    destroy: close,
    update,
  }
}

export function withAlert(config: ModalProps) {
  return {
    ...config,
    cancelText: null,
  }
}

export function withConfirm(config: ModalProps) {
  return {
    ...config,
    cancelText: config.cancelText,
  }
}
