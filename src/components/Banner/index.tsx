import styled from "./Banner.module.scss"
import { useGo } from "components/Router"
import Carousel from "nuka-carousel"

type BannerProps = {
  height?: string
  images?: {
    id?: string
    image?: string | null | undefined
  }[]
}

const Banner = ({ height = "132px", images = [] }: BannerProps) => {
  const go = useGo()

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
            className={styled.slide}
            key={item?.id}
            style={{ height }}
            onClick={() => {
              go.toClinicInner({ id: item?.id || "", tab: "info" })
            }}>
            {item && <img src={item?.image || ""} width="100%" height="100%" />}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Banner
