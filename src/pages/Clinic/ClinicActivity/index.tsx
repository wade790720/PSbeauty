import styled from "./ClinicActivity.module.scss"
import Backdrop from "components/Layout/Backdrop"
import Header from "components/Layout/Header"

const ClinicActivity = () => {
  return (
    <>
      <Header leftArrow title="玉辛醫美診所" />
      <Backdrop className={styled.wrapper}>
        <h2>診所活動</h2>
        <div className={styled.pic} />
        <div className={styled.title}>VIP會員方案-玻尿酸享半價優惠</div>
        <div className={styled.content}>
          從台北皮膚科起家，北中南共有十六間醫美診，另外還有四間頂級SPA，旗艦店座落在熱鬧的東區跟台北火車站周遭，網友熱門討論項目大都集中在面部雷射光療，以及肉毒桿菌醫學美容，解決不少有咀嚼肌困擾的愛美女孩煩惱，讓臉部線條更明顯，另外ＸＸ診所也設置「ＸＸ學院」，將醫師與相關工作人員，與設備原廠合作認證課程，相關紀錄都在官網可見，讓消費者更安心{" "}
        </div>
      </Backdrop>
    </>
  )
}
export default ClinicActivity
