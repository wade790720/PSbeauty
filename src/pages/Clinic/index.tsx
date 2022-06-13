import styled from "./Clinic.module.scss"
import Icon from "components/Icon"
import BottomNavigation from "components/BottomNavigation"
import SearchBar from "components/SearchBar"
import Button from "components/Button"
import ClinicCard from "./ClinicCard"
import { useState } from "react"
import DistrictsFilter from "./DistrictsFilter"
import Banner from "components/Banner"

const Clinic = () => {
  const [openFilter, setOpenFilter] = useState(false)
  return (
    <>
      <div className={styled.wrapper}>
        <div className={styled.header}>
          <SearchBar />
          <Icon name="chat" className={styled["chat-icon"]} />
        </div>
        <Banner />
        <ClinicCard />
        <ClinicCard />
        <ClinicCard />
        <ClinicCard />
        <ClinicCard />
        <Button className={styled.button} onClick={() => setOpenFilter(true)}>
          <Icon name="funnel" className={styled.funnel} />
          地區篩選
        </Button>
        <DistrictsFilter open={openFilter} onClose={() => setOpenFilter(false)} />
      </div>
      <BottomNavigation />
    </>
  )
}
export default Clinic
