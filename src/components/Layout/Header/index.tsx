import styled from "./Header.module.scss"
import cx from "classnames"
import Icon from "components/Icon"

export type HeaderProps = {
  leftArrow?: boolean
  title?: string
} & ReactProps.Component

const Header = ({ style = {}, ...props }: HeaderProps) => {
  return (
    <div
      className={cx(styled.wrapper, props.className, {
        [styled.large]: props.title,
        [styled.small]: !props.title && !props.leftArrow,
      })}
      style={{ ...style }}>
      {props.leftArrow && <Icon className={styled["back"]} name="LeftArrow" />}
      {props.title ? (
        <div
          className={cx(styled.title, {
            [styled["has-back"]]: props.leftArrow,
          })}>
          {props.title}
        </div>
      ) : (
        props.children
      )}
    </div>
  )
}

export default Header
