import React, { forwardRef } from "react"
import cx from "classnames"
import styled from "./DropdownMenu.module.scss"

export type MenuContentProps = {
  ref: React.Ref<HTMLInputElement>
  menuContent: {
    header: React.ReactNode
    body: React.ReactNode
    list: React.ReactNode[]
    footer: React.ReactNode
  }
} & ReactProps.Component

const MenuContent = forwardRef<HTMLDivElement, MenuContentProps>(function Dropdown(
  { menuContent, ...props }: MenuContentProps,
  ref,
) {
  return (
    <div className={cx(styled.wrapper, props.className)} style={props.style} ref={ref}>
      {menuContent.header}
      {menuContent.body}
      {menuContent.list.length > 0 && <div className={styled.list}>{menuContent.list}</div>}
      {menuContent.footer}
    </div>
  )
})

export default MenuContent
