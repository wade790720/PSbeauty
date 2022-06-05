import { useContext } from "react"
import { FormGroupContext } from "components/Form/FormContext"
import styled from "./InputGroup.module.scss"
import cx from "classnames"

export type InputGroupProps = ReactProps.Component

const InputGroup = (props: InputGroupProps) => {
  const { attributes } = useContext(FormGroupContext)

  return (
    <div
      className={cx(
        styled.wrapper,
        {
          [styled.entered]: attributes?.entered,
          [styled.disabled]: attributes?.disabled,
          [styled["read-only"]]: attributes?.readOnly,
          [styled[attributes?.variant || ""]]: attributes?.variant,
        },
        props.className,
      )}>
      {props.children}
    </div>
  )
}

export default InputGroup
