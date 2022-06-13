import styled from "./Banner.module.scss"
// import { useGo } from "components/Router"
import Carousel from "nuka-carousel"

type BannerProps = {
  height?: string
}

const Banner = ({ height = "132px" }: BannerProps) => {
  // const go = useGo()

  const src = ["banner-item1", "banner-item2", "banner-item3", "banner-item4", "banner-item5"]

  return (
    <div className={styled.banner}>
      <Carousel
        autoplay={true}
        autoplayInterval={2000}
        wrapAround={true}
        withoutControls={true}
        cellSpacing={12}>
        {src.map(item => (
          <div key={item} className={styled["banner-item"]} style={{ height: height }}>
            {item}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Banner
