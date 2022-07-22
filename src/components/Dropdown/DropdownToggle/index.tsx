import React from "react"
import { forwardRef } from "react"

export type DropdownToggleProps = {
  open?: boolean
  /**
   * Callback when click.
   */
  onClick?: React.MouseEventHandler<HTMLElement>
} & ReactProps.Component

export type Ref = HTMLDivElement

const DropdownToggle = forwardRef<Ref, DropdownToggleProps>(function DropdownToggle(
  props: DropdownToggleProps,
  ref,
) {
  return (
    <div className={props.className} onClick={props.onClick} ref={ref}>
      {props.children}
    </div>
  )
})

export default DropdownToggle
