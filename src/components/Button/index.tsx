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
   * Specify whether the Button is currently selected
   */
  selected?: boolean
  /**
   * The button's key for the ButtonGroup.
   */
  eventKey?: ReactProps.EventKey
  /**
   * The button is a submit/text button
   */
  type?: "submit" | "button"
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
  selected = false,
  children = "Click",
  eventKey,
  onClick,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={cx(styled.wrapper, styled[variant], { [styled.selected]: selected }, className)}
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
