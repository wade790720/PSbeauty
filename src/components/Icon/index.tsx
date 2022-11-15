import React from "react"
import Svg from "./svg"
import cx from "classnames"
import styled from "./Icon.module.scss"

export type IconProps = {
  /**
   * Fill in the icon name.
   */
  name: string
  width?: number
  height?: number
} & ReactProps.WithClassName &
  ReactProps.WithStyle

export const Icon = (props: IconProps) => {
  const camelCased = props.name.replace(/-([a-z])/g, g => g[1].toUpperCase())
  const compName = camelCased.charAt(0).toUpperCase() + camelCased.slice(1)

  const compareIcon: { [key: string]: JSX.Element } = {
    EyeSlash: <Svg.EyeSlash />,
    EyeFill: <Svg.EyeFill />,
    Check: <Svg.Check />,
    Close: <Svg.Close />,
    Cross: <Svg.Cross />,
    PurpleCross: <Svg.PurpleCross />,
    LeftArrow: <Svg.LeftArrow />,
    Chat: <Svg.Chat />,
    Search: <Svg.Search />,
    NotePencil: <Svg.NotePencil />,
    Funnel: <Svg.Funnel />,
    BookmarkFill: <Svg.BookmarkFill />,
    BookmarkSimple: <Svg.BookmarkSimple />,
    MapPin: <Svg.MapPin />,
    Phone: <Svg.Phone />,
    GlobeSimple: <Svg.GlobeSimple />,
    CaretDown: <Svg.CaretDown />,
    Info: <Svg.Info />,
    Edit: <Svg.Edit />,
    Share: <Svg.Share />,
  }

  return (
    <div
      className={cx({ [styled.arrowWrapper]: compName.includes("Arrow") }, props.className)}
      style={{ display: "flex", ...props.style }}>
      {React.cloneElement(compareIcon[compName], {
        ...(props.width && { width: props.width }),
        ...(props.height && { height: props.height }),
      })}
    </div>
  )
}

export default Icon
