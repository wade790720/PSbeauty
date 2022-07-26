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

  console.log("### images", images)
  return (
    <div className={styled.banner}>
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
              if (item.redirectType === "clinic" && item.clinicId)
                go.toClinicInner({ id: item.clinicId || "", tab: "info" })
              else if (item.redirectType === "case" && item.clinicId && item.targetId)
                go.toClinicCase({ clinicId: item.clinicId, caseId: item.targetId })
              else if (item.redirectType === "doctor" && item.clinicId)
                go.toClinicInner({ id: item.clinicId || "", tab: "medical-team" })
            }}>
            {item && <img src={item?.image} width="100%" height="100%" />}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Banner
