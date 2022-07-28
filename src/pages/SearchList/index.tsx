import { useParams, useNavigate, useSearchParams } from "react-router-dom"
import styled from "./SearchList.module.scss"
import cx from "classnames"
import Backdrop from "components/Layout/Backdrop"
import {
  useGetSearchListLazyQuery,
  useGetPopularKeywordsQuery,
} from "./SearchList.graphql.generated"
import { useEffect } from "react"

const SearchList = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { text } = useParams()
  const navigate = useNavigate()
  const tag = searchParams.get("tag")

  const [loadQuery, query] = useGetSearchListLazyQuery()
  const getPopularKeywords = useGetPopularKeywordsQuery()

  useEffect(() => {
    if (!(tag || text)) return
    loadQuery({
      variables: {
        contains: `${tag || text}`,
      },
    })
  }, [text, searchParams, loadQuery])

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
        {query?.data?.cases?.edges && query?.data?.cases?.edges?.length > 0 ? (
          query?.data?.cases?.edges.map((el, idx) => (
            <div
              key={el.node?.id}
              className={cx(
                styled.cell,
                styled[["a-style", "b-style", "c-style", "d-style", "e-style", "f-style"][idx % 6]],
              )}>
              <img src={el.node?.afterImage || ""} />
              <div className={styled.cover} />
              <div className={styled.title}>{el.node?.title}</div>
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
