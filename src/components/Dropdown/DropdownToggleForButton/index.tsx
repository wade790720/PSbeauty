import Button from "components/Button"
import React from "react"
import { forwardRef } from "react"
import DropdownToggle, { DropdownToggleProps, Ref } from "../DropdownToggle"

const DropdownToggleForButton = forwardRef<Ref, DropdownToggleProps>(
  function DropdownToggleForButton(props: DropdownToggleProps, ref) {
    return (
      <DropdownToggle {...props} ref={ref}>
        {React.Children.map(props.children, child => {
          if (!React.isValidElement(child)) return
          if (child.type === Button) {
            return React.cloneElement(child, {
              selected: props.open,
            })
          }
          return child
        })}
      </DropdownToggle>
    )
  },
)

export default DropdownToggleForButton
