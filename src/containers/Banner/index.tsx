import styled from "./Banner.module.scss"
import { useGo } from "components/Router"
import Carousel from "nuka-carousel"

type BannerProps = {
  height?: string
  images?: {
    image: string
    clinicId: string
    targetId: string
    redirectType: string | null | undefined
  }[]
}

const Banner = ({ height = "132px", images = [] }: BannerProps) => {
  const go = useGo()

  return (
    <div className={styled.banner}>
      {images.length === 0 && (
        <div className={styled.slide} style={{ height, background: "#aab0b233" }} />
      )}
      <Carousel
        autoplay={true}
        autoplayInterval={5000}
        wrapAround={true}
        withoutControls={true}
        cellSpacing={12}>
        {images?.map(item => (
          <div
            key={item.clinicId}
            className={styled.slide}
            style={{ height }}
            onClick={() => {
              if (!item.clinicId) return

              if (item.redirectType === "clinic")
                go.toClinicInner({ id: item.clinicId, tab: "info" })
              else if (item.redirectType === "case" && item.targetId)
                go.toClinicCase({ clinicId: item.clinicId, caseId: item.targetId })
              else if (item.redirectType === "doctor")
                go.toClinicInner({ id: item.clinicId, tab: "medical-team" })
              else if (item.redirectType === "activity" && item.targetId)
                go.toClinicActivity({ clinicId: item.clinicId, activityId: item.targetId })
            }}>
            {item && <img src={item?.image} width="100%" height="100%" />}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Banner
