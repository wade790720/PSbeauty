import styled from "./Backdrop.module.scss"
import cx from "classnames"

export type BackdropProps = {
  flex?: string
} & ReactProps.Component

const Backdrop = ({ style = {}, ...props }: BackdropProps) => {
  return (
    <div className={cx(styled.wrapper, props.className)} style={{ ...style, flex: props.flex }}>
      {props.children}
    </div>
  )
}

export default Backdrop
