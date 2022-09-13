import { useParams, useNavigate, useSearchParams } from "react-router-dom"
import styled from "./SearchList.module.scss"
import cx from "classnames"
import Backdrop from "components/Layout/Backdrop"
import { useGetSearchListLazyQuery } from "./SearchList.graphql.generated"
import { useGetPopularKeywordsQuery } from "graphql/queries/getPopularKeywords.graphql.generated"
import { useEffect } from "react"
import { useGo } from "components/Router"
import QueryStatus from "components/QueryStatus"

const SearchList = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { text } = useParams()
  const navigate = useNavigate()
  const go = useGo()
  const tag = searchParams.get("tag")

  const [loadQuery, { data, loading, error }] = useGetSearchListLazyQuery()
  const getPopularKeywords = useGetPopularKeywordsQuery()

  useEffect(() => {
    if (!(tag || text)) return
    loadQuery({
      variables: {
        contains: `${tag || text}`,
      },
    })
  }, [text, searchParams, loadQuery])

  if (loading) return <QueryStatus.Loading />
  if (error) return <QueryStatus.Error />

  return (
    <Backdrop className={styled.wrapper}>
      <div className={styled.filters}>
        {getPopularKeywords?.data?.popularKeywords?.keywords?.map((el, idx) => (
          <div
            className={cx({ [styled.active]: tag === el })}
            key={`keywords-${idx}`}
            onClick={() => {
              if (el) {
                if (tag === el) {
                  navigate(-1)
                } else {
                  setSearchParams({ tag: el }, { replace: !!tag })
                }
              }
            }}>
            {el}
          </div>
        ))}
      </div>
      <div className={styled.result}>
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
              <div className={styled.title}>
                {el.node?.imageText?.includes(tag || text || "") && el.node?.imageText}
              </div>
            </div>
          ))
        ) : (
          <div className={styled.empty}>暫無資料顯示</div>
        )}
      </div>
    </Backdrop>
  )
}
export default SearchList
