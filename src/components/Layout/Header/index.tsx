import styled from "./Header.module.scss"
import cx from "classnames"
import Icon from "components/Icon"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

export type HeaderProps = {
  leftArrow?: boolean
  title?: string
  redirect?: () => void
} & ReactProps.Component

const Header = ({ style = {}, ...props }: HeaderProps) => {
  const navigate = useNavigate()
  const { text } = useParams()

  return (
    <div
      className={cx(styled.wrapper, props.className, {
        [styled.large]: props.title || props.children,
        [styled.small]: !props.title && !props.leftArrow,
      })}
      style={{ ...style }}>
      {props.leftArrow && (
        <div
          onClick={() => (props.redirect ? props.redirect() : text ? navigate(-2) : navigate(-1))}>
          <Icon className={styled["back"]} name="LeftArrow" />
        </div>
      )}
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
