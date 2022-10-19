import styled from "./SearchAll.module.scss"
import cx from "classnames"
import Backdrop from "components/Layout/Backdrop"
import { useGetSearchListAllQuery } from "./SearchAll.graphql.generated"
import { useCallback, useRef, useEffect } from "react"
import { useGo } from "components/Router"
import Header from "components/Layout/Header"
import Toolbars from "containers/Toolbars"
import QueryStatus from "components/QueryStatus"
import { useGetAdImagesQuery } from "graphql/queries/getAdImage.graphql.generated"
import { SortEnumType } from "types/schema"
import Banner from "containers/Banner"
import useElementOnScreen from "hooks/useElementOnScreen"

const SearchListAll = () => {
  const go = useGo()
  const getAdImagesQuery = useGetAdImagesQuery({
    variables: {
      first: 10,
      orderId: SortEnumType.Desc,
      where: "案例輪播",
    },
  })
  const adImages = getAdImagesQuery?.data?.adImages?.edges
    ?.map(el => ({
      image: el.node?.image || "",
      clinicId: el.node?.clinicId || "",
      targetId: el.node?.targetId || "",
      redirectType: el.node?.redirectType,
      sort: el.node?.sort || 0,
    }))
    ?.sort((prev, next) => prev.sort - next.sort)

  const getSearchListAllQuery = useGetSearchListAllQuery({ variables: { after: null } })
  const { data, loading, error } = getSearchListAllQuery
  const edges = data?.cases?.edges || []
  const cursorRef = useRef<string>("")
  const { containerRef, isVisible } = useElementOnScreen({})

  const fetchMore = useCallback(() => {
    const after = edges?.[edges.length - 1]?.cursor || null

    getSearchListAllQuery.fetchMore({
      variables: {
        after,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (
          !after ||
          after === cursorRef?.current ||
          !fetchMoreResult?.cases?.edges ||
          !prevResult?.cases?.edges ||
          prevResult?.cases?.edges.length > edges.length
        )
          return prevResult

        fetchMoreResult.cases.edges = [
          ...(prevResult?.cases?.edges || []),
          ...(fetchMoreResult?.cases?.edges || []),
        ]

        cursorRef.current = after
        return fetchMoreResult
      },
    })
  }, [edges, getSearchListAllQuery])

  useEffect(() => {
    if (isVisible) fetchMore()
  }, [fetchMore, isVisible])

  if (error || getAdImagesQuery.error) return <QueryStatus.Error />

  return (
    <>
      {loading ? (
        <QueryStatus.Loading />
      ) : (
        <>
          <Header title="探索" />
          <Backdrop className={styled.wrapper}>
            <div className={styled.result} style={{ paddingBottom: "80px" }}>
              {adImages && adImages?.length > 0 && (
                <div className={styled.banner}>
                  <Banner images={adImages} />
                </div>
              )}
              {data?.cases?.edges && data?.cases?.edges?.length > 0 ? (
                data?.cases?.edges.map((el, idx) => (
                  <div
                    ref={
                      data?.cases?.edges?.length === idx + 1
                        ? (containerRef as unknown as React.RefObject<HTMLDivElement>)
                        : null
                    }
                    key={el.node?.id}
                    onClick={() =>
                      go.toClinicCase({
                        clinicId: el.node?.clinic?.id || "",
                        caseId: el.node?.id || "",
                      })
                    }
                    className={cx(styled.cell, styled[`${"axxxxxxaxxxx"[idx % 12]}-style`])}>
                    <img src={el.node?.image || ""} />
                    <div className={styled.cover} />
                    <div className={styled.title}>{el.node?.imageText}</div>
                  </div>
                ))
              ) : (
                <div className={styled.empty}>暫無資料顯示</div>
              )}
            </div>
          </Backdrop>
        </>
      )}
      <Toolbars />
    </>
  )
}
export default SearchListAll
