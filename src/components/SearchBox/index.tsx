import { useRef } from "react"
import styled from "./SearchBox.module.scss"
import { ReactComponent as Search } from "./svg/Search.svg"
import { ReactComponent as Cross } from "./svg/Cross.svg"

export type SearchBoxProps = {
  onSubmit?: (text: string) => void
} & ReactProps.Component

const SearchBox = ({ ...props }: SearchBoxProps) => {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <div className={styled.wrapper}>
      <div className={styled.input}>
        <Search />
        <input ref={ref} />
        <Cross />
      </div>
      <div
        className={styled.submit}
        onClick={() => {
          if (props.onSubmit && ref.current) {
            props.onSubmit(ref.current.value)
          }
        }}>
        送出
      </div>
    </div>
  )
}
export default SearchBox
