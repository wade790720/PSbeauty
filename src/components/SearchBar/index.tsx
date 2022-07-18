import React, { useState } from "react"
import styled from "./SearchBar.module.scss"
import cx from "classnames"
import Form, { InputGroup, Prepend, Append } from "components/Form"
import Icon from "components/Icon"

export type SearchBarProps = {
  variant?: string
  onChange?: (value: string) => void
} & ReactProps.Component

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(function SearchBar(
  props,
  ref,
) {
  const [empty, setEmpty] = useState(true)

  return (
    <div className={cx(styled.wrapper, styled[props.variant || ""])}>
      <InputGroup className={styled["input-group"]}>
        <Prepend className={styled["search-icon"]}>
          <Icon name="search" />
        </Prepend>
        <Form.Input
          placeholder="搜尋關鍵字"
          className={styled.input}
          style={{ backgroundColor: "transparent" }}
          onChange={e => {
            setEmpty(!e.target.value)
            if (props.onChange) {
              props.onChange(e.target.value)
            }
          }}
          ref={ref}
        />
        {ref && !empty && (
          <Append className={styled["cross-icon"]}>
            <div
              onClick={() => {
                if (ref && "current" in ref && ref.current) {
                  ref.current.value = ""
                  setEmpty(true)
                }
              }}>
              <Icon name="purple-cross" />
            </div>
          </Append>
        )}
      </InputGroup>
    </div>
  )
})

export default SearchBar
