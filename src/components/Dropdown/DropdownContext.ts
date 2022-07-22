import React from "react"

export type DropdownContextProps = {
  activeKey?: ReactProps.EventKey
  setActiveKey: (
    e: React.MouseEvent<Element, MouseEvent>,
    { eventKey }: { eventKey?: ReactProps.EventKey },
  ) => void
}

const DropdownContext = React.createContext<DropdownContextProps>({
  setActiveKey: () => {
    // set attributes
  },
})

export { DropdownContext }
export default DropdownContext
