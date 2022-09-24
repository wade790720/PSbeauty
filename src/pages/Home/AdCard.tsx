import styled from "./Home.module.scss"
import { useGo } from "components/Router"
import { useLayoutEffect, useState, useRef } from "react"

export type AdCardProps = {
  id: string
  title: string
  content: string
  image: string
} & ReactProps.Component

const WIDTH_SESSION_KEY = "ad-card-width"

const AdCard = ({ ...props }: AdCardProps) => {
  const go = useGo()
  const imageRef = useRef<HTMLDivElement>(null)
  const [imageWidth, setImageWidth] = useState(
    parseInt(sessionStorage.getItem(WIDTH_SESSION_KEY) || "", 10) || 0,
  )

  useLayoutEffect(() => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.clientWidth)
      sessionStorage.setItem(WIDTH_SESSION_KEY, `${imageRef.current.clientWidth}`)
    }
  }, [])

  return (
    <div className={styled["ad-card"]} onClick={() => go.toAdvertisement({ id: props.id })}>
      <div className={styled.title}>{props.title}</div>
      <div className={styled.content}>
        <div className={styled.picture} ref={imageRef} style={{ height: imageWidth }}>
          <img src={props.image} style={{ width: "100%", height: "100%" }} />
        </div>
        <div className={styled.text} dangerouslySetInnerHTML={{ __html: props.content }} />
      </div>
    </div>
  )
}

export default AdCard
