import styled from "./Backdrop.module.scss"
import cx from "classnames"

export type BackdropProps = ReactProps.Component

const Backdrop = ({ style = {}, ...props }: BackdropProps) => {
  return (
    <div className={cx(styled.wrapper, props.className)} style={{ ...style }}>
      {props.children}
    </div>
  )
}

export default Backdrop
