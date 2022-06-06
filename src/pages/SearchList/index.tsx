import styled from "./SearchList.module.scss"
import cx from "classnames"
import Header from "components/Layout/Header"
import Backdrop from "components/Layout/Backdrop"
import SearchBox from "components/SearchBox"

const SearchList = () => {
  return (
    <>
      <Header leftArrow>
        <SearchBox />
      </Header>
      <Backdrop className={styled.wrapper}>
        <div className={styled.filters}>
          <div className={styled.active}>減齡回春計畫</div>
          <div>金藝珍臉部拉提計畫</div>
          <div>白冰冰臉部拉提計畫</div>
          <div>減齡回春計畫2</div>
          <div>金藝珍臉部拉提計畫2</div>
          <div>白冰冰臉部拉提計畫2</div>
        </div>
        <div className={styled.result}>
          <div className={cx(styled.cell, styled["a-style"])}>
            <img src="https://fakeimg.pl/300/" />
            <div className={styled.cover} />
            <div className={styled.title}>平滑臉部與前額</div>
          </div>
          <div className={cx(styled.cell, styled["b-style"])}>
            <img src="https://fakeimg.pl/300/" />
            <div className={styled.cover} />
            <div className={styled.title}>全身諮詢</div>
          </div>
          <div className={cx(styled.cell, styled["c-style"])}>
            <img src="https://fakeimg.pl/300/" />
            <div className={styled.cover} />
            <div className={styled.title}>脂肪填充與矽膠的矽膠的矽膠的矽膠的</div>
          </div>
          <div className={cx(styled.cell, styled["d-style"])}>
            <img src="https://fakeimg.pl/300/" />
            <div className={styled.cover} />
            <div className={styled.title}>隆鼻</div>
          </div>
          <div className={cx(styled.cell, styled["e-style"])}>
            <img src="https://fakeimg.pl/300/" />
            <div className={styled.cover} />
            <div className={styled.title}>臉部拉提</div>
          </div>
          <div className={cx(styled.cell, styled["f-style"])}>
            <img src="https://fakeimg.pl/300/" />
            <div className={styled.cover} />
            <div className={styled.title}>玻尿酸</div>
          </div>
          <div className={cx(styled.cell, styled["a-style"])}>
            <img src="https://fakeimg.pl/300/" />
            <div className={styled.cover} />
            <div className={styled.title}>平滑臉部與前額2</div>
          </div>
          <div className={cx(styled.cell, styled["b-style"])}>
            <img src="https://fakeimg.pl/300/" />
            <div className={styled.cover} />
            <div className={styled.title}>全身諮詢2</div>
          </div>
          <div className={cx(styled.cell, styled["c-style"])}>
            <img src="https://fakeimg.pl/300/" />
            <div className={styled.cover} />
            <div className={styled.title}>脂肪填充與矽膠的矽膠的矽膠的矽膠的2</div>
          </div>
          <div className={cx(styled.cell, styled["d-style"])}>
            <img src="https://fakeimg.pl/300/" />
            <div className={styled.cover} />
            <div className={styled.title}>隆鼻2</div>
          </div>
          <div className={cx(styled.cell, styled["e-style"])}>
            <img src="https://fakeimg.pl/300/" />
            <div className={styled.cover} />
            <div className={styled.title}>臉部拉提2</div>
          </div>
          <div className={cx(styled.cell, styled["f-style"])}>
            <img src="https://fakeimg.pl/300/" />
            <div className={styled.cover} />
            <div className={styled.title}>玻尿酸2</div>
          </div>
        </div>
      </Backdrop>
    </>
  )
}
export default SearchList
