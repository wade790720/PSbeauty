import { useContext } from "react"
import { FormGroupContext } from "components/Form/FormContext"
import styled from "./Append.module.scss"
import cx from "classnames"

export type AppendProps = ReactProps.Component

const Append = (props: AppendProps) => {
  const { attributes } = useContext(FormGroupContext)
  return (
    <div
      className={cx(
        styled.wrapper,
        {
          [styled.entered]: attributes?.entered,
          [styled.disabled]: attributes?.disabled,
          [styled["read-only"]]: attributes?.readOnly,
        },
        props.className,
      )}>
      {props.children}
    </div>
  )
}

export default Append
