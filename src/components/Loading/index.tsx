import loadingImage from "./loading.png"
import styled from "./Loading.module.scss"

const Loading = () => {
  return (
    <div className={styled.wrapper}>
      <img src={loadingImage} />
    </div>
  )
}
export default Loading
