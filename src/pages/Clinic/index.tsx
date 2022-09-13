import styled from "./Clinic.module.scss"
import Icon from "components/Icon"
import Toolbars from "containers/Toolbars"
import SearchBar from "containers/SearchBar"
import Button from "components/Button"
import ClinicCard from "./ClinicCard"
import { useState, useRef, useEffect } from "react"
import { useAuth } from "hooks/useAuth"
import DistrictsFilter from "./DistrictsFilter"
import Banner from "containers/Banner"
import { useGetAdImagesQuery } from "graphql/queries/getAdImage.graphql.generated"
import { useGetMemberInboxLazyQuery } from "pages/Member/MemberInbox/MemberInbox.graphql.generated"
import { SortEnumType } from "types/schema"
import { useGetClinicsQuery, useGetClinicsSearchLazyQuery } from "./ClinicCard.graphql.generated"
import useGo from "components/Router/useGo"

const Clinic = () => {
  const ref = useRef<HTMLInputElement | null>(null)
  const [openFilter, setOpenFilter] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const auth = useAuth()
  const go = useGo()

  const getAdImagesQuery = useGetAdImagesQuery({
    variables: {
      first: 10,
      orderId: SortEnumType.Desc,
      where: "診所輪播",
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

  const getClinicsQuery = useGetClinicsQuery()
  const [loadGetClinicsQuerySearch, getClinicsQuerySearch] = useGetClinicsSearchLazyQuery()

  const [loadMemberInboxQuery, getMemberInboxQuery] = useGetMemberInboxLazyQuery()
  useEffect(() => {
    if (auth.user.id) {
      loadMemberInboxQuery()
    }
  }, [auth.user.id, loadMemberInboxQuery])

  const data = isSearch
    ? getClinicsQuerySearch?.data?.clinics?.edges
    : getClinicsQuery?.data?.clinics?.edges
  const consults = getMemberInboxQuery.data?.me?.consults || []

  return (
    <>
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
        <div className={styled.inner}>
          {adImages && adImages?.length > 0 && (
            <div className={styled.banner}>
              <Banner images={adImages} />
            </div>
          )}
          <div className={styled.card}>
            {data?.map(el => (
              <ClinicCard
                key={el.node?.id || ""}
                id={el.node?.id || ""}
                name={el.node?.name || ""}
                county={el.node?.county || ""}
                town={el.node?.town || ""}
                caseCount={el.node?.caseCount || 0}
                consultReplyCount={el.node?.consultReplyCount || 0}
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
                  setIsSearch(false)
                  return
                }
                loadGetClinicsQuerySearch({
                  variables: {
                    county: value
                      .map(el => el.county)
                      .filter((value, index, self) => self.indexOf(value) === index),
                    town: value.map(el => el.town),
                  },
                })
                setIsSearch(true)
              }}
            />
          </div>
        </div>
      </div>
      {auth.user.clinic ? <Toolbars.Clinic /> : <Toolbars />}
    </>
  )
}
export default Clinic
