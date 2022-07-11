import styled from "./Clinic.module.scss"
import Icon from "components/Icon"
import BottomNavigation from "components/BottomNavigation"
import SearchBar from "components/SearchBar"
import Button from "components/Button"
import ClinicCard from "./ClinicCard"
import { useState, useRef } from "react"
import { useAuth } from "hooks/useAuth"
import DistrictsFilter from "./DistrictsFilter"
import Banner from "components/Banner"
import { useGetAdImagesQuery, useGetClinicsQuery } from "./ClinicCard.graphql.generated"

const Clinic = () => {
  const ref = useRef<HTMLInputElement | null>(null)
  const [openFilter, setOpenFilter] = useState(false)
  const auth = useAuth()
  const getAdImagesQuery = useGetAdImagesQuery()
  const getClinicsQuery = useGetClinicsQuery()
  const adImages = getAdImagesQuery?.data?.adImages?.edges?.map(el => el.node?.image)

  return (
    <>
      <div className={styled.wrapper}>
        <div className={styled.header}>
          <SearchBar ref={ref} />
          <Icon name="chat" className={styled["chat-icon"]} />
        </div>
        {adImages && adImages?.length > 0 && <Banner images={adImages} />}
        {getClinicsQuery?.data?.clinics?.edges?.map(el => (
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
        <Button className={styled.button} onClick={() => setOpenFilter(true)}>
          <Icon name="funnel" className={styled.funnel} />
          地區篩選
        </Button>
        <DistrictsFilter open={openFilter} onClose={() => setOpenFilter(false)} />
      </div>
      {auth.user.clinic ? <BottomNavigation.Chat /> : <BottomNavigation />}
    </>
  )
}
export default Clinic
