import { useState } from "react"
import { useParams } from "react-router-dom"
import { useGo } from "components/Router"
import styled from "./SearchList.module.scss"
import cx from "classnames"
import Backdrop from "components/Layout/Backdrop"
import {
  useGetSearchListLazyQuery,
  useGetPopularKeywordsQuery,
} from "./SearchList.graphql.generated"
import { useEffect } from "react"

const SearchList = () => {
  const { id } = useParams()
  const go = useGo()

  const [activeKeyword, setActiveKeyword] = useState("")
  const [loadQuery, query] = useGetSearchListLazyQuery()
  const getPopularKeywords = useGetPopularKeywordsQuery()

  useEffect(() => {
    if (!id) return
    loadQuery({
      variables: {
        contains: id,
      },
    })
    setActiveKeyword(id)
  }, [id, loadQuery])

  return (
    <Backdrop className={styled.wrapper}>
      <div className={styled.filters}>
        {getPopularKeywords?.data?.popularKeywords?.keywords?.map((el, idx) => (
          <div
            className={cx({ [styled.active]: activeKeyword === el })}
            key={`keywords-${idx}`}
            onClick={() => {
              if (el) {
                setActiveKeyword(el)
                go.toSearchList(el)
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
