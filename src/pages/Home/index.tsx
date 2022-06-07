import styled from "./Home.module.scss"
import Icon from "components/Icon"
import BottomNavigation from "components/BottomNavigation"
import SearchBar from "components/SearchBar"
import AdCard from "./AdCard"
import Button from "components/Button"

const Home = () => {
  return (
    <>
      <div className={styled.wrapper}>
        <div className={styled.header}>
          <SearchBar />
          <Icon name="chat" className={styled["chat-icon"]} />
        </div>
        <div className={styled.banner}>
          <div className={styled["banner-item"]}>banner-item</div>
          <div className={styled["banner-item"]}>banner-item</div>
        </div>
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <Button className={styled.button}>
          <Icon name="notePencil" className={styled.notePencil} />
          匿名諮詢
        </Button>
      </div>
      <BottomNavigation />
    </>
  )
}
export default Home
