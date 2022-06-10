import { useRef } from "react"
import styled from "./SearchBox.module.scss"
import SearchBar from "components/SearchBar"

export type SearchBoxProps = {
  onSubmit?: (text: string) => void
} & ReactProps.Component

const SearchBox = ({ ...props }: SearchBoxProps) => {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <div className={styled.wrapper}>
      <SearchBar variant="white" ref={ref} />
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
