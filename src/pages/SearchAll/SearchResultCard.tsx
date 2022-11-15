import cx from "classnames"
import { useEffect } from "react"
import styled from "./SearchResultCard.module.scss"
import useGo from "components/Router/useGo"
import useElementOnScreen from "hooks/useElementOnScreen"

export type SearchResultCardProps = {
  id: string
  idx: number
  clinicId: string
  imageSrc: string
  imageText: string
  last: boolean
  fetchMore?: () => void
}

const SearchResultCard = ({ ...props }: SearchResultCardProps) => {
  const go = useGo()
  const { containerRef, isVisible } = useElementOnScreen({})

  useEffect(() => {
    if (props.last && isVisible && props.fetchMore) props.fetchMore()
  }, [props.last, props.fetchMore, isVisible])

  return (
    <div
      ref={props.last ? (containerRef as unknown as React.RefObject<HTMLDivElement>) : null}
      key={props.id}
      onClick={() =>
        go.toClinicCase({
          clinicId: props.clinicId,
          caseId: props.id,
        })
      }
      className={cx(styled.wrapper, styled[`${"axxxxxxaxxxx"[props.idx % 12]}-style`])}>
      <img src={props.imageSrc || ""} />
      <div className={styled.cover} />
      <div className={styled.title}>{props.imageText}</div>
    </div>
  )
}

export default SearchResultCard
