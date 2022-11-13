import styled from "./Clinic.module.scss"
import Icon from "components/Icon"
import Toolbars from "containers/Toolbars"
import SearchBar from "containers/SearchBar"
import Button from "components/Button"
import ClinicCard from "./ClinicCard"
import useState from "react-usestateref"
import { useRef, useEffect, useCallback } from "react"
import { useAuth } from "hooks/useAuth"
import DistrictsFilter, { RegionProps } from "./DistrictsFilter"
import Banner from "containers/Banner"
import QueryStatus from "components/QueryStatus"
import { useGetAdImagesQuery } from "graphql/queries/getAdImage.graphql.generated"
import { useGetMemberInboxLazyQuery } from "pages/Member/MemberInbox/MemberInbox.graphql.generated"
import { SortEnumType } from "types/schema"
import {
  useGetClinicsQuery,
  useGetClinicsSearchLazyQuery,
  GetClinicsQuery,
} from "./ClinicCard.graphql.generated"
import useGo from "components/Router/useGo"
import PullToRefresh from "react-simple-pull-to-refresh"

export type ClinicEdgeArray = Array<{
  cursor: string
  node?: {
    consultReplyCount: number
    caseCount: number
    county?: string | null
    town?: string | null
    name?: string | null
    id?: string | null
  } | null
}> | null

