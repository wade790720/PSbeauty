import cx from "classnames"
import styled from "./FormRadio.module.scss"

export type FormRadioProps = {
  /**
   * If true, the checkbox will be inline style.
   */
  inline?: boolean
} & ReactProps.WithClassName & ReactProps.WithChildren & Omit<JSX.IntrinsicElements["input"], "type">

const FormRadio = ({ children, inline, ...props }: FormRadioProps) => {
  return (
    <div
      className={cx(
        "component-radio",
        styled.wrapper,
        { [styled.inline]: inline },
        props.className,
      )}>
      <label className={styled.label}>
        <input type="radio" {...props} />
        <span className={styled.content}>{children}</span>
      </label>
    </div>
  )
}

export default FormRadio
