import styled from "./ClinicInner.module.scss"
import Icon from "components/Icon"
import Button from "components/Button"
import CaseCard from "components/CaseCard"
import imgBefore from "pages/Member/MemberCollectClinicalCase/Before.png"
import imgAfter from "pages/Member/MemberCollectClinicalCase/After.png"
import Banner from "components/Banner"
import useGo from "components/Router/useGo"
import { useAuth } from "hooks/useAuth"

const ClinicInner = () => {
  const go = useGo()
  const auth = useAuth()

  return (
    <div className={styled.wrapper}>
      <Banner height="214px" />
      <div className={styled.content}>
        <div className={styled.contact}>
          <Icon name="mapPin" />
          <span>台北市大安區仁愛路一段22號3樓</span>
        </div>
        <div className={styled.contact}>
          <Icon name="phone" />
          <span>02-1234-5678</span>
        </div>
        <div className={styled.contact}>
          <Icon name="globeSimple" />
          <span>http://natural.com</span>
        </div>
        <div className={styled.information}>
          <div className={styled.case}>
            <div className={styled.block} />
            案例數 <span>100.2K</span>
          </div>
          <div className={styled.reply}>
            <div className={styled.block} />
            回覆數 <span>10.2K</span>
          </div>
        </div>
      </div>
      <CaseCard
        id="12"
        amount="1.2K"
        isCollected={false}
        title="臉部拉提改善面部線條A"
        clinic="玉辛醫美診所"
        clinicId="12"
        introduction="網友熱門討論項目大都集中在面部雷射光療，以及肉毒桿菌醫學美容，解決不少有咀嚼肌的問題"
        images={[imgBefore, imgAfter]}
        tags={["蘋果肌1", "蘋果肌2", "蘋果肌3", "蘋果肌4", "蘋果肌5"]}
      />
      {!auth.user.clinic && (
        <Button
          className={styled.button}
          onClick={() => go.toChatroom({ id: "62ca5e512448688161c0a4cc" })}>
          <Icon name="chat" className={styled.chat} />
          一對一匿名諮詢
        </Button>
      )}
    </div>
  )
}
export default ClinicInner
