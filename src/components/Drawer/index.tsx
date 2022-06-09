import { useRef, useEffect } from "react"
import cx from "classnames"
import styled from "./Drawer.module.scss"
import { createPortal } from "react-dom"
import useMountTransition from "./useMountTransition"

export type DrawerProps = {
  /**
   * Should the drawer appear on screen or not
   */
  open: boolean
  /**
   * A callback function whenever the drawer closed.
   */
  onClose?: () => void
  /**
   * Allows the drawer container custom width
   */
  size?: string | number
} & ReactProps.Component

const Drawer = ({
  open = true,
  size = 250,
  className,
  onClose,
  children,
  style,
  ...props
}: DrawerProps) => {
  const isTransitioning = useMountTransition(open, 300)

  // 動態產生dom
  const createPortalRoot = () => {
    const drawerRoot = document.createElement("div")
    drawerRoot.setAttribute("id", "drawer-root")
    return drawerRoot
  }

  const portalRootRef = useRef(document.getElementById("drawer-root") || createPortalRoot())
  const bodyRef = useRef(document.querySelector("body"))
  const bodyEl = bodyRef.current

  useEffect(() => {
    bodyEl && bodyEl.appendChild(portalRootRef.current)
  }, [])

  useEffect(() => {
    const updatePageScroll = () => {
      if (open) {
        bodyEl && (bodyEl.style.overflow = "hidden")
      } else {
        bodyEl && (bodyEl.style.overflow = "unset")
      }
    }
    updatePageScroll()
  }, [open])

  if (!isTransitioning && !open) return null

  return createPortal(
    <div
      className={cx(
        styled.wrapper,
        { [styled.in]: isTransitioning },
        { [styled.active]: open },
        className,
      )}
      style={style}
      {...props}>
      <div className={styled.overlay} onClick={onClose} />
      <div
        className={styled.container}
        style={{ height: typeof size === "number" ? `${size}px` : size }}>
        {children}
      </div>
    </div>,
    portalRootRef.current,
  )
}

export default Drawer
