import styled from "./ClinicalCaseList.module.scss"
import Icon from "components/Icon"
import BottomNavigation from "components/BottomNavigation"
import SearchBar from "components/SearchBar"

const ClinicalCaseList = () => {
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

        <div className={styled.consultation}>
          <Icon name="funnel" className={styled.funnel} />
          分類篩選
        </div>
      </div>
      <BottomNavigation />
    </>
  )
}
export default ClinicalCaseList
