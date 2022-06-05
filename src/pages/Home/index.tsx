import styled from "./Home.module.scss"
import Form, { InputGroup, Prepend } from "components/Form"
import Icon from "components/Icon"
import BottomNavigation from "components/BottomNavigation"

const Home = () => {
  return (
    <>
      <div className={styled.wrapper}>
        <div className={styled.header}>
          <InputGroup className={styled["input-group"]}>
            <Prepend className={styled["search-icon"]}>
              <Icon name="search" />
            </Prepend>
            <Form.Input placeholder="搜尋關鍵字" className={styled.input} />
          </InputGroup>
          <Icon name="chat" className={styled["chat-icon"]} />
        </div>
        <div className={styled.banner}>
          <div className={styled["banner-item"]}>banner-item</div>
          <div className={styled["banner-item"]}>banner-item</div>
        </div>
        <div className={styled["ad-card"]}>
          <div className={styled.title}>全新臉部拉提計畫</div>
          <div className={styled.content}>
            <div className={styled.pic} />
            <div className={styled.text}>
              網友熱門討論項目大都集中在面部雷射光療，以及肉毒桿菌醫學美容，解決不少有咀嚼肌困擾的愛美女孩煩惱，讓臉...
            </div>
          </div>
        </div>
        <div className={styled["ad-card"]}>
          <div className={styled.title}>全新臉部拉提計畫</div>
          <div className={styled.content}>
            <div className={styled.pic} />
            <div className={styled.text}>
              網友熱門討論項目大都集中在面部雷射光療，以及肉毒桿菌醫學美容，解決不少有咀嚼肌困擾的愛美女孩煩惱，讓臉...
            </div>
          </div>
        </div>
        <div className={styled["ad-card"]}>
          <div className={styled.title}>全新臉部拉提計畫</div>
          <div className={styled.content}>
            <div className={styled.pic} />
            <div className={styled.text}>
              網友熱門討論項目大都集中在面部雷射光療，以及肉毒桿菌醫學美容，解決不少有咀嚼肌困擾的愛美女孩煩惱，讓臉...
            </div>
          </div>
        </div>
        <div className={styled["ad-card"]}>
          <div className={styled.title}>全新臉部拉提計畫</div>
          <div className={styled.content}>
            <div className={styled.pic} />
            <div className={styled.text}>
              網友熱門討論項目大都集中在面部雷射光療，以及肉毒桿菌醫學美容，解決不少有咀嚼肌困擾的愛美女孩煩惱，讓臉...
            </div>
          </div>
        </div>
        <div className={styled.consultation}>
          <Icon name="notePencil" className={styled.notePencil} />
          匿名諮詢
        </div>
      </div>
      <BottomNavigation />
    </>
  )
}
export default Home