const Clinic = () => {
  const ref = useRef<HTMLInputElement | null>(null)
  const [openFilter, setOpenFilter] = useState(false)
  const [searchValue, setSearchValue, searchValueRef] = useState<RegionProps | null>(null)
  const [sortClinicQuery, setSortClinicQuery, sortClinicRef] = useState<ClinicEdgeArray>([])
  const [searchClinicQuery, setSearchClinicQuery, searchClinicRef] = useState<ClinicEdgeArray>([])
  const auth = useAuth()
  const go = useGo()

  const getAdImagesQuery = useGetAdImagesQuery({
    variables: {
      first: 10,
      orderId: SortEnumType.Desc,
      where: "診所輪播",
    },
  })
  const getClinicsQuery = useGetClinicsQuery({
    onCompleted: data => {
      const edges = [...(data?.clinics?.edges || [])]
      edges.sort(() => Math.random() - 0.5)
      setSortClinicQuery([...(sortClinicRef?.current || []), ...edges])
    },
  })
  const [loadGetClinicsQuerySearch, getClinicsQuerySearch] = useGetClinicsSearchLazyQuery({
    fetchPolicy: "no-cache",
    onCompleted: data => {
      const edges = [...(data?.clinics?.edges || [])]
      setSearchClinicQuery([...(searchClinicRef?.current || []), ...edges])
    },
  })

  const refreshClinicsQuery = useCallback(() => {
    getClinicsQuery.refetch().then(res => {
      setSortClinicQuery([])
      const edges = [...(res?.data?.clinics?.edges || [])]
      edges.sort(() => Math.random() - 0.5)
      setSortClinicQuery([...edges])
    })
  }, [getClinicsQuery])
  const refetchClinicsQuerySearch = useCallback(() => {
    if (searchValueRef.current) {
      setSearchClinicQuery([])
      loadGetClinicsQuerySearch({
        variables: {
          county: searchValueRef.current
            .map(el => el.county)
            .filter((value, index, self) => self.indexOf(value) === index),
          town: searchValueRef.current.map(el => el.town),
        },
      })
    }
  }, [searchValueRef, loadGetClinicsQuerySearch])
  const [loadMemberInboxQuery, getMemberInboxQuery] = useGetMemberInboxLazyQuery()

  const data = searchValue ? searchClinicQuery : sortClinicQuery
  const count = data?.length || 0
  const consults = getMemberInboxQuery.data?.me?.consults || []
  const adImages = getAdImagesQuery?.data?.adImages?.edges
    ?.map(el => ({
      image: el.node?.image || "",
      clinicId: el.node?.clinicId || "",
      targetId: el.node?.targetId || "",
      redirectType: el.node?.redirectType,
      sort: el.node?.sort || 0,
    }))
    ?.sort((prev, next) => prev.sort - next.sort)

  useEffect(() => {
    if (auth.user.id) {
      loadMemberInboxQuery()
    }
  }, [auth.user.id, loadMemberInboxQuery])

  const fetchMore = useCallback(() => {
    if (searchValue) {
      if (getClinicsQuerySearch?.data?.clinics?.pageInfo?.hasNextPage) {
        const edges = getClinicsQuerySearch?.data?.clinics?.edges
        const after = edges?.[edges.length - 1]?.cursor || null
        loadGetClinicsQuerySearch({
          variables: {
            county: searchValue
              .map(el => el.county)
              .filter((value, index, self) => self.indexOf(value) === index),
            town: searchValue.map(el => el.town),
            after,
          },
        })
      }
    } else {
      if (getClinicsQuery?.data?.clinics?.pageInfo?.hasNextPage) {
        const edges = getClinicsQuery?.data?.clinics?.edges
        const after = edges?.[edges.length - 1]?.cursor || null
        getClinicsQuery.fetchMore({
          variables: {
            after,
          },
          updateQuery: (__, { fetchMoreResult }) => {
            return fetchMoreResult
          },
        })
      }
    }
  }, [getClinicsQuerySearch, getClinicsQuery])

  const refresh = useCallback(() => {
    getAdImagesQuery.refetch({
      first: 10,
      orderId: SortEnumType.Desc,
      where: "診所輪播",
    })
    if (searchValue) {
      refetchClinicsQuerySearch()
    } else {
      refreshClinicsQuery()
    }
  }, [searchValue, getAdImagesQuery, refetchClinicsQuerySearch, refreshClinicsQuery])

  if (getClinicsQuery.error || getAdImagesQuery.error) return <QueryStatus.Error />

  return (
    <>
      {getClinicsQuery.loading && getAdImagesQuery.loading ? (
        <QueryStatus.Loading />
      ) : (
        <div className={styled.wrapper}>
          <div className={styled.header}>
            <SearchBar ref={ref} onInputClick={() => go.toSearchList("")} />
            <div
              onClick={() => {
                auth.user.clinic ? go.toDoctorInbox() : go.toMemberInbox()
              }}>
              <Icon name="chat" className={styled["chat-icon"]} />
              {consults.length > 1 &&
                consults.map(consult => consult?.userInboxes?.some(el => !el?.read)) && (
                  <div className={styled["chat-unread"]} />
                )}
            </div>
          </div>
          <PullToRefresh onRefresh={async () => refresh()}>
            <div className={styled.inner}>
              {adImages && adImages?.length > 0 && (
                <div className={styled.banner}>
                  <Banner images={adImages} />
                </div>
              )}
              <div className={styled.card}>
                {data?.map((el, idx) => (
                  <ClinicCard
                    key={el.node?.id || ""}
                    id={el.node?.id || ""}
                    name={el.node?.name || ""}
                    county={el.node?.county || ""}
                    town={el.node?.town || ""}
                    caseCount={el.node?.caseCount || 0}
                    consultReplyCount={el.node?.consultReplyCount || 0}
                    last={count - 1 === idx}
                    fetchMore={() => fetchMore()}
                  />
                ))}
              </div>
              <div className={styled.filter}>
                <Button className={styled.button} onClick={() => setOpenFilter(true)}>
                  <Icon name="funnel" className={styled.funnel} />
                  地區篩選
                </Button>
                <DistrictsFilter
                  open={openFilter}
                  onClose={value => {
                    setOpenFilter(false)

                    if (value.length === 0) {
                      setSearchValue(null)
                      return
                    } else {
                      setSearchValue(value)
                      refetchClinicsQuerySearch()
                    }
                  }}
                />
              </div>
            </div>
          </PullToRefresh>
        </div>
      )}

      {auth.user.clinic ? <Toolbars.Clinic /> : <Toolbars />}
    </>
  )
}
export default Clinic
