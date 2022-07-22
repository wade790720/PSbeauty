import React, { forwardRef, useMemo } from "react"
import Popup from "reactjs-popup"
import { PopupProps } from "reactjs-popup/dist/types"
import DropdownItem from "../DropdownItem"
import DropdownBody from "../DropdownBody"
import DropdownHeader from "../DropdownHeader"
import DropdownFooter from "../DropdownFooter"
import MenuContent from "./MenuContent"

export type DropdownMenuProps = {
  trigger?: JSX.Element
  position?: PopupProps["position"]
} & ReactProps.Component

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(function Dropdown(
  { position = ["bottom left"], ...props }: DropdownMenuProps,
  ref,
) {
  const menu = useMemo(() => {
    const list: React.ReactElement[] = []
    let headerElement = null
    let bodyElement = null
    let footerElement = null
    React.Children.forEach(props.children, child => {
      if (!React.isValidElement(child)) return
      if (child.type === DropdownHeader) {
        headerElement = child
      }
      if (child.type === DropdownBody) {
        bodyElement = child
      }
      if (child.type === DropdownItem || child.type === DropdownMenu) {
        list.push(child)
      }
      if (child.type === DropdownFooter) {
        footerElement = child
      }
    })
    return {
      header: headerElement,
      body: bodyElement,
      list,
      footer: footerElement,
    }
  }, [props.children])

  return (
    <>
      {!props.trigger ? (
        <MenuContent ref={ref} menuContent={menu} {...props} />
      ) : (
        <Popup
          trigger={<span>{props.trigger}</span>}
          on="hover"
          nested={true}
          position={position}
          offsetX={85}
          offsetY={-35}
          closeOnDocumentClick
          arrow={false}>
          <MenuContent menuContent={menu} {...props} />
        </Popup>
      )}
    </>
  )
})

export default DropdownMenu
