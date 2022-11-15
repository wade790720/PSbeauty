import styled from "./SearchAll.module.scss"
import Backdrop from "components/Layout/Backdrop"
import {
  useGetSearchListAllQuery,
  useGetSpecifyCasesLazyQuery,
} from "./SearchAll.graphql.generated"
import useState from "react-usestateref"
import { useCallback, useEffect } from "react"
import Header from "components/Layout/Header"
import Toolbars from "containers/Toolbars"
import SubjectFilter from "containers/SubjectFilter"
import { ChosenItemType } from "containers/SubjectFilter/Clinic"
import Icon from "components/Icon"
import Button from "components/Button"
import QueryStatus from "components/QueryStatus"
import { useGetAdImagesQuery } from "graphql/queries/getAdImage.graphql.generated"
import { useGetTopCategoriesLazyQuery } from "pages/Home/Consulting/Consulting.graphql.generated"
import { SortEnumType } from "types/schema"
import Banner from "containers/Banner"
import PullToRefresh from "react-simple-pull-to-refresh"
import SearchResultCard from "./SearchResultCard"

export type SearchEdgeArray = Array<{
  cursor: string
  node?: {
    id?: string | null
    title?: string | null
    image?: string | null
    imageText?: string | null
    clinic?: { id?: string | null } | null
  } | null
}> | null

const SearchListAll = () => {
  const [open, setOpen] = useState(false)
  const [filterValue, setFilterValue, filterValueRef] = useState<ChosenItemType | null>(null)
  const [searchListAll, setSearchListAll, searchListAllRef] = useState<SearchEdgeArray>([])
  const [specifyList, setSpecifyList, specifyListRef] = useState<SearchEdgeArray>([])

  const getAdImagesQuery = useGetAdImagesQuery({
    variables: {
      first: 10,
      orderId: SortEnumType.Desc,
      where: "案例輪播",
    },
  })
  const getSearchListAllQuery = useGetSearchListAllQuery({
    variables: { after: null },
    onCompleted: data => {
      const edges = [...(data?.cases?.edges || [])]
      setSearchListAll([...(searchListAllRef?.current || []), ...edges])
    },
  })
  const [loadGetSpecifyCasesLazy, getSpecifyCasesLazy] = useGetSpecifyCasesLazyQuery({
    fetchPolicy: "no-cache",
    onCompleted: data => {
      const edges = [...(data?.cases?.edges || [])]
      setSpecifyList([...(specifyListRef?.current || []), ...edges])
    },
  })
  const [loadQuery, query] = useGetTopCategoriesLazyQuery()

  const refetchSearchListAllQuery = useCallback(() => {
    getSearchListAllQuery.refetch().then(res => {
      setSearchListAll([])
      const edges = [...(res?.data?.cases?.edges || [])]
      setSearchListAll([...edges])
    })
  }, [getSearchListAllQuery])

  const refetchSpecialCasesQuery = useCallback(() => {
    if (filterValueRef.current) {
      setSpecifyList([])
      loadGetSpecifyCasesLazy({
        variables: {
          searchKeys: filterValueRef.current.map(el => ({ eq: el.id || "" })),
        },
      })
    }
  }, [filterValueRef, loadGetSpecifyCasesLazy])

  const data = filterValue ? specifyList : searchListAll
  const count = data?.length || 0
  const adImages = getAdImagesQuery?.data?.adImages?.edges
    ?.map(el => ({
      image: el.node?.image || "",
      clinicId: el.node?.clinicId || "",
      targetId: el.node?.targetId || "",
      redirectType: el.node?.redirectType,
      sort: el.node?.sort || 0,
    }))
    ?.sort((prev, next) => prev.sort - next.sort)

  const fetchMore = useCallback(() => {
    if (filterValue) {
      if (getSpecifyCasesLazy?.data?.cases?.pageInfo?.hasNextPage) {
        const edges = getSpecifyCasesLazy?.data?.cases?.edges
        const after = edges?.[edges.length - 1]?.cursor || null
        loadGetSpecifyCasesLazy({
          variables: {
            searchKeys: filterValue.map(el => ({ eq: el.id || "" })),
            after,
          },
        })
      }
    } else {
      if (getSearchListAllQuery?.data?.cases?.pageInfo?.hasNextPage) {
        const edges = getSearchListAllQuery?.data?.cases?.edges
        const after = edges?.[edges.length - 1]?.cursor || null
        getSearchListAllQuery.fetchMore({
          variables: {
            after,
          },
          updateQuery: (__, { fetchMoreResult }) => {
            return fetchMoreResult
          },
        })
      }
    }
  }, [filterValue, getSpecifyCasesLazy, getSearchListAllQuery])

  const refresh = useCallback(() => {
    getAdImagesQuery.refetch({
      first: 10,
      orderId: SortEnumType.Desc,
      where: "案例輪播",
    })
    if (filterValue) {
      refetchSpecialCasesQuery()
    } else {
      refetchSearchListAllQuery()
    }
  }, [filterValue, getAdImagesQuery, refetchSpecialCasesQuery, refetchSearchListAllQuery])

  useEffect(() => {
    if (!open) return
    loadQuery()
  }, [open])

  if (getSpecifyCasesLazy.error || getSearchListAllQuery.error || getAdImagesQuery.error) {
    return <QueryStatus.Error />
  }

  return (
    <>
      {getSpecifyCasesLazy.loading && getSearchListAllQuery.loading && getAdImagesQuery.loading ? (
        <QueryStatus.Loading />
      ) : (
        <>
          <Header title="探索" />
          <Backdrop className={styled.wrapper}>
            <div style={{ paddingBottom: "105px" }}>
              <PullToRefresh onRefresh={async () => refresh()}>
                <div className={styled.result}>
                  {adImages && adImages?.length > 0 && (
                    <div className={styled.banner}>
                      <Banner images={adImages} />
                    </div>
                  )}
                  {count > 0 ? (
                    data?.map((el, idx) => (
                      <SearchResultCard
                        id={el.node?.id || ""}
                        key={el.node?.id}
                        idx={idx}
                        clinicId={el.node?.clinic?.id || ""}
                        imageSrc={el.node?.image || ""}
                        imageText={el.node?.imageText || ""}
                        last={count - 1 === idx}
                        fetchMore={() => fetchMore()}
                      />
                    ))
                  ) : (
                    <div className={styled.empty}>暫無資料顯示</div>
                  )}
                </div>
              </PullToRefresh>
            </div>
            <div className={styled.filter}>
              <Button className={styled.button} onClick={() => setOpen(true)}>
                <Icon name="funnel" className={styled.funnel} />
                分類篩選
              </Button>
              <SubjectFilter
                open={open}
                onClose={() => {
                  setOpen(false)
                }}
                getValue={value => {
                  if (value.length === 0) {
                    setFilterValue(null)
                    return
                  } else {
                    setFilterValue(value)
                    refetchSpecialCasesQuery()
                  }
                }}
                topCategoriesQuery={query}
                defaultValue={filterValue || []}
              />
            </div>
          </Backdrop>
        </>
      )}
      <Toolbars />
    </>
  )
}
export default SearchListAll
