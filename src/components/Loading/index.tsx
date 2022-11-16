import loadingImage from "./loading.png"
import styled from "./Loading.module.scss"
import cx from "classnames"

const AnimationLoading = () => {
  return (
    <div className={styled.wrapper}>
      <img src={loadingImage} />
    </div>
  )
}

const StaticLoading = () => {
  return (
    <div className={cx(styled.wrapper, styled.static)}>
      <img src={loadingImage} />
    </div>
  )
}

const Loading = Object.assign(AnimationLoading, {
  Static: StaticLoading,
})

export default Loading
