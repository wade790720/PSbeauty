import styled from "./Banner.module.scss"
// import { useGo } from "components/Router"
import Carousel from "nuka-carousel"

type BannerProps = {
  height?: string
  images?: (string | null | undefined)[] | null
}

const Banner = ({ height = "132px", images = [] }: BannerProps) => {
  // const go = useGo()

  return (
    <div className={styled.banner}>
      <Carousel
        autoplay={true}
        autoplayInterval={2000}
        wrapAround={true}
        withoutControls={true}
        cellSpacing={12}>
        {images?.map(item => (
          <div key={item} className={styled["banner-item"]} style={{ height }}>
            {item && <img src={item} width="100%" height="100%" />}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Banner
