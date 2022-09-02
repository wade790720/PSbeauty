import { useState } from "react"
import styled from "./Search.module.scss"
import Backdrop from "components/Layout/Backdrop"
import { useGo } from "components/Router"
import { ReactComponent as Delete } from "./Delete.svg"
import Icon from "components/Icon"
import { useGetPopularKeywordsQuery } from "graphql/queries/getPopularKeywords.graphql.generated"

const STORAGE_KEY = "search-history"
const getHistories = (): string[] => {
  const data = localStorage.getItem(STORAGE_KEY)
  try {
    if (data) {
      const result = JSON.parse(data)
      return result.length > 0 ? result : []
    }
  } catch {
    /* 解析失敗 */
  }
  return []
}

const saveHistories = (list: string[]) => {
  const result = list.filter((value, index, arr) => arr.indexOf(value) === index).slice(0, 10)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(result))
  return result
}

const Search = () => {
  const go = useGo()
  const [list, setList] = useState(getHistories())
  const getPopularKeywords = useGetPopularKeywordsQuery()

  return (
    <Backdrop className={styled.wrapper}>
      <div className={styled.filters}>
        {getPopularKeywords?.data?.popularKeywords?.keywords?.map((el, idx) => (
          <div
            key={`keywords-${idx}`}
            onClick={() => {
              go.toSearchListWithQuery(el || "")
            }}>
            {el}
          </div>
        ))}
      </div>

      <div className={styled.title}>
        <span>歷史搜尋</span>
        {list.length > 0 && (
          <Delete className={styled.delete} onClick={() => setList(saveHistories([]))} />
        )}
      </div>

      {list.map((text, i) => {
        return (
          <div key={`text-${i}`} className={styled.text} onClick={() => go.toSearchList(text)}>
            <Icon name="search" className={styled.search} />
            {text}
          </div>
        )
      })}
    </Backdrop>
  )
}
export default Search
