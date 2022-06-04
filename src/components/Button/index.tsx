import React, { PropsWithChildren } from "react"
import cx from "classnames"
import styled from "./Button.module.scss"

const VARIANT = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TEXT: "text",
  TRANSPARENT: "transparent",
} as const

export type ButtonProps = {
  /**
   * Specify the type of the
   */
  variant?: typeof VARIANT[keyof typeof VARIANT]
  /**
   * The button's key for the ButtonGroup.
   */
  eventKey?: ReactProps.EventKey
  /**
   * Provide an optional function to be called when the button element is clicked
   */
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    eventKey?: { eventKey?: ReactProps.EventKey },
  ) => void
} & ReactProps.Component

const Button = ({
  variant = "primary",
  className,
  children = "Click",
  eventKey,
  onClick,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={cx(styled.wrapper, styled[variant], className)}
      style={props.style}
      onClick={e => {
        onClick && onClick(e, { eventKey: eventKey })
      }}
      {...props}>
      {children}
    </button>
  )
}

export default Button