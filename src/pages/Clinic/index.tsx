import styled from "./Clinic.module.scss"
import Icon from "components/Icon"
import BottomNavigation from "components/BottomNavigation"
import SearchBar from "components/SearchBar"

const Clinic = () => {
  return (
    <>
      <div className={styled.wrapper}>
        <div className={styled.header}>
          <SearchBar />
          <Icon name="chat" className={styled["chat-icon"]} />
        </div>
        <div className={styled.banner}>
          <div className={styled["banner-item"]}>banner-item</div>
          <div className={styled["banner-item"]}>banner-item</div>
        </div>
        <div className={styled.clinic}>
          <div className={styled.title}>玉辛醫美診所</div>
          <div className={styled["sub-title"]}>台北市大安區</div>
          <div className={styled.content}>
            <div className={styled.case}>
              <div className={styled.block} />
              案例數 <span>100.2K</span>
            </div>
            <div className={styled.reply}>
              <div className={styled.block} />
              回覆數 <span>100.2K</span>
            </div>
          </div>
        </div>
        <div className={styled.clinic}>
          <div className={styled.title}>玉辛醫美診所</div>
          <div className={styled["sub-title"]}>台北市大安區</div>
          <div className={styled.content}>
            <div className={styled.case}>
              <div className={styled.block} />
              案例數 <span>100.2K</span>
            </div>
            <div className={styled.reply}>
              <div className={styled.block} />
              回覆數 <span>100.2K</span>
            </div>
          </div>
        </div>
        <div className={styled.clinic}>
          <div className={styled.title}>玉辛醫美診所</div>
          <div className={styled["sub-title"]}>台北市大安區</div>
          <div className={styled.content}>
            <div className={styled.case}>
              <div className={styled.block} />
              案例數 <span>100.2K</span>
            </div>
            <div className={styled.reply}>
              <div className={styled.block} />
              回覆數 <span>100.2K</span>
            </div>
          </div>
        </div>
        <div className={styled.clinic}>
          <div className={styled.title}>玉辛醫美診所</div>
          <div className={styled["sub-title"]}>台北市大安區</div>
          <div className={styled.content}>
            <div className={styled.case}>
              <div className={styled.block} />
              案例數 <span>100.2K</span>
            </div>
            <div className={styled.reply}>
              <div className={styled.block} />
              回覆數 <span>100.2K</span>
            </div>
          </div>
        </div>
        <div className={styled.clinic}>
          <div className={styled.title}>玉辛醫美診所</div>
          <div className={styled["sub-title"]}>台北市大安區</div>
          <div className={styled.content}>
            <div className={styled.case}>
              <div className={styled.block} />
              案例數 <span>100.2K</span>
            </div>
            <div className={styled.reply}>
              <div className={styled.block} />
              回覆數 <span>100.2K</span>
            </div>
          </div>
        </div>
        <div className={styled.consultation}>
          <Icon name="funnel" className={styled.funnel} />
          地區篩選
        </div>
      </div>
      <BottomNavigation />
    </>
  )
}
export default Clinic
