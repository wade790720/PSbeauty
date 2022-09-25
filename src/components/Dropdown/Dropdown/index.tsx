import React, {
  useMemo,
  useRef,
  useState,
  useLayoutEffect,
  useImperativeHandle,
  forwardRef,
} from "react"
import cx from "classnames"
import Popup from "reactjs-popup"
import { PopupActions, PopupProps } from "reactjs-popup/dist/types"
import DropdownContext from "../DropdownContext"
import { default as BaseDropdown } from "../index"
import DropdownMenu from "../DropdownMenu"
import styled from "./Dropdown.module.scss"

export type DropdownSelectEventProps = { eventKey?: ReactProps.EventKey }
export type DropdownActions = {
  /**
   * Close the menu.
   */
  close: () => void
}
export type DropdownProps = {
  /**
   * The default dropdown active key.
   */
  defaultActiveKey?: ReactProps.EventKey
  // TODO: rename props
  keepTooltipInside?: PopupProps["keepTooltipInside"]
  /**
   * If true, the dropdown will be disabled.
   */
  disabled?: boolean
  /**
   * Height of the dropdown item. If rowHeight is defined, the props of virtualized must be defined too.
   */
  position?: PopupProps["position"]
  /**
   * Called when selected value has changed.
   */
  onSelect?: (
    e: React.MouseEvent<Element, MouseEvent>,
    { eventKey }: DropdownSelectEventProps,
  ) => void
  /**
   * Disable close on select event
   */
  autoClose?: boolean
} & ReactProps.Component

const Dropdown = forwardRef<DropdownActions, DropdownProps>(function Dropdown(
  { position = ["bottom left"], autoClose = true, ...props },
  ref,
) {
  const [clientWidth, setClientWidth] = useState(100)
  const [eventKey, setEventKay] = useState(props.defaultActiveKey)
  const popupRef = useRef<PopupActions | null>(null)
  const triggerRef = useRef<HTMLInputElement>(null)

  const dropdown = useMemo(() => {
    let triggerElement = <div />
    let menuElement = null
    React.Children.forEach(props.children, child => {
      if (!React.isValidElement(child)) return
      if (child.type === BaseDropdown.Toggle) {
        triggerElement = child
      }
      if (child.type === DropdownMenu) {
        menuElement = React.cloneElement(child, {
          style: { ...child.props.style, minWidth: clientWidth },
        })
      }
    })

    return {
      trigger: triggerElement,
      menu: menuElement,
    }
  }, [props.children, clientWidth])

  const handleClickItem = (
    e: React.MouseEvent<Element, MouseEvent>,
    { eventKey }: { eventKey?: ReactProps.EventKey },
  ) => {
    if (!eventKey) return
    setEventKay(eventKey)
    props.onSelect && props.onSelect(e, { eventKey })
    autoClose && popupRef.current?.close()
  }

  useLayoutEffect(() => {
    setClientWidth(triggerRef.current?.clientWidth || 100)
  }, [])

  useImperativeHandle(ref, () => ({
    close: () => popupRef.current && popupRef.current?.close(),
  }))

  return (
    <DropdownContext.Provider value={{ activeKey: eventKey, setActiveKey: handleClickItem }}>
      <div className={cx(styled.wrapper, props.className)} style={props.style} ref={triggerRef}>
        <Popup
          ref={popupRef}
          className="dropdown"
          trigger={open => dropdown.trigger && React.cloneElement(dropdown.trigger, { open })}
          position={position}
          disabled={props.disabled}
          on="click"
          closeOnDocumentClick
          nested={true}
          mouseLeaveDelay={300}
          mouseEnterDelay={0}
          arrow={false}
          contentStyle={{
            border: "none",
            padding: "8px",
            boxShadow: "none",
          }}>
          {dropdown.menu}
        </Popup>
      </div>
    </DropdownContext.Provider>
  )
})

export default Dropdown
