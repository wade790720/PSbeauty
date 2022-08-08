import { useRef } from "react"
import { Outlet, useSearchParams, useParams } from "react-router-dom"
import Header from "components/Layout/Header"
import styled from "./SearchWrapper.module.scss"
import SearchBar from "containers/SearchBar"
import { useGo } from "components/Router"

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

const SearchWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { text: originText } = useParams()
  const ref = useRef<HTMLInputElement | null>(null)
  const tag = searchParams.get("tag")
  const go = useGo()

  const onSubmit = (text: string) => {
    const list = getHistories()
    list.unshift(text)
    saveHistories(list)
    if (!tag) {
      go.toSearchList(text, { replace: !!originText })
    } else {
      setSearchParams({ tag: text })
    }
  }

  return (
    <>
      <Header leftArrow>
        <div className={styled.wrapper}>
          <SearchBar variant="white" ref={ref} />
          <div
            className={styled.submit}
            onClick={() => {
              if (ref.current) onSubmit(ref.current.value)
            }}>
            送出
          </div>
        </div>
      </Header>
      <Outlet />
    </>
  )
}
export default SearchWrapper
