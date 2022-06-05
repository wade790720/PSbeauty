import styled from "./SearchBar.module.scss"
import Form, { InputGroup, Prepend } from "components/Form"
import Icon from "components/Icon"

const SearchBar = () => {
  return (
    <div className={styled.wrapper}>
      <InputGroup className={styled["input-group"]}>
        <Prepend className={styled["search-icon"]}>
          <Icon name="search" />
        </Prepend>
        <Form.Input placeholder="搜尋關鍵字" className={styled.input} />
      </InputGroup>
    </div>
  )
}

export default SearchBar
