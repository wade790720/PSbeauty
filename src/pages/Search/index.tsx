import styled from "./Search.module.scss"
import Header from "components/Layout/Header"
import SearchBox from "components/SearchBox"
import Backdrop from "components/Layout/Backdrop"
import { ReactComponent as Delete } from "./Delete.svg"

const Search = () => {
  const list = ["多久打一次玻尿酸", "疤痕淡化", "全臉醫美", "隆鼻", "自體脂肪移植"]

  return (
    <>
      <Header leftArrow>
        <SearchBox />
      </Header>
      <Backdrop className={styled.wrapper}>
        <div className={styled.title}>歷史搜尋</div>
        <Delete className={styled.delete} />
        {list.map((text, i) => {
          return (
            <div key={`text-${i}`} className={styled.text}>
              {text}
            </div>
          )
        })}
        <div className={styled.more}>顯示更多</div>
      </Backdrop>
    </>
  )
}
export default Search
