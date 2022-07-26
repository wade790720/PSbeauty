import { useState, useEffect } from "react"
import styled from "./ClinicalCaseList.module.scss"
import Icon from "components/Icon"
import BottomNavigation from "components/BottomNavigation"
import SearchBar from "components/SearchBar"
import Button from "components/Button"
import CaseCard from "components/CaseCard"
import SubjectFilter from "components/SubjectFilter"
import Banner from "components/Banner"
import {
  useGetTopCategoriesLazyQuery,
  useGetCasesQuery,
} from "./ClinicalCaseList.graphql.generated"
import { useGetAdImagesQuery } from "graphql/queries/getAdImage.graphql.generated"
import { SortEnumType } from "types/schema"

const ClinicalCaseList = () => {
  const [open, setOpen] = useState(false)
  const [loadQuery, query] = useGetTopCategoriesLazyQuery()
  const getCasesQuery = useGetCasesQuery()
  const adImageCaseQuery = useGetAdImagesQuery({
    variables: {
      first: 5,
      orderId: SortEnumType.Desc,
      where: "案例輪播",
    },
  })
  const adImages = adImageCaseQuery?.data?.adImages?.edges?.map(el => ({
    image: el.node?.image || "",
    clinicId: el.node?.clinicId || "",
    targetId: el.node?.targetId || "",
    redirectType: el.node?.redirectType,
  }))

  useEffect(() => {
    if (!open) return
    loadQuery()
  }, [open])

  return (
    <>
      <div className={styled.wrapper}>
        <div className={styled.header}>
          <SearchBar />
          <Icon name="chat" className={styled["chat-icon"]} />
        </div>
        <Banner images={adImages} />
        {getCasesQuery?.data?.cases?.edges?.map(el => (
          <CaseCard
            key={el?.node?.id}
            isCollected
            title={el?.node?.title || ""}
            clinic={el?.node?.clinic?.name || ""}
            clinicId={el?.node?.clinic?.id || ""}
            introduction={el?.node?.description || ""}
            images={[el?.node?.beforeImage || "", el?.node?.afterImage || ""]}
            tags={el?.node?.categories?.map(el => el?.name || "")}
            caseId={el?.node?.id || ""}
          />
        ))}
        <Button className={styled.button} onClick={() => setOpen(true)}>
          <Icon name="funnel" className={styled.funnel} />
          分類篩選
        </Button>
        <SubjectFilter
          open={open}
          onClose={() => setOpen(false)}
          getValue={value => console.log(value)}
          topCategoriesQuery={query}
          defaultValue={[]}
        />
      </div>
      <BottomNavigation />
    </>
  )
}
export default ClinicalCaseList
