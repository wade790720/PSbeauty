import styled from "./SearchAll.module.scss"
import cx from "classnames"
import Backdrop from "components/Layout/Backdrop"
import { useGetSearchListAllQuery } from "./SearchAll.graphql.generated"
import { useGo } from "components/Router"
import Header from "components/Layout/Header"
import Toolbars from "containers/Toolbars"

const SearchListAll = () => {
  const go = useGo()
  const { data } = useGetSearchListAllQuery()

  return (
    <>
      <Header title="探索" />
      <Backdrop className={styled.wrapper}>
        <div className={styled.result} style={{ paddingBottom: "80px" }}>
          {data?.cases?.edges && data?.cases?.edges?.length > 0 ? (
            data?.cases?.edges.map((el, idx) => (
              <div
                key={el.node?.id}
                onClick={() =>
                  go.toClinicCase({
                    clinicId: el.node?.clinic?.id || "",
                    caseId: el.node?.id || "",
                  })
                }
                className={cx(styled.cell, styled[`${"axxxxxxaxxxx"[idx % 12]}-style`])}>
                <img src={el.node?.image || ""} />
                <div className={styled.cover} />
                <div className={styled.title}>{el.node?.imageText}</div>
              </div>
            ))
          ) : (
            <div className={styled.empty}>暫無資料顯示</div>
          )}
        </div>
      </Backdrop>
      <Toolbars />
    </>
  )
}
export default SearchListAll
