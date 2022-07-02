import styled from "./Home.module.scss"
import { useGo } from "components/Router"

export type AdCardProps = {
  title: string
  content: string
  image: string
} & ReactProps.Component

const AdCard = ({ ...props }: AdCardProps) => {
  const go = useGo()

  return (
    <div className={styled["ad-card"]} onClick={() => go.toAdvertisement({ id: "face" })}>
      <div className={styled.title}>{props.title}</div>
      <div className={styled.content}>
        <div className={styled.pic}>
          <img src={props.image} style={{ width: "100%", height: "100%" }} />
        </div>
        <div className={styled.text} dangerouslySetInnerHTML={{ __html: props.content }} />
      </div>
    </div>
  )
}

export default AdCard
