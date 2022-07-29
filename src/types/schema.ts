export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: number
}

/** A connection to a list of items. */
export type ActivitiesConnection = {
  __typename: "ActivitiesConnection"
  /** A list of edges. */
  edges: Maybe<Array<ActivitiesEdge>>
  /** A flattened list of the nodes. */
  nodes: Maybe<Array<Maybe<ClinicActivity>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type ActivitiesEdge = {
  __typename: "ActivitiesEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node: Maybe<ClinicActivity>
}

/** 廠商廣告卡 */
export type AdCard = {
  __typename: "AdCard"
  /** 廣告卡內容 */
  content: Maybe<Scalars["String"]>
  /** 物件識別碼 */
  id: Maybe<Scalars["String"]>
  /** 廣告圖片網址 */
  image: Maybe<Scalars["String"]>
  /** 廣告卡標題 */
  title: Maybe<Scalars["String"]>
}

/** 廠商廣告卡 */
export type AdCardFilterInput = {
  and: InputMaybe<Array<AdCardFilterInput>>
  /** 廣告卡內容 */
  content: InputMaybe<StringOperationFilterInput>
  /** 物件識別碼 */
  id: InputMaybe<StringOperationFilterInput>
  /** 廣告圖片網址 */
  image: InputMaybe<StringOperationFilterInput>
  or: InputMaybe<Array<AdCardFilterInput>>
  /** 廣告卡標題 */
  title: InputMaybe<StringOperationFilterInput>
}

/** 廠商廣告卡 */
export type AdCardSortInput = {
  /** 廣告卡內容 */
  content: InputMaybe<SortEnumType>
  /** 物件識別碼 */
  id: InputMaybe<SortEnumType>
  /** 廣告圖片網址 */
  image: InputMaybe<SortEnumType>
  /** 廣告卡標題 */
  title: InputMaybe<SortEnumType>
}

/** A connection to a list of items. */
export type AdCardsConnection = {
  __typename: "AdCardsConnection"
  /** A list of edges. */
  edges: Maybe<Array<AdCardsEdge>>
  /** A flattened list of the nodes. */
  nodes: Maybe<Array<Maybe<AdCard>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type AdCardsEdge = {
  __typename: "AdCardsEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node: Maybe<AdCard>
}

/** 廣告圖片，包含首頁輪播/症例輪播二種類型 */
export type AdImage = {
  __typename: "AdImage"
  clinic: Maybe<Clinic>
  /** 所屬診所 */
  clinicId: Maybe<Scalars["String"]>
  /** 物件識別碼 */
  id: Maybe<Scalars["String"]>
  /** 廣告圖片網址 */
  image: Maybe<Scalars["String"]>
  /** 點擊後轉址類型，如：Clinic/Case/Doctor */
  redirectType: Maybe<Scalars["String"]>
  /** 排序 */
  sort: Scalars["Int"]
  /** 狀態： true 為開啟，false 為關閉 */
  status: Scalars["Boolean"]
  /** 點擊後轉址目標識別碼 */
  targetId: Maybe<Scalars["String"]>
  /** 標題 */
  title: Maybe<Scalars["String"]>
  /** 廣告圖片用途，如：首頁輪播/診所輪播/症例輪播 */
  usageType: Maybe<Scalars["String"]>
}

/** 廣告圖片，包含首頁輪播/症例輪播二種類型 */
export type AdImageFilterInput = {
  and: InputMaybe<Array<AdImageFilterInput>>
  /** 所屬診所 */
  clinicId: InputMaybe<StringOperationFilterInput>
  /** 物件識別碼 */
  id: InputMaybe<StringOperationFilterInput>
  /** 廣告圖片網址 */
  image: InputMaybe<StringOperationFilterInput>
  or: InputMaybe<Array<AdImageFilterInput>>
  parentField: InputMaybe<StringOperationFilterInput>
  parentId: InputMaybe<StringOperationFilterInput>
  /** 點擊後轉址類型，如：Clinic/Case/Doctor */
  redirectType: InputMaybe<StringOperationFilterInput>
  /** 排序 */
  sort: InputMaybe<ComparableInt32OperationFilterInput>
  /** 狀態： true 為開啟，false 為關閉 */
  status: InputMaybe<BooleanOperationFilterInput>
  /** 點擊後轉址目標識別碼 */
  targetId: InputMaybe<StringOperationFilterInput>
  /** 標題 */
  title: InputMaybe<StringOperationFilterInput>
  /** 廣告圖片用途，如：首頁輪播/診所輪播/症例輪播 */
  usageType: InputMaybe<StringOperationFilterInput>
}

/** 廣告圖片，包含首頁輪播/症例輪播二種類型 */
export type AdImageSortInput = {
  /** 所屬診所 */
  clinicId: InputMaybe<SortEnumType>
  /** 物件識別碼 */
  id: InputMaybe<SortEnumType>
  /** 廣告圖片網址 */
  image: InputMaybe<SortEnumType>
  parentField: InputMaybe<SortEnumType>
  parentId: InputMaybe<SortEnumType>
  /** 點擊後轉址類型，如：Clinic/Case/Doctor */
  redirectType: InputMaybe<SortEnumType>
  /** 排序 */
  sort: InputMaybe<SortEnumType>
  /** 狀態： true 為開啟，false 為關閉 */
  status: InputMaybe<SortEnumType>
  /** 點擊後轉址目標識別碼 */
  targetId: InputMaybe<SortEnumType>
  /** 標題 */
  title: InputMaybe<SortEnumType>
  /** 廣告圖片用途，如：首頁輪播/診所輪播/症例輪播 */
  usageType: InputMaybe<SortEnumType>
}

/** A connection to a list of items. */
export type AdImagesConnection = {
  __typename: "AdImagesConnection"
  /** A list of edges. */
  edges: Maybe<Array<AdImagesEdge>>
  /** A flattened list of the nodes. */
  nodes: Maybe<Array<Maybe<AdImage>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type AdImagesEdge = {
  __typename: "AdImagesEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node: Maybe<AdImage>
}

/** 新增診所活動頁 */
export type AddActivityInput = {
  /** 所屬診所識別碼 */
  clinicId: InputMaybe<Scalars["String"]>
  /** 活動內容 */
  content: InputMaybe<Scalars["String"]>
  /** 活動圖片 */
  image: InputMaybe<Scalars["String"]>
  /** 活動主題 */
  subject: InputMaybe<Scalars["String"]>
}

export type AddActivityPayload = {
  __typename: "AddActivityPayload"
  id: Maybe<Scalars["String"]>
}

/** 新增廠商廣告卡參數 */
export type AddAdCardInput = {
  /** 廣告內容 */
  content: InputMaybe<Scalars["String"]>
  /** 廣告圖片網址 */
  image: InputMaybe<Scalars["String"]>
  /** 廣告標題 */
  title: InputMaybe<Scalars["String"]>
}

export type AddAdCardPayload = {
  __typename: "AddAdCardPayload"
  id: Maybe<Scalars["String"]>
}

/** 新增廣告圖片參數 */
export type AddAdImageInput = {
  /** 所屬診所 */
  clinicId: InputMaybe<Scalars["String"]>
  /** 廣告圖片網址 */
  image: InputMaybe<Scalars["String"]>
  /** 點擊後轉址類型，如：Clinic/Case/Doctor */
  redirectType: InputMaybe<Scalars["String"]>
  /** 排序 */
  sort: Scalars["Int"]
  /** 狀態： true 開啟，false 關閉 */
  status: Scalars["Boolean"]
  /** 點擊後轉址目標識別碼 */
  targetId: InputMaybe<Scalars["String"]>
  /** 標題 */
  title: InputMaybe<Scalars["String"]>
  /** 廣告圖片用途，如：首頁輪播/診所輪播/症例輪播 */
  usageType: InputMaybe<Scalars["String"]>
}

export type AddAdImagePayload = {
  __typename: "AddAdImagePayload"
  id: Maybe<Scalars["String"]>
}

/** 問卷回覆 */
export type AddAnswerInput = {
  /** 答覆 */
  answers: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** 問卷識別碼 */
  questionId: InputMaybe<Scalars["String"]>
  /** 回答者識別碼 */
  userId: InputMaybe<Scalars["String"]>
}

/** 問卷回覆結果 */
export type AddAnswerPayload = {
  __typename: "AddAnswerPayload"
  id: Maybe<Scalars["String"]>
}

export type AddCaseInput = {
  /** 術後照 */
  afterImage: InputMaybe<Scalars["String"]>
  /** 術後照關鍵字 */
  afterImageText: InputMaybe<Scalars["String"]>
  /** 術前照 */
  beforeImage: InputMaybe<Scalars["String"]>
  /** 術前照關鍵字 */
  beforeImageText: InputMaybe<Scalars["String"]>
  /** 案例分類 */
  categories: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** 所屬診所識別碼 */
  clinicId: InputMaybe<Scalars["String"]>
  /** 案例描述 */
  description: InputMaybe<Scalars["String"]>
  /** 是否被設為熱門案例 */
  hot: Scalars["Boolean"]
  /** 病例標題 */
  title: InputMaybe<Scalars["String"]>
}

export type AddCasePayload = {
  __typename: "AddCasePayload"
  id: Maybe<Scalars["String"]>
}

/** 新增小分類 */
export type AddCategoryInput = {
  /** 小分類名稱 */
  name: InputMaybe<Scalars["String"]>
  /** 所屬中分類識別碼 */
  secondCategoryId: InputMaybe<Scalars["String"]>
  /** 所屬大分類識別碼 */
  topCategoryId: InputMaybe<Scalars["String"]>
}

/** 新增小分類結果 */
export type AddCategoryPayload = {
  __typename: "AddCategoryPayload"
  id: Maybe<Scalars["String"]>
}

/** 使用者裝置輸入資訊 */
export type AddClientTokenInput = {
  /** 使用者裝置識別碼 */
  clientToken: InputMaybe<Scalars["String"]>
}

/** 使用者新增裝置輸出資訊 */
export type AddClientTokenPayload = {
  __typename: "AddClientTokenPayload"
  /** 使用者識別碼 */
  userId: Maybe<Scalars["String"]>
}

/** 新增診所圖片參數 */
export type AddClinicImageInput = {
  /** 所屬診所識別碼 */
  clinicId: InputMaybe<Scalars["String"]>
  /** 診所圖片網址 */
  image: InputMaybe<Scalars["String"]>
  /** 點擊後轉址類型，如：Clinic/Case/Doctor */
  redirectType: InputMaybe<Scalars["String"]>
  /** 排序 */
  sort: Scalars["Int"]
  /** 狀態。true 開啟 false 關閉 */
  status: Scalars["Boolean"]
  /** 點擊後轉址目標識別碼 */
  targetId: InputMaybe<Scalars["String"]>
  title: InputMaybe<Scalars["String"]>
}

/** 新增診所圖片結果 */
export type AddClinicImagePayload = {
  __typename: "AddClinicImagePayload"
  id: Maybe<Scalars["String"]>
}

export type AddClinicInput = {
  /** 診所地址 */
  address: InputMaybe<Scalars["String"]>
  /** 診所小分類 */
  categories: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** 聯絡人信箱 */
  contactEmail: InputMaybe<Scalars["String"]>
  /** 聯絡人姓名 */
  contactName: InputMaybe<Scalars["String"]>
  /** 聯絡人電話 */
  contactPhone: InputMaybe<Scalars["String"]>
  /** 診所縣市 */
  county: InputMaybe<Scalars["String"]>
  /** 診所䢗述 */
  description: InputMaybe<Scalars["String"]>
  /** 診所名稱 */
  name: InputMaybe<Scalars["String"]>
  /** 診所管理人電子郵件信箱 */
  ownerEmail: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** 診所電話 */
  phone: InputMaybe<Scalars["String"]>
  /** 診所鄉鎮市區 */
  town: InputMaybe<Scalars["String"]>
  /** 診所網站網址 */
  web: InputMaybe<Scalars["String"]>
}

export type AddClinicPayload = {
  __typename: "AddClinicPayload"
  id: Maybe<Scalars["String"]>
}

/** 新增諮詢輸入資料 */
export type AddConsultInput = {
  /**
   * 諮詢小分類
   * ///
   */
  categories: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** 諮詢內容 */
  content: InputMaybe<Scalars["String"]>
  /** 諮詢天數 */
  days: Scalars["Int"]
  /** 諮詢圖片 */
  images: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** 諮詢標題 */
  subject: InputMaybe<Scalars["String"]>
  /** 諮詢者識別碼，對應 User.Id */
  userId: InputMaybe<Scalars["String"]>
}

/** 新增諮詢完成回覆 */
export type AddConsultPayload = {
  __typename: "AddConsultPayload"
  id: Maybe<Scalars["String"]>
}

/** 診所回覆，會先產生一個 topic */
export type AddConsultTopicInput = {
  /** 診所識別碼，對應 Clinic.Id */
  clinicId: InputMaybe<Scalars["String"]>
  /** 諮詢識別碼，對應 Consult.Id */
  consultId: InputMaybe<Scalars["String"]>
}

export type AddConsultTopicPayload = {
  __typename: "AddConsultTopicPayload"
  /** 新建立的 Topic.Id */
  id: Maybe<Scalars["String"]>
}

export type AddDoctorInput = {
  /** 所屬診所 */
  clinicId: InputMaybe<Scalars["String"]>
  /** 醫師專長，自填 */
  expertise: InputMaybe<Scalars["String"]>
  /** 姓名 */
  name: InputMaybe<Scalars["String"]>
  /** 照片 */
  photo: InputMaybe<Scalars["String"]>
  /** 學經歷 */
  resumes: InputMaybe<Scalars["String"]>
  /** 頭銜 */
  title: InputMaybe<Scalars["String"]>
}

export type AddDoctorPayload = {
  __typename: "AddDoctorPayload"
  /** 診所識別碼 */
  clinicId: Maybe<Scalars["String"]>
  /** 醫師識別碼 */
  id: Maybe<Scalars["String"]>
  /** 醫師姓名 */
  name: Maybe<Scalars["String"]>
}

/** 關鍵字輸入 */
export type AddPopularKeywordInput = {
  /** 關鍵字 */
  keyword: InputMaybe<Scalars["String"]>
}

/** 關鍵字回覆 */
export type AddPopularKeywordPayload = {
  __typename: "AddPopularKeywordPayload"
  /** 新增關鍵字 */
  keyword: Maybe<Scalars["String"]>
}

/** 新增貼文內容 */
export type AddPostInput = {
  /** 發文內容 */
  content: InputMaybe<Scalars["String"]>
  /** 標題 */
  subject: InputMaybe<Scalars["String"]>
}

/** 新增貼文回覆 */
export type AddPostPayload = {
  __typename: "AddPostPayload"
  id: Maybe<Scalars["String"]>
}

export type AddQuestionInput = {
  /** 問卷題目 */
  items: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

export type AddQuestionPayload = {
  __typename: "AddQuestionPayload"
  id: Maybe<Scalars["String"]>
}

/** 新增中分類 */
export type AddSecondCategoryInput = {
  /** 中分類名稱 */
  name: InputMaybe<Scalars["String"]>
  /** 所屬大分類識別碼 */
  topCategoryId: InputMaybe<Scalars["String"]>
}

/** 新增中分類結果 */
export type AddSecondCategoryPayload = {
  __typename: "AddSecondCategoryPayload"
  id: Maybe<Scalars["String"]>
}

/** 新增大分類 */
export type AddTopCategoryInput = {
  /** 大分類名稱 */
  name: InputMaybe<Scalars["String"]>
}

/** 新增大分類結果 */
export type AddTopCategoryPayload = {
  __typename: "AddTopCategoryPayload"
  id: Maybe<Scalars["String"]>
}

export type AddUserInput = {
  /** 使用者所使用的裝識識別碼，用於接收 firebase 訊息用 */
  clientToken: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** 使用者姓名 */
  name: InputMaybe<Scalars["String"]>
  /** 使用者電話 */
  phone: InputMaybe<Scalars["String"]>
}

export type AddUserPayload = {
  __typename: "AddUserPayload"
  id: Maybe<Scalars["String"]>
}

/** 問卷回覆 */
export type Answer = {
  __typename: "Answer"
  /** 答覆 */
  answers: Maybe<Array<Maybe<Scalars["String"]>>>
  /** 物件識別碼 */
  id: Maybe<Scalars["String"]>
  parentField: Maybe<Scalars["String"]>
  parentId: Maybe<Scalars["String"]>
  /** 取得問題 */
  question: Maybe<Question>
  /** 問卷識別碼 */
  questionId: Maybe<Scalars["String"]>
  /** 取得回覆者 */
  responder: Maybe<User>
  /** 回答者識別碼 */
  userId: Maybe<Scalars["String"]>
}

/** 問卷回覆 */
export type AnswerFilterInput = {
  and: InputMaybe<Array<AnswerFilterInput>>
  /** 答覆 */
  answers: InputMaybe<ListStringOperationFilterInput>
  /** 物件識別碼 */
  id: InputMaybe<StringOperationFilterInput>
  or: InputMaybe<Array<AnswerFilterInput>>
  parentField: InputMaybe<StringOperationFilterInput>
  parentId: InputMaybe<StringOperationFilterInput>
  /** 問卷識別碼 */
  questionId: InputMaybe<StringOperationFilterInput>
  /** 回答者識別碼 */
  userId: InputMaybe<StringOperationFilterInput>
}

/** 問卷回覆 */
export type AnswerSortInput = {
  /** 物件識別碼 */
  id: InputMaybe<SortEnumType>
  parentField: InputMaybe<SortEnumType>
  parentId: InputMaybe<SortEnumType>
  /** 問卷識別碼 */
  questionId: InputMaybe<SortEnumType>
  /** 回答者識別碼 */
  userId: InputMaybe<SortEnumType>
}

/** A connection to a list of items. */
export type AnswersByQuestionIdConnection = {
  __typename: "AnswersByQuestionIdConnection"
  /** A list of edges. */
  edges: Maybe<Array<AnswersByQuestionIdEdge>>
  /** A flattened list of the nodes. */
  nodes: Maybe<Array<Maybe<Answer>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type AnswersByQuestionIdEdge = {
  __typename: "AnswersByQuestionIdEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node: Maybe<Answer>
}

export enum ApplyPolicy {
  AfterResolver = "AFTER_RESOLVER",
  BeforeResolver = "BEFORE_RESOLVER",
}

export type BooleanOperationFilterInput = {
  eq: InputMaybe<Scalars["Boolean"]>
  neq: InputMaybe<Scalars["Boolean"]>
}

/** A connection to a list of items. */
export type CasesConnection = {
  __typename: "CasesConnection"
  /** A list of edges. */
  edges: Maybe<Array<CasesEdge>>
  /** A flattened list of the nodes. */
  nodes: Maybe<Array<Maybe<ClinicCase>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type CasesEdge = {
  __typename: "CasesEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node: Maybe<ClinicCase>
}

/** 小分類 */
export type Category = {
  __typename: "Category"
  /** 物件識別碼 */
  id: Maybe<Scalars["String"]>
  /** 小分類名稱 */
  name: Maybe<Scalars["String"]>
  parentField: Maybe<Scalars["String"]>
  parentId: Maybe<Scalars["String"]>
  /** 所屬中分類 */
  secondCategoryId: Maybe<Scalars["String"]>
  /** 大分類 */
  topCategoryId: Maybe<Scalars["String"]>
  /** 由 id 取出之唯一數字值 */
  uniqueNumber: Scalars["Long"]
}

/** 診所資訊 */
export type Clinic = {
  __typename: "Clinic"
  /** 取得診所活動頁 */
  activities: Maybe<Array<Maybe<ClinicActivity>>>
  /** 取得診所所屬廣告 */
  adImages: Maybe<Array<Maybe<AdImage>>>
  /** 診所地址 （路巷號樓） */
  address: Maybe<Scalars["String"]>
  /** 取得診所案例數 */
  caseCount: Scalars["Long"]
  /** 取得診所案例 */
  cases: Maybe<Array<Maybe<ClinicCase>>>
  /** 取得診所小分類 */
  categories: Maybe<Array<Maybe<Category>>>
  /** 取得診所回覆諮詢數 */
  consultReplyCount: Scalars["Long"]
  /** 聯絡人信箱 */
  contactEmail: Maybe<Scalars["String"]>
  /** 聯絡人姓名 */
  contactName: Maybe<Scalars["String"]>
  /** 聯絡人電話 */
  contactPhone: Maybe<Scalars["String"]>
  /** 地址（縣/市） */
  county: Maybe<Scalars["String"]>
  /** 診所說明 */
  description: Maybe<Scalars["String"]>
  /** 取得診所醫生群 */
  doctors: Maybe<Array<Maybe<ClinicDoctor>>>
  /** 物件識別碼 */
  id: Maybe<Scalars["String"]>
  /** 取得診所圖片 */
  images: Maybe<Array<Maybe<ClinicImage>>>
  /** 最後付費時間 */
  latestPayAt: Scalars["Long"]
  /** 診所名稱 */
  name: Maybe<Scalars["String"]>
  /** 診所管理員 */
  owners: Maybe<Array<Maybe<User>>>
  /** 是否已付費 */
  paid: Scalars["Boolean"]
  /** 付費組數 */
  paySets: Scalars["Int"]
  /** 診所電話 */
  phone: Maybe<Scalars["String"]>
  /** 地址（鄉縣市區） */
  town: Maybe<Scalars["String"]>
  /** 診所主網頁 */
  web: Maybe<Scalars["String"]>
}

/** 診所資訊 */
export type ClinicDoctorsArgs = {
  where: InputMaybe<ClinicDoctorFilterInput>
}

/** 診所活動頁 */
export type ClinicActivity = {
  __typename: "ClinicActivity"
  /** 取得診所資訊 */
  clinic: Maybe<Clinic>
  /** 活動內容 */
  content: Maybe<Scalars["String"]>
  /** 取得活動建立時間，以 epoch 格式取至秒 */
  createdAt: Scalars["Long"]
  /** 物件識別碼 */
  id: Maybe<Scalars["String"]>
  /** 活動圖片 */
  image: Maybe<Scalars["String"]>
  /** 活動主題 */
  subject: Maybe<Scalars["String"]>
}

/** 診所活動頁 */
export type ClinicActivityFilterInput = {
  and: InputMaybe<Array<ClinicActivityFilterInput>>
  /** 所屬診所識別碼 */
  clinicId: InputMaybe<StringOperationFilterInput>
  /** 活動內容 */
  content: InputMaybe<StringOperationFilterInput>
  /** 物件識別碼 */
  id: InputMaybe<StringOperationFilterInput>
  /** 活動圖片 */
  image: InputMaybe<StringOperationFilterInput>
  or: InputMaybe<Array<ClinicActivityFilterInput>>
  parentField: InputMaybe<StringOperationFilterInput>
  parentId: InputMaybe<StringOperationFilterInput>
  /** 活動主題 */
  subject: InputMaybe<StringOperationFilterInput>
}

/** 診所活動頁 */
export type ClinicActivitySortInput = {
  /** 所屬診所識別碼 */
  clinicId: InputMaybe<SortEnumType>
  /** 活動內容 */
  content: InputMaybe<SortEnumType>
  /** 物件識別碼 */
  id: InputMaybe<SortEnumType>
  /** 活動圖片 */
  image: InputMaybe<SortEnumType>
  parentField: InputMaybe<SortEnumType>
  parentId: InputMaybe<SortEnumType>
  /** 活動主題 */
  subject: InputMaybe<SortEnumType>
}

/** 診所病例 */
export type ClinicCase = {
  __typename: "ClinicCase"
  /** 術後照 */
  afterImage: Maybe<Scalars["String"]>
  /** 術後照關鍵字 */
  afterImageText: Maybe<Scalars["String"]>
  /** 術前照 */
  beforeImage: Maybe<Scalars["String"]>
  /** 術前照關鍵字 */
  beforeImageText: Maybe<Scalars["String"]>
  /** 相關小分類 */
  categories: Maybe<Array<Maybe<Category>>>
  /** 取得診所資訊 */
  clinic: Maybe<Clinic>
  /** 取得被蒐藏數 */
  collectedCount: Scalars["Long"]
  /** 案例描述 */
  description: Maybe<Scalars["String"]>
  /** 是否被設為熱門案例 */
  hot: Scalars["Boolean"]
  /** 物件識別碼 */
  id: Maybe<Scalars["String"]>
  /** 病例標題 */
  title: Maybe<Scalars["String"]>
}

/** 診所病例 */
export type ClinicCaseFilterInput = {
  /** 術後照 */
  afterImage: InputMaybe<StringOperationFilterInput>
  /** 術後照關鍵字 */
  afterImageText: InputMaybe<StringOperationFilterInput>
  and: InputMaybe<Array<ClinicCaseFilterInput>>
  /** 術前照 */
  beforeImage: InputMaybe<StringOperationFilterInput>
  /** 術前照關鍵字 */
  beforeImageText: InputMaybe<StringOperationFilterInput>
  /** 案例分類 */
  categories: InputMaybe<ListStringOperationFilterInput>
  /** 所屬診所識別碼 */
  clinicId: InputMaybe<StringOperationFilterInput>
  /** 案例描述 */
  description: InputMaybe<StringOperationFilterInput>
  /** 是否被設為熱門案例 */
  hot: InputMaybe<BooleanOperationFilterInput>
  /** 物件識別碼 */
  id: InputMaybe<StringOperationFilterInput>
  or: InputMaybe<Array<ClinicCaseFilterInput>>
  parentField: InputMaybe<StringOperationFilterInput>
  parentId: InputMaybe<StringOperationFilterInput>
  /** 病例標題 */
  title: InputMaybe<StringOperationFilterInput>
}

/** 診所病例 */
export type ClinicCaseSortInput = {
  /** 術後照 */
  afterImage: InputMaybe<SortEnumType>
  /** 術後照關鍵字 */
  afterImageText: InputMaybe<SortEnumType>
  /** 術前照 */
  beforeImage: InputMaybe<SortEnumType>
  /** 術前照關鍵字 */
  beforeImageText: InputMaybe<SortEnumType>
  /** 所屬診所識別碼 */
  clinicId: InputMaybe<SortEnumType>
  /** 案例描述 */
  description: InputMaybe<SortEnumType>
  /** 是否被設為熱門案例 */
  hot: InputMaybe<SortEnumType>
  /** 物件識別碼 */
  id: InputMaybe<SortEnumType>
  parentField: InputMaybe<SortEnumType>
  parentId: InputMaybe<SortEnumType>
  /** 病例標題 */
  title: InputMaybe<SortEnumType>
}

/** 診所諮詢討論串。一間診所可以針對一個諮詢問題建立一個討論串 */
export type ClinicConsultTopic = {
  __typename: "ClinicConsultTopic"
  clinic: Maybe<Clinic>
  /** 取得父項諮詢 */
  consult: Maybe<Consult>
  /** 諮詢識別碼，對應 Consult.Id */
  consultId: Maybe<Scalars["String"]>
  /** 物件識別碼 */
  id: Maybe<Scalars["String"]>
  replies: Maybe<Array<Maybe<ConsultTopicReply>>>
}

/** 診所諮詢討論串。一間診所可以針對一個諮詢問題建立一個討論串 */
export type ClinicConsultTopicFilterInput = {
  and: InputMaybe<Array<ClinicConsultTopicFilterInput>>
  /** 診所識別碼，對應 Clinic.Id */
  clinicId: InputMaybe<StringOperationFilterInput>
  /** 諮詢識別碼，對應 Consult.Id */
  consultId: InputMaybe<StringOperationFilterInput>
  /** 物件識別碼 */
  id: InputMaybe<StringOperationFilterInput>
  or: InputMaybe<Array<ClinicConsultTopicFilterInput>>
  parentField: InputMaybe<StringOperationFilterInput>
  parentId: InputMaybe<StringOperationFilterInput>
}

/** 診所諮詢討論串。一間診所可以針對一個諮詢問題建立一個討論串 */
export type ClinicConsultTopicSortInput = {
  /** 診所識別碼，對應 Clinic.Id */
  clinicId: InputMaybe<SortEnumType>
  /** 諮詢識別碼，對應 Consult.Id */
  consultId: InputMaybe<SortEnumType>
  /** 物件識別碼 */
  id: InputMaybe<SortEnumType>
  parentField: InputMaybe<SortEnumType>
  parentId: InputMaybe<SortEnumType>
}

/** 駐院醫師 */
export type ClinicDoctor = {
  __typename: "ClinicDoctor"
  /** 醫生所屬診所 */
  clinic: Maybe<Clinic>
  /** 醫師專長，自填 */
  expertise: Maybe<Scalars["String"]>
  /** 物件識別碼 */
  id: Maybe<Scalars["String"]>
  /** 姓名 */
  name: Maybe<Scalars["String"]>
  /** 玉照 */
  photo: Maybe<Scalars["String"]>
  /** 經歷 */
  resumes: Maybe<Scalars["String"]>
  /** 醫師頭銜 */
  title: Maybe<Scalars["String"]>
}

/** 駐院醫師 */
export type ClinicDoctorFilterInput = {
  and: InputMaybe<Array<ClinicDoctorFilterInput>>
  /** 所屬診所識別碼 */
  clinicId: InputMaybe<StringOperationFilterInput>
  /** 醫師專長，自填 */
  expertise: InputMaybe<StringOperationFilterInput>
  /** 物件識別碼 */
  id: InputMaybe<StringOperationFilterInput>
  /** 姓名 */
  name: InputMaybe<StringOperationFilterInput>
  or: InputMaybe<Array<ClinicDoctorFilterInput>>
  parentField: InputMaybe<StringOperationFilterInput>
  parentId: InputMaybe<StringOperationFilterInput>
  /** 玉照 */
  photo: InputMaybe<StringOperationFilterInput>
  /** 經歷 */
  resumes: InputMaybe<StringOperationFilterInput>
  /** 醫師頭銜 */
  title: InputMaybe<StringOperationFilterInput>
}

/** 駐院醫師 */
export type ClinicDoctorSortInput = {
  /** 所屬診所識別碼 */
  clinicId: InputMaybe<SortEnumType>
  /** 醫師專長，自填 */
  expertise: InputMaybe<SortEnumType>
  /** 物件識別碼 */
  id: InputMaybe<SortEnumType>
  /** 姓名 */
  name: InputMaybe<SortEnumType>
  parentField: InputMaybe<SortEnumType>
  parentId: InputMaybe<SortEnumType>
  /** 玉照 */
  photo: InputMaybe<SortEnumType>
  /** 經歷 */
  resumes: InputMaybe<SortEnumType>
  /** 醫師頭銜 */
  title: InputMaybe<SortEnumType>
}

/** 診所資訊 */
export type ClinicFilterInput = {
  /** 診所地址 （路巷號樓） */
  address: InputMaybe<StringOperationFilterInput>
  and: InputMaybe<Array<ClinicFilterInput>>
  /** 診所案例數 */
  caseCount: InputMaybe<ComparableInt32OperationFilterInput>
  /** 診所小分類 */
  categories: InputMaybe<ListStringOperationFilterInput>
  /** 諮詢回覆數 */
  consultReplyCount: InputMaybe<ComparableInt32OperationFilterInput>
  /** 聯絡人信箱 */
  contactEmail: InputMaybe<StringOperationFilterInput>
  /** 聯絡人姓名 */
  contactName: InputMaybe<StringOperationFilterInput>
  /** 聯絡人電話 */
  contactPhone: InputMaybe<StringOperationFilterInput>
  /** 地址（縣/市） */
  county: InputMaybe<StringOperationFilterInput>
  /** 診所說明 */
  description: InputMaybe<StringOperationFilterInput>
  /** 物件識別碼 */
  id: InputMaybe<StringOperationFilterInput>
  /** 最後付費時間 */
  latestPayAt: InputMaybe<ComparableInt64OperationFilterInput>
  /** 診所名稱 */
  name: InputMaybe<StringOperationFilterInput>
  or: InputMaybe<Array<ClinicFilterInput>>
  /** 管理者電子郵件，必須使用此郵件登入之帳號才視為該診所之管理者 */
  ownerEmail: InputMaybe<ListStringOperationFilterInput>
  /** 是否已付費 */
  paid: InputMaybe<BooleanOperationFilterInput>
  /** 付費組數 */
  paySets: InputMaybe<ComparableInt32OperationFilterInput>
  /** 診所電話 */
  phone: InputMaybe<StringOperationFilterInput>
  /** 地址（鄉縣市區） */
  town: InputMaybe<StringOperationFilterInput>
  /** 診所主網頁 */
  web: InputMaybe<StringOperationFilterInput>
}

/** 診所圖片 */
export type ClinicImage = {
  __typename: "ClinicImage"
  /** 取診所資訊 */
  clinic: Maybe<Clinic>
  /** 物件識別碼 */
  id: Maybe<Scalars["String"]>
  /** 廣告圖片網址 */
  image: Maybe<Scalars["String"]>
  /** 點擊後轉址類型，如：Clinic/Case/Doctor */
  redirectType: Maybe<Scalars["String"]>
  /** 排序 */
  sort: Scalars["Int"]
  /** 狀態。true 開啟 false 關閉 */
  status: Scalars["Boolean"]
  /** 點擊後轉址目標識別碼 */
  targetId: Maybe<Scalars["String"]>
  /** 標題 */
  title: Maybe<Scalars["String"]>
}

/** 診所信箱 */
export type ClinicInbox = {
  __typename: "ClinicInbox"
  /** 取診所資訊 */
  clinic: Maybe<Clinic>
  /** 物件識別碼 */
  id: Maybe<Scalars["String"]>
  /** 讀取時間 */
  readAt: Scalars["Long"]
  /** 取得信箱中的回覆內容 */
  reply: Maybe<ConsultTopicReply>
  /** 取得討論串資訊 */
  topic: Maybe<ClinicConsultTopic>
  /** 取得寄信人 */
  user: Maybe<User>
}

/** A connection to a list of items. */
export type ClinicInboxConnection = {
  __typename: "ClinicInboxConnection"
  /** A list of edges. */
  edges: Maybe<Array<ClinicInboxEdge>>
  /** A flattened list of the nodes. */
  nodes: Maybe<Array<Maybe<ClinicInbox>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type ClinicInboxEdge = {
  __typename: "ClinicInboxEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node: Maybe<ClinicInbox>
}

/** 診所信箱 */
export type ClinicInboxFilterInput = {
  and: InputMaybe<Array<ClinicInboxFilterInput>>
  /** 診所識別碼 */
  clinicId: InputMaybe<StringOperationFilterInput>
  /** 物件識別碼 */
  id: InputMaybe<StringOperationFilterInput>
  or: InputMaybe<Array<ClinicInboxFilterInput>>
  parentField: InputMaybe<StringOperationFilterInput>
  parentId: InputMaybe<StringOperationFilterInput>
  /** 讀取時間 */
  readAt: InputMaybe<ComparableInt64OperationFilterInput>
  /** 回覆識別碼 */
  replyId: InputMaybe<StringOperationFilterInput>
  /** 診所諮詢討論串識別碼 */
  topicId: InputMaybe<StringOperationFilterInput>
  /** 寄件者識別碼 */
  userId: InputMaybe<StringOperationFilterInput>
}

/** 診所信箱 */
export type ClinicInboxSortInput = {
  /** 診所識別碼 */
  clinicId: InputMaybe<SortEnumType>
  /** 物件識別碼 */
  id: InputMaybe<SortEnumType>
  parentField: InputMaybe<SortEnumType>
  parentId: InputMaybe<SortEnumType>
  /** 讀取時間 */
  readAt: InputMaybe<SortEnumType>
  /** 回覆識別碼 */
  replyId: InputMaybe<SortEnumType>
  /** 診所諮詢討論串識別碼 */
  topicId: InputMaybe<SortEnumType>
  /** 寄件者識別碼 */
  userId: InputMaybe<SortEnumType>
}

/** 診所資訊 */
export type ClinicSortInput = {
  /** 診所地址 （路巷號樓） */
  address: InputMaybe<SortEnumType>
  /** 診所案例數 */
  caseCount: InputMaybe<SortEnumType>
  /** 諮詢回覆數 */
  consultReplyCount: InputMaybe<SortEnumType>
  /** 聯絡人信箱 */
  contactEmail: InputMaybe<SortEnumType>
  /** 聯絡人姓名 */
  contactName: InputMaybe<SortEnumType>
  /** 聯絡人電話 */
  contactPhone: InputMaybe<SortEnumType>
  /** 地址（縣/市） */
  county: InputMaybe<SortEnumType>
  /** 診所說明 */
  description: InputMaybe<SortEnumType>
  /** 物件識別碼 */
  id: InputMaybe<SortEnumType>
  /** 最後付費時間 */
  latestPayAt: InputMaybe<SortEnumType>
  /** 診所名稱 */
  name: InputMaybe<SortEnumType>
  /** 是否已付費 */
  paid: InputMaybe<SortEnumType>
  /** 付費組數 */
  paySets: InputMaybe<SortEnumType>
  /** 診所電話 */
  phone: InputMaybe<SortEnumType>
  /** 地址（鄉縣市區） */
  town: InputMaybe<SortEnumType>
  /** 診所主網頁 */
  web: InputMaybe<SortEnumType>
}

/** A connection to a list of items. */
export type ClinicsConnection = {
  __typename: "ClinicsConnection"
  /** A list of edges. */
  edges: Maybe<Array<ClinicsEdge>>
  /** A flattened list of the nodes. */
  nodes: Maybe<Array<Maybe<Clinic>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type ClinicsEdge = {
  __typename: "ClinicsEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node: Maybe<Clinic>
}

/** 使用者蒐集案例輸入內容 */
export type CollectCaseInput = {
  /** 蒐集案例識別碼 */
  caseId: InputMaybe<Scalars["String"]>
}

/** 使用者蒐集案例回覆 */
export type CollectCasePayload = {
  __typename: "CollectCasePayload"
  /** 使用者識別碼 */
  userId: Maybe<Scalars["String"]>
}

export type ComparableInt32OperationFilterInput = {
  eq: InputMaybe<Scalars["Int"]>
  gt: InputMaybe<Scalars["Int"]>
  gte: InputMaybe<Scalars["Int"]>
  in: InputMaybe<Array<Scalars["Int"]>>
  lt: InputMaybe<Scalars["Int"]>
  lte: InputMaybe<Scalars["Int"]>
  neq: InputMaybe<Scalars["Int"]>
  ngt: InputMaybe<Scalars["Int"]>
  ngte: InputMaybe<Scalars["Int"]>
  nin: InputMaybe<Array<Scalars["Int"]>>
  nlt: InputMaybe<Scalars["Int"]>
  nlte: InputMaybe<Scalars["Int"]>
}

export type ComparableInt64OperationFilterInput = {
  eq: InputMaybe<Scalars["Long"]>
  gt: InputMaybe<Scalars["Long"]>
  gte: InputMaybe<Scalars["Long"]>
  in: InputMaybe<Array<Scalars["Long"]>>
  lt: InputMaybe<Scalars["Long"]>
  lte: InputMaybe<Scalars["Long"]>
  neq: InputMaybe<Scalars["Long"]>
  ngt: InputMaybe<Scalars["Long"]>
  ngte: InputMaybe<Scalars["Long"]>
  nin: InputMaybe<Array<Scalars["Long"]>>
  nlt: InputMaybe<Scalars["Long"]>
  nlte: InputMaybe<Scalars["Long"]>
}

/** 會員諮詢 */
export type Consult = {
  __typename: "Consult"
  /** 取得所屬小分類 */
  categories: Maybe<Array<Maybe<Category>>>
  /** 取得諮詢時間 */
  consultAt: Scalars["Long"]
  /** 諮詢內容 */
  content: Maybe<Scalars["String"]>
  /** 諮詢天數 */
  days: Scalars["Int"]
  /** 是否開啟 */
  enable: Scalars["Boolean"]
  /** 開啟到期時間 */
  expiresIn: Scalars["Long"]
  /** 物件識別碼 */
  id: Maybe<Scalars["String"]>
  /** 諮詢圖片 */
  images: Maybe<Array<Maybe<Scalars["String"]>>>
  /** 取得發文者 */
  poster: Maybe<User>
  /** 諮詢標題 */
  subject: Maybe<Scalars["String"]>
  /** 取得診所諮詢討論 */
  topics: Maybe<Array<Maybe<ClinicConsultTopic>>>
}

export type ConsultClinicInput = {
  /**
   * 諮詢小分類
   * ///
   */
  categories: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  clinicId: InputMaybe<Scalars["String"]>
  /** 諮詢內容 */
  content: InputMaybe<Scalars["String"]>
  /** 諮詢天數 */
  days: Scalars["Int"]
  /** 諮詢圖片 */
  images: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** 諮詢標題 */
  subject: InputMaybe<Scalars["String"]>
  /** 諮詢者識別碼，對應 User.Id */
  userId: InputMaybe<Scalars["String"]>
}

export type ConsultClinicPayload = {
  __typename: "ConsultClinicPayload"
  id: Maybe<Scalars["String"]>
  /** 診所話題識別碼，對應 ClinicConsultTopic.Id */
  topicId: Maybe<Scalars["String"]>
}

/** 討論串回覆 */
export type ConsultTopicReply = {
  __typename: "ConsultTopicReply"
  /** 回覆內容 */
  content: Maybe<Scalars["String"]>
  /** 回覆內容類型，可為 image 或 text */
  contentType: Maybe<Scalars["String"]>
  /** 取得回覆時間 */
  createdAt: Scalars["Long"]
  /** 物件識別碼 */
  id: Maybe<Scalars["String"]>
  /** 訊息已讀時間 */
  readAt: Scalars["Long"]
  /** 取得回覆者 */
  replier: Maybe<User>
  /** 取得回覆診所 */
  topic: Maybe<ClinicConsultTopic>
  /** 討論串識別碼，對應 ClinicConsultTopic.Id */
  topicId: Maybe<Scalars["String"]>
  /** 回覆者識別碼 */
  userId: Maybe<Scalars["String"]>
}

/** 以 email + password 建立 firebase 使用者 */
export type CreateUserWithEmailAndPasswordInput = {
  /** 使用者信箱 */
  email: InputMaybe<Scalars["String"]>
  /** 使用者密碼 */
  password: InputMaybe<Scalars["String"]>
}

/** 以 email + password 建立 firebase 使用者 */
export type CreateUserWithEmailAndPasswordPayload = {
  __typename: "CreateUserWithEmailAndPasswordPayload"
  /** Firebase token */
  firebaseToken: Maybe<Scalars["String"]>
}

/** 客製化 token 內容 */
export type CustomTokenPayload = {
  __typename: "CustomTokenPayload"
  /** 客製完成 token 字串 */
  customToken: Maybe<Scalars["String"]>
  /** Firebase uid */
  uid: Maybe<Scalars["String"]>
}

/** 刪除診所活動頁 */
export type DeleteActivityInput = {
  id: InputMaybe<Scalars["String"]>
}

export type DeleteActivityPayload = {
  __typename: "DeleteActivityPayload"
  id: Maybe<Scalars["String"]>
}

/** 刪除廠商廣告卡參數 */
export type DeleteAdCardInput = {
  id: InputMaybe<Scalars["String"]>
}

export type DeleteAdCardPayload = {
  __typename: "DeleteAdCardPayload"
  id: Maybe<Scalars["String"]>
}

/** 刪除廣告圖片參數 */
export type DeleteAdImageInput = {
  id: InputMaybe<Scalars["String"]>
}

export type DeleteAdImagePayload = {
  __typename: "DeleteAdImagePayload"
  id: Maybe<Scalars["String"]>
}

export type DeleteCaseInput = {
  id: InputMaybe<Scalars["String"]>
}

export type DeleteCasePayload = {
  __typename: "DeleteCasePayload"
  id: Maybe<Scalars["String"]>
}

/** 刪除小分類輸入 */
export type DeleteCategoryInput = {
  id: InputMaybe<Scalars["String"]>
}

/** 刪除小分類結果 */
export type DeleteCategoryPayload = {
  __typename: "DeleteCategoryPayload"
  id: Maybe<Scalars["String"]>
}

/** 移除使用者裝置輸入資訊 */
export type DeleteClientTokenInput = {
  /** 使用者裝置識別碼 */
  clientToken: InputMaybe<Scalars["String"]>
}

/** 移除使用者裝置輸出資訊 */
export type DeleteClientTokenPayload = {
  __typename: "DeleteClientTokenPayload"
  /** 使用者識別碼 */
  userId: Maybe<Scalars["String"]>
}

/** 刪除診所圖片參數 */
export type DeleteClinicImageInput = {
  id: InputMaybe<Scalars["String"]>
}

export type DeleteClinicImagePayload = {
  __typename: "DeleteClinicImagePayload"
  id: Maybe<Scalars["String"]>
}

export type DeleteClinicInput = {
  id: InputMaybe<Scalars["String"]>
}

export type DeleteClinicPayload = {
  __typename: "DeleteClinicPayload"
  id: Maybe<Scalars["String"]>
}

export type DeleteConsultInput = {
  id: InputMaybe<Scalars["String"]>
}

export type DeleteConsultPayload = {
  __typename: "DeleteConsultPayload"
  id: Maybe<Scalars["String"]>
}

export type DeleteDoctorInput = {
  id: InputMaybe<Scalars["String"]>
}

export type DeleteDoctorPayload = {
  __typename: "DeleteDoctorPayload"
  id: Maybe<Scalars["String"]>
}

/** 關鍵字輸入 */
export type DeletePopularKeywordInput = {
  /** 刪除關鍵字 */
  keyword: InputMaybe<Scalars["String"]>
}

/** 關鍵字回覆 */
export type DeletePopularKeywordPayload = {
  __typename: "DeletePopularKeywordPayload"
  /** 已刪除關鍵字尸 */
  keyword: Maybe<Scalars["String"]>
}

/** 刪除貼文內容 */
export type DeletePostInput = {
  id: InputMaybe<Scalars["String"]>
}

/** 刪除貼文回覆 */
export type DeletePostPayload = {
  __typename: "DeletePostPayload"
  id: Maybe<Scalars["String"]>
}

/** 刪除中分類輸入 */
export type DeleteSecondCategoryInput = {
  id: InputMaybe<Scalars["String"]>
}

/** 刪除中分類結果 */
export type DeleteSecondCategoryPayload = {
  __typename: "DeleteSecondCategoryPayload"
  id: Maybe<Scalars["String"]>
}

/** 刪除大分類輸入 */
export type DeleteTopCategoryInput = {
  id: InputMaybe<Scalars["String"]>
}

/** 刪除大分類結果 */
export type DeleteTopCategoryPayload = {
  __typename: "DeleteTopCategoryPayload"
  id: Maybe<Scalars["String"]>
}

export type DeleteUserInput = {
  id: InputMaybe<Scalars["String"]>
}

export type DeleteUserPayload = {
  __typename: "DeleteUserPayload"
  id: Maybe<Scalars["String"]>
}

/** A connection to a list of items. */
export type DoctorsConnection = {
  __typename: "DoctorsConnection"
  /** A list of edges. */
  edges: Maybe<Array<DoctorsEdge>>
  /** A flattened list of the nodes. */
  nodes: Maybe<Array<Maybe<ClinicDoctor>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type DoctorsEdge = {
  __typename: "DoctorsEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node: Maybe<ClinicDoctor>
}

/** Email 是否已被註冊 */
export type EmailExistsPayload = {
  __typename: "EmailExistsPayload"
  exists: Scalars["Boolean"]
}

/** 開關諮詢輸入 */
export type EnableConsultInput = {
  /** 開 true/ 關 false */
  enable: Scalars["Boolean"]
  id: InputMaybe<Scalars["String"]>
}

/** /// 開關結果 */
export type EnableConsultPayload = {
  __typename: "EnableConsultPayload"
  /** 開 true/ 關 false */
  enable: Scalars["Boolean"]
  /** 諮詢公開到期日 */
  expiresIn: Scalars["Long"]
  id: Maybe<Scalars["String"]>
}

export type ListStringOperationFilterInput = {
  all: InputMaybe<StringOperationFilterInput>
  any: InputMaybe<Scalars["Boolean"]>
  none: InputMaybe<StringOperationFilterInput>
  some: InputMaybe<StringOperationFilterInput>
}

export type Mutation = {
  __typename: "Mutation"
  /** [廠商]新增診所活動 */
  addActivity: Maybe<AddActivityPayload>
  /** [廠商]新增廠商廣告卡 */
  addAdCard: Maybe<AddAdCardPayload>
  /** [廠商]新增 Banner 廣告圖 */
  addAdImage: Maybe<AddAdImagePayload>
  /** [會員]問卷回覆 */
  addAnswer: Maybe<AddAnswerPayload>
  /**
   * [廠商]新增案例。
   * 錯誤碼 5001: 診所可用組數為 0.
   * 錯誤碼 5002: 診所已存在案例已達到上限。
   */
  addCase: Maybe<AddCasePayload>
  /** [廠商]建立小分類 */
  addCategory: Maybe<AddCategoryPayload>
  /** [會員]使用者加入裝置識別碼 */
  addClientToken: Maybe<AddClientTokenPayload>
  /** [廠商]新增診所 */
  addClinic: Maybe<AddClinicPayload>
  /** [廠商]新增診所圖片 */
  addClinicImage: Maybe<AddClinicImagePayload>
  /** [使用者]諮詢 */
  addConsult: Maybe<AddConsultPayload>
  /** [診所管理員]診所第一次諮詢回覆。會先針對該諮詢建立一個診所與該諮詢的話題（topic），日後的來回問答皆會在此話題之中。 */
  addConsultTopic: Maybe<AddConsultTopicPayload>
  /** [廠商]新增診所醫生 */
  addDoctor: Maybe<AddDoctorPayload>
  /** 新增熱門關鍵字 */
  addPopularKeyword: Maybe<AddPopularKeywordPayload>
  /** [廠商]新增發文 */
  addPost: Maybe<AddPostPayload>
  /** [廠商]新增問卷 */
  addQuestion: Maybe<AddQuestionPayload>
  /** [廠商]建立中分類 */
  addSecondCategory: Maybe<AddSecondCategoryPayload>
  /** ［廠商］建立大分類 */
  addTopCategory: Maybe<AddTopCategoryPayload>
  /** [會員註冊]新增使用者，在 firebase 新增完後呼叫此 API 新增 */
  addUser: Maybe<AddUserPayload>
  /** [會員]使用者將指定病例加入蒐藏 */
  collectCase: Maybe<CollectCasePayload>
  /** [會員]一對一諮詢，由使用者直接諮詢診所 */
  consultClinic: Maybe<ConsultClinicPayload>
  /** 以 Email+Password 建立 firebase 使用者 */
  createUserWithEmailAndPassword: Maybe<CreateUserWithEmailAndPasswordPayload>
  /** [廠商]刪除診所活動頁 */
  deleteActivity: Maybe<DeleteActivityPayload>
  /** [廠商]刪除廠商廣告卡 */
  deleteAdCard: Maybe<DeleteAdCardPayload>
  /** [廠商]刪除 Banner 廣告圖 */
  deleteAdImage: Maybe<DeleteAdImagePayload>
  /** [廠商]刪除案例 */
  deleteCase: Maybe<DeleteCasePayload>
  /** [廠商]刪除小分類 */
  deleteCategory: Maybe<DeleteCategoryPayload>
  /** [會員]使用者移除裝置識別碼 */
  deleteClientToken: Maybe<DeleteClientTokenPayload>
  /** [廠商]刪除診所 */
  deleteClinic: Maybe<DeleteClinicPayload>
  /** [廠商]刪除診所圖片 */
  deleteClinicImage: Maybe<DeleteClinicImagePayload>
  /**
   * [會員]刪除諮詢
   * 錯誤碼 4031: 非諮詢者本人進行刪除
   */
  deleteConsult: Maybe<DeleteConsultPayload>
  /** [廠商]刪除診所醫生 */
  deleteDoctor: Maybe<DeleteDoctorPayload>
  /** 刪除熱門關鍵字 */
  deletePopularKeyword: Maybe<DeletePopularKeywordPayload>
  /** [廠商]刪除貼文 */
  deletePost: Maybe<DeletePostPayload>
  /** 刪除中分類 */
  deleteSecondCategory: Maybe<DeleteSecondCategoryPayload>
  /** 刪除大分類 */
  deleteTopCategory: Maybe<DeleteTopCategoryPayload>
  /** [會員]刪除使用者 */
  deleteUser: Maybe<DeleteUserPayload>
  /**
   * [會員]啟動/關閉諮詢
   * 錯誤碼 4031: 非諮詢者本人進行刪除
   */
  enableConsult: Maybe<EnableConsultPayload>
  /** [診所管理員]讀取診所收件夾訊息 */
  readClinicInbox: Maybe<ReadClinicInboxPayload>
  /** [會員/診所管理員]讀取諮詢回覆 */
  readReply: Maybe<ReadReplyPayload>
  /** [會員]移除已蒐集病例 */
  removeCollectedCase: Maybe<RemoveCollectedCasePayload>
  /** [會員]回覆話題 */
  replyTopic: Maybe<ReplyTopicPayload>
  /**
   * 重新寄發認證信
   * 錯誤碼： 5001，寄發時發生錯誤
   */
  sendEmailVerification: Maybe<SendEmailVerificationPayload>
  /**
   * 寄發密碼重設認證信，若成功會回傳 succeed = true.
   * 若失敗會回傳 code 5001
   */
  sendPasswordResetEmail: Maybe<SendPasswordResetEmailPayload>
  /** [廠商]設定熱門關鍵字 */
  setPopularKeywords: Maybe<SetPopularKeywordsPayload>
  /**
   * 以 Email + Password 來登入使用者
   *
   *
   * **Returns:**
   * 登入成功之 Token
   */
  signInWithEmailAndPassword: Maybe<SignInWithEmailAndPasswordPayload>
  /** [廠商]更新診所活動頁 */
  updateActivity: Maybe<UpdateActivityPayload>
  /** [廠商]更新廠商廣告卡 */
  updateAdCard: Maybe<UpdateAdCardPayload>
  /** [廠商]修改 Banner 廣告圖 */
  updateAdImage: Maybe<UpdateAdImagePayload>
  /** [廠商]更新案例 */
  updateCase: Maybe<UpdateCasePayload>
  /** [廠商]修改小分類 */
  updateCategory: Maybe<UpdateCategoryPayload>
  /** [廠商]修改診所基本資訊 */
  updateClinic: Maybe<UpdateClinicPayload>
  /** [診所管理員]更新診所專長分類 */
  updateClinicCategory: Maybe<UpdateClinicCategoryPayload>
  /** [廠商]修改診所聯絡人資訊 */
  updateClinicContact: Maybe<UpdateClinicContactPayload>
  /** [廠商]修改診所圖片 */
  updateClinicImage: Maybe<UpdateClinicImagePayload>
  /** [廠商]修改診所聯絡人資訊 */
  updateClinicOwner: Maybe<UpdateClinicOwnerPayload>
  /** [廠商]修改診所付費資訊。 */
  updateClinicPayment: Maybe<UpdateClinicPaymentPayload>
  /** [廠商]更新診所醫生 */
  updateDoctor: Maybe<UpdateDoctorPayload>
  /** [廠商]修改貼文內容 */
  updatePost: Maybe<UpdatePostPayload>
  /** [廠商]修改中分類 */
  updateSecondCategory: Maybe<UpdateSecondCategoryPayload>
  /** [廠商]修改大分類 */
  updateTopCategory: Maybe<UpdateTopCategoryPayload>
  /** [會員]更新使用者資料 */
  updateUser: Maybe<UpdateUserPayload>
}

export type MutationAddActivityArgs = {
  input: InputMaybe<AddActivityInput>
}

export type MutationAddAdCardArgs = {
  input: InputMaybe<AddAdCardInput>
}

export type MutationAddAdImageArgs = {
  input: InputMaybe<AddAdImageInput>
}

export type MutationAddAnswerArgs = {
  input: InputMaybe<AddAnswerInput>
}

export type MutationAddCaseArgs = {
  input: InputMaybe<AddCaseInput>
}

export type MutationAddCategoryArgs = {
  input: InputMaybe<AddCategoryInput>
}

export type MutationAddClientTokenArgs = {
  input: InputMaybe<AddClientTokenInput>
}

export type MutationAddClinicArgs = {
  input: InputMaybe<AddClinicInput>
}

export type MutationAddClinicImageArgs = {
  input: InputMaybe<AddClinicImageInput>
}

export type MutationAddConsultArgs = {
  input: InputMaybe<AddConsultInput>
}

export type MutationAddConsultTopicArgs = {
  input: InputMaybe<AddConsultTopicInput>
}

export type MutationAddDoctorArgs = {
  input: InputMaybe<AddDoctorInput>
}

export type MutationAddPopularKeywordArgs = {
  input: InputMaybe<AddPopularKeywordInput>
}

export type MutationAddPostArgs = {
  input: InputMaybe<AddPostInput>
}

export type MutationAddQuestionArgs = {
  input: InputMaybe<AddQuestionInput>
}

export type MutationAddSecondCategoryArgs = {
  input: InputMaybe<AddSecondCategoryInput>
}

export type MutationAddTopCategoryArgs = {
  input: InputMaybe<AddTopCategoryInput>
}

export type MutationAddUserArgs = {
  input: InputMaybe<AddUserInput>
}

export type MutationCollectCaseArgs = {
  input: InputMaybe<CollectCaseInput>
}

export type MutationConsultClinicArgs = {
  input: InputMaybe<ConsultClinicInput>
}

export type MutationCreateUserWithEmailAndPasswordArgs = {
  input: InputMaybe<CreateUserWithEmailAndPasswordInput>
}

export type MutationDeleteActivityArgs = {
  input: InputMaybe<DeleteActivityInput>
}

export type MutationDeleteAdCardArgs = {
  input: InputMaybe<DeleteAdCardInput>
}

export type MutationDeleteAdImageArgs = {
  input: InputMaybe<DeleteAdImageInput>
}

export type MutationDeleteCaseArgs = {
  input: InputMaybe<DeleteCaseInput>
}

export type MutationDeleteCategoryArgs = {
  input: InputMaybe<DeleteCategoryInput>
}

export type MutationDeleteClientTokenArgs = {
  input: InputMaybe<DeleteClientTokenInput>
}

export type MutationDeleteClinicArgs = {
  input: InputMaybe<DeleteClinicInput>
}

export type MutationDeleteClinicImageArgs = {
  input: InputMaybe<DeleteClinicImageInput>
}

export type MutationDeleteConsultArgs = {
  input: InputMaybe<DeleteConsultInput>
}

export type MutationDeleteDoctorArgs = {
  input: InputMaybe<DeleteDoctorInput>
}

export type MutationDeletePopularKeywordArgs = {
  input: InputMaybe<DeletePopularKeywordInput>
}

export type MutationDeletePostArgs = {
  input: InputMaybe<DeletePostInput>
}

export type MutationDeleteSecondCategoryArgs = {
  input: InputMaybe<DeleteSecondCategoryInput>
}

export type MutationDeleteTopCategoryArgs = {
  input: InputMaybe<DeleteTopCategoryInput>
}

export type MutationDeleteUserArgs = {
  input: InputMaybe<DeleteUserInput>
}

export type MutationEnableConsultArgs = {
  input: InputMaybe<EnableConsultInput>
}

export type MutationReadClinicInboxArgs = {
  input: ReadClinicInboxInput
}

export type MutationReadReplyArgs = {
  input: InputMaybe<ReadReplyInput>
}

export type MutationRemoveCollectedCaseArgs = {
  input: InputMaybe<RemoveCollectedCaseInput>
}

export type MutationReplyTopicArgs = {
  input: InputMaybe<ReplyTopicInput>
}

export type MutationSendEmailVerificationArgs = {
  input: InputMaybe<SendEmailVerificationInput>
}

export type MutationSendPasswordResetEmailArgs = {
  input: InputMaybe<SendPasswordResetEmailInput>
}

export type MutationSetPopularKeywordsArgs = {
  input: InputMaybe<SetPopularKeywordsInput>
}

export type MutationSignInWithEmailAndPasswordArgs = {
  input: InputMaybe<SignInWithEmailAndPasswordInput>
}

export type MutationUpdateActivityArgs = {
  input: InputMaybe<UpdateActivityInput>
}

export type MutationUpdateAdCardArgs = {
  input: InputMaybe<UpdateAdCardInput>
}

export type MutationUpdateAdImageArgs = {
  input: InputMaybe<UpdateAdImageInput>
}

export type MutationUpdateCaseArgs = {
  input: InputMaybe<UpdateCaseInput>
}

export type MutationUpdateCategoryArgs = {
  input: InputMaybe<UpdateCategoryInput>
}

export type MutationUpdateClinicArgs = {
  input: InputMaybe<UpdateClinicInput>
}

export type MutationUpdateClinicCategoryArgs = {
  input: InputMaybe<UpdateClinicCategoryInput>
}

export type MutationUpdateClinicContactArgs = {
  input: InputMaybe<UpdateClinicContactInput>
}

export type MutationUpdateClinicImageArgs = {
  input: InputMaybe<UpdateClinicImageInput>
}

export type MutationUpdateClinicOwnerArgs = {
  input: InputMaybe<UpdateClinicOwnerInput>
}

export type MutationUpdateClinicPaymentArgs = {
  input: InputMaybe<UpdateClinicPaymentInput>
}

export type MutationUpdateDoctorArgs = {
  input: InputMaybe<UpdateDoctorInput>
}

export type MutationUpdatePostArgs = {
  input: InputMaybe<UpdatePostInput>
}

export type MutationUpdateSecondCategoryArgs = {
  input: InputMaybe<UpdateSecondCategoryInput>
}

export type MutationUpdateTopCategoryArgs = {
  input: InputMaybe<UpdateTopCategoryInput>
}

export type MutationUpdateUserArgs = {
  input: InputMaybe<UpdateUserInput>
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename: "PageInfo"
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars["String"]>
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars["Boolean"]
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars["Boolean"]
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars["String"]>
}

/** 熱門搜尋 */
export type PopularKeywords = {
  __typename: "PopularKeywords"
  /** 物件識別碼 */
  id: Maybe<Scalars["String"]>
  /** 關鍵字 */
  keywords: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** 貼文 */
export type Post = {
  __typename: "Post"
  /** 內容 */
  content: Maybe<Scalars["String"]>
  /** 物件識別碼 */
  id: Maybe<Scalars["String"]>
  /** 取得發表時間 */
  postAt: Scalars["Long"]
  /** 標題 */
  subject: Maybe<Scalars["String"]>
}

/** 貼文 */
export type PostFilterInput = {
  and: InputMaybe<Array<PostFilterInput>>
  /** 內容 */
  content: InputMaybe<StringOperationFilterInput>
  /** 物件識別碼 */
  id: InputMaybe<StringOperationFilterInput>
  or: InputMaybe<Array<PostFilterInput>>
  /** 標題 */
  subject: InputMaybe<StringOperationFilterInput>
}

/** 貼文 */
export type PostSortInput = {
  /** 內容 */
  content: InputMaybe<SortEnumType>
  /** 物件識別碼 */
  id: InputMaybe<SortEnumType>
  /** 標題 */
  subject: InputMaybe<SortEnumType>
}

/** A connection to a list of items. */
export type PostsConnection = {
  __typename: "PostsConnection"
  /** A list of edges. */
  edges: Maybe<Array<PostsEdge>>
  /** A flattened list of the nodes. */
  nodes: Maybe<Array<Maybe<Post>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type PostsEdge = {
  __typename: "PostsEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node: Maybe<Post>
}

export type Query = {
  __typename: "Query"
  /** 查詢診所活動 */
  activities: Maybe<ActivitiesConnection>
  /** 依廣告卡識別碼取得廣告卡 */
  adCard: Maybe<AdCard>
  /** 查詢廠商廣告卡 */
  adCards: Maybe<AdCardsConnection>
  /** 取得所有廣告圖 */
  adImages: Maybe<AdImagesConnection>
  /** 取得所有診所 */
  allClinics: Maybe<Array<Maybe<Clinic>>>
  /** 取得指定問卷回答 */
  answersByQuestionId: Maybe<AnswersByQuestionIdConnection>
  /** 依識別碼取得病例 */
  case: Maybe<ClinicCase>
  /** 取得診所內所有案例 */
  caseByClinicId: Maybe<Array<Maybe<ClinicCase>>>
  /** 取得所有病例 */
  cases: Maybe<CasesConnection>
  /** 取得小分類 */
  categories: Maybe<Array<Maybe<Category>>>
  /** 依識別碼取得診所 */
  clinic: Maybe<Clinic>
  /** 取得指定診所圖片 */
  clinicImages: Maybe<Array<Maybe<ClinicImage>>>
  /** 取得診所信箱 */
  clinicInbox: Maybe<ClinicInboxConnection>
  /** 取得診所列表 */
  clinics: Maybe<ClinicsConnection>
  /** 取得指定的諮詢 */
  consult: Maybe<Consult>
  /** 取得所有諮詢 */
  consults: Maybe<Array<Maybe<Consult>>>
  /** 依使用者識別碼取得該使用者的所有諮詢 */
  consultsByUserId: Maybe<Array<Maybe<Consult>>>
  /**
   * 登入 firebase 後，以 firebase uid 取得該使用者在此系統中的個人資料所產生的 token,
   * 再以此 token 呼叫 signWithCustomToken(token)產生新 idToken 進行登入。
   */
  customToken: Maybe<CustomTokenPayload>
  /** 依識別碼取得醫生 */
  doctor: Maybe<ClinicDoctor>
  /** 取得診所內所有醫生 */
  doctorByClinicId: Maybe<Array<Maybe<ClinicDoctor>>>
  /** 取得所有醫生 */
  doctors: Maybe<DoctorsConnection>
  /** 註冊前判斷 email 是否已註冊 */
  emailExists: Maybe<EmailExistsPayload>
  /** 取得最新一筆發文 */
  latestPost: Maybe<Post>
  /** 取得會員個人資訊 */
  me: Maybe<User>
  /** 取得診所管理員的診所 */
  myClinic: Maybe<Clinic>
  /** 取得熱門搜尋 */
  popularKeywords: Maybe<PopularKeywords>
  /** 取得所有發文 */
  posts: Maybe<PostsConnection>
  /** 取得指定問卷 */
  question: Maybe<Question>
  /** 取得問卷列表 */
  questions: Maybe<QuestionsConnection>
  /** 更新 customToken */
  refreshToken: Maybe<CustomTokenPayload>
  /** 取得分類樹 */
  topCategories: Maybe<Array<Maybe<TopCategory>>>
  /** 依 Topic 識別碼取得 Topic */
  topic: Maybe<ClinicConsultTopic>
  /** 取得診所相關諮詢 */
  topicsByClinicId: Maybe<TopicsByClinicIdConnection>
  /** 依識別碼取得取用者 */
  user: Maybe<User>
  /** 取得所有使用者 */
  users: Maybe<UsersConnection>
}

export type QueryActivitiesArgs = {
  after: InputMaybe<Scalars["String"]>
  before: InputMaybe<Scalars["String"]>
  first: InputMaybe<Scalars["Int"]>
  last: InputMaybe<Scalars["Int"]>
  order: InputMaybe<Array<ClinicActivitySortInput>>
  where: InputMaybe<ClinicActivityFilterInput>
}

export type QueryAdCardArgs = {
  adCardId: InputMaybe<Scalars["String"]>
}

export type QueryAdCardsArgs = {
  after: InputMaybe<Scalars["String"]>
  before: InputMaybe<Scalars["String"]>
  first: InputMaybe<Scalars["Int"]>
  last: InputMaybe<Scalars["Int"]>
  order: InputMaybe<Array<AdCardSortInput>>
  where: InputMaybe<AdCardFilterInput>
}

export type QueryAdImagesArgs = {
  after: InputMaybe<Scalars["String"]>
  before: InputMaybe<Scalars["String"]>
  first: InputMaybe<Scalars["Int"]>
  last: InputMaybe<Scalars["Int"]>
  order: InputMaybe<Array<AdImageSortInput>>
  where: InputMaybe<AdImageFilterInput>
}

export type QueryAllClinicsArgs = {
  order: InputMaybe<Array<ClinicSortInput>>
}

export type QueryAnswersByQuestionIdArgs = {
  after: InputMaybe<Scalars["String"]>
  before: InputMaybe<Scalars["String"]>
  first: InputMaybe<Scalars["Int"]>
  last: InputMaybe<Scalars["Int"]>
  order: InputMaybe<Array<AnswerSortInput>>
  questionId: InputMaybe<Scalars["String"]>
  where: InputMaybe<AnswerFilterInput>
}

export type QueryCaseArgs = {
  id: InputMaybe<Scalars["String"]>
}

export type QueryCaseByClinicIdArgs = {
  clinicId: InputMaybe<Scalars["String"]>
}

export type QueryCasesArgs = {
  after: InputMaybe<Scalars["String"]>
  before: InputMaybe<Scalars["String"]>
  first: InputMaybe<Scalars["Int"]>
  last: InputMaybe<Scalars["Int"]>
  order: InputMaybe<Array<ClinicCaseSortInput>>
  where: InputMaybe<ClinicCaseFilterInput>
}

export type QueryClinicArgs = {
  id: InputMaybe<Scalars["String"]>
}

export type QueryClinicImagesArgs = {
  clinicId: InputMaybe<Scalars["String"]>
}

export type QueryClinicInboxArgs = {
  after: InputMaybe<Scalars["String"]>
  before: InputMaybe<Scalars["String"]>
  first: InputMaybe<Scalars["Int"]>
  last: InputMaybe<Scalars["Int"]>
  order: InputMaybe<Array<ClinicInboxSortInput>>
  where: InputMaybe<ClinicInboxFilterInput>
}

export type QueryClinicsArgs = {
  after: InputMaybe<Scalars["String"]>
  before: InputMaybe<Scalars["String"]>
  first: InputMaybe<Scalars["Int"]>
  last: InputMaybe<Scalars["Int"]>
  order: InputMaybe<Array<ClinicSortInput>>
  where: InputMaybe<ClinicFilterInput>
}

export type QueryConsultArgs = {
  id: InputMaybe<Scalars["String"]>
}

export type QueryConsultsByUserIdArgs = {
  userId: InputMaybe<Scalars["String"]>
}

export type QueryDoctorArgs = {
  id: InputMaybe<Scalars["String"]>
}

export type QueryDoctorByClinicIdArgs = {
  clinicId: InputMaybe<Scalars["String"]>
}

export type QueryDoctorsArgs = {
  after: InputMaybe<Scalars["String"]>
  before: InputMaybe<Scalars["String"]>
  first: InputMaybe<Scalars["Int"]>
  last: InputMaybe<Scalars["Int"]>
  order: InputMaybe<Array<ClinicDoctorSortInput>>
  where: InputMaybe<ClinicDoctorFilterInput>
}

export type QueryEmailExistsArgs = {
  email: InputMaybe<Scalars["String"]>
}

export type QueryPostsArgs = {
  after: InputMaybe<Scalars["String"]>
  before: InputMaybe<Scalars["String"]>
  first: InputMaybe<Scalars["Int"]>
  last: InputMaybe<Scalars["Int"]>
  order: InputMaybe<Array<PostSortInput>>
  where: InputMaybe<PostFilterInput>
}

export type QueryQuestionArgs = {
  id: InputMaybe<Scalars["String"]>
}

export type QueryQuestionsArgs = {
  after: InputMaybe<Scalars["String"]>
  before: InputMaybe<Scalars["String"]>
  first: InputMaybe<Scalars["Int"]>
  last: InputMaybe<Scalars["Int"]>
  order: InputMaybe<Array<QuestionSortInput>>
  where: InputMaybe<QuestionFilterInput>
}

export type QueryTopicArgs = {
  topicId: InputMaybe<Scalars["String"]>
}

export type QueryTopicsByClinicIdArgs = {
  after: InputMaybe<Scalars["String"]>
  before: InputMaybe<Scalars["String"]>
  clinicId: InputMaybe<Scalars["String"]>
  first: InputMaybe<Scalars["Int"]>
  last: InputMaybe<Scalars["Int"]>
  order: InputMaybe<Array<ClinicConsultTopicSortInput>>
  where: InputMaybe<ClinicConsultTopicFilterInput>
}

export type QueryUserArgs = {
  id: InputMaybe<Scalars["String"]>
}

export type QueryUsersArgs = {
  after: InputMaybe<Scalars["String"]>
  before: InputMaybe<Scalars["String"]>
  first: InputMaybe<Scalars["Int"]>
  last: InputMaybe<Scalars["Int"]>
  order: InputMaybe<Array<UserSortInput>>
  where: InputMaybe<UserFilterInput>
}

/** 問卷 */
export type Question = {
  __typename: "Question"
  /** 取得問卷回覆 */
  answers: Maybe<Array<Maybe<Answer>>>
  /** 物件識別碼 */
  id: Maybe<Scalars["String"]>
  /** 問卷題目 */
  items: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** 問卷 */
export type QuestionFilterInput = {
  and: InputMaybe<Array<QuestionFilterInput>>
  /** 物件識別碼 */
  id: InputMaybe<StringOperationFilterInput>
  /** 問卷題目 */
  items: InputMaybe<ListStringOperationFilterInput>
  or: InputMaybe<Array<QuestionFilterInput>>
}

/** 問卷 */
export type QuestionSortInput = {
  /** 物件識別碼 */
  id: InputMaybe<SortEnumType>
}

/** A connection to a list of items. */
export type QuestionsConnection = {
  __typename: "QuestionsConnection"
  /** A list of edges. */
  edges: Maybe<Array<QuestionsEdge>>
  /** A flattened list of the nodes. */
  nodes: Maybe<Array<Maybe<Question>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type QuestionsEdge = {
  __typename: "QuestionsEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node: Maybe<Question>
}

export type ReadClinicInboxInput = {
  /** 訊息識別碼 */
  clinicInboxId: InputMaybe<Scalars["String"]>
}

export type ReadClinicInboxPayload = {
  __typename: "ReadClinicInboxPayload"
  id: Maybe<Scalars["String"]>
}

/** 讀取諮詢回覆訊息所需資訊 */
export type ReadReplyInput = {
  /** 診所諮詢討論串識別碼 */
  topicId: InputMaybe<Scalars["String"]>
}

/** 讀取諮詢回覆訊息 */
export type ReadReplyPayload = {
  __typename: "ReadReplyPayload"
  add: Maybe<ReadReplyPayload>
  /** 己讀取訊息識別碼 */
  replyId: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** 讀取諮詢回覆訊息 */
export type ReadReplyPayloadAddArgs = {
  replyId: InputMaybe<Scalars["String"]>
}

/** 移除病例輸入資料 */
export type RemoveCollectedCaseInput = {
  /** 蒐集案例識別碼 */
  caseId: InputMaybe<Scalars["String"]>
}

/** 移除病例輸出資料 */
export type RemoveCollectedCasePayload = {
  __typename: "RemoveCollectedCasePayload"
  /** 使用者識別碼 */
  userId: Maybe<Scalars["String"]>
}

export type ReplyTopicInput = {
  /** 回覆內容 */
  content: InputMaybe<Scalars["String"]>
  /** 內容類型，image/text */
  contentType: InputMaybe<Scalars["String"]>
  /** 回覆診所諮詢 Topic 識別碼 */
  topicId: InputMaybe<Scalars["String"]>
}

export type ReplyTopicPayload = {
  __typename: "ReplyTopicPayload"
  /** 諮詢試別碼 */
  consultId: Maybe<Scalars["String"]>
  /** 回覆識別碼 */
  id: Maybe<Scalars["String"]>
  /** 主題識別碼 */
  topicId: Maybe<Scalars["String"]>
}

/** 小分類 */
export type SecondCategory = {
  __typename: "SecondCategory"
  /** 取得第三層 */
  categories: Maybe<Array<Maybe<Category>>>
  /** 物件識別碼 */
  id: Maybe<Scalars["String"]>
  /** 中分類名稱 */
  name: Maybe<Scalars["String"]>
  parentField: Maybe<Scalars["String"]>
  parentId: Maybe<Scalars["String"]>
  /** 所屬大分類識別碼 */
  topCategoryId: Maybe<Scalars["String"]>
}

export type SendEmailVerificationInput = {
  email: InputMaybe<Scalars["String"]>
}

export type SendEmailVerificationPayload = {
  __typename: "SendEmailVerificationPayload"
  succeed: Scalars["Boolean"]
}

/** 寄發重置密碼認證信 */
export type SendPasswordResetEmailInput = {
  email: InputMaybe<Scalars["String"]>
}

/** 寄發重置密碼認證信結果 */
export type SendPasswordResetEmailPayload = {
  __typename: "SendPasswordResetEmailPayload"
  succeed: Scalars["Boolean"]
}

/** 設定熱門搜尋資料 */
export type SetPopularKeywordsInput = {
  /** 關鍵字 */
  keywords: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

/** 設定熱門結果 */
export type SetPopularKeywordsPayload = {
  __typename: "SetPopularKeywordsPayload"
  keywords: Maybe<Array<Maybe<Scalars["String"]>>>
}

export type SignInWithEmailAndPasswordInput = {
  email: InputMaybe<Scalars["String"]>
  password: InputMaybe<Scalars["String"]>
}

/** 登入憑證結果 */
export type SignInWithEmailAndPasswordPayload = {
  __typename: "SignInWithEmailAndPasswordPayload"
  /** 會員系統憑證 */
  customToken: Maybe<Scalars["String"]>
  /** Firebase Auth 憑證 */
  firebaseToken: Maybe<Scalars["String"]>
}

export enum SortEnumType {
  Asc = "ASC",
  Desc = "DESC",
}

export type StringOperationFilterInput = {
  and: InputMaybe<Array<StringOperationFilterInput>>
  contains: InputMaybe<Scalars["String"]>
  endsWith: InputMaybe<Scalars["String"]>
  eq: InputMaybe<Scalars["String"]>
  in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  ncontains: InputMaybe<Scalars["String"]>
  nendsWith: InputMaybe<Scalars["String"]>
  neq: InputMaybe<Scalars["String"]>
  nin: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  nstartsWith: InputMaybe<Scalars["String"]>
  or: InputMaybe<Array<StringOperationFilterInput>>
  startsWith: InputMaybe<Scalars["String"]>
}

/** 小分類 */
export type TopCategory = {
  __typename: "TopCategory"
  /** 物件識別碼 */
  id: Maybe<Scalars["String"]>
  /** 大分類名稱 */
  name: Maybe<Scalars["String"]>
  /** 取得第二層 */
  secondCategories: Maybe<Array<Maybe<SecondCategory>>>
}

/** A connection to a list of items. */
export type TopicsByClinicIdConnection = {
  __typename: "TopicsByClinicIdConnection"
  /** A list of edges. */
  edges: Maybe<Array<TopicsByClinicIdEdge>>
  /** A flattened list of the nodes. */
  nodes: Maybe<Array<Maybe<ClinicConsultTopic>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type TopicsByClinicIdEdge = {
  __typename: "TopicsByClinicIdEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node: Maybe<ClinicConsultTopic>
}

/** 更新診所活動頁 */
export type UpdateActivityInput = {
  /** 所屬診所識別碼 */
  clinicId: InputMaybe<Scalars["String"]>
  /** 活動內容 */
  content: InputMaybe<Scalars["String"]>
  id: InputMaybe<Scalars["String"]>
  /** 活動圖片 */
  image: InputMaybe<Scalars["String"]>
  /** 活動主題 */
  subject: InputMaybe<Scalars["String"]>
}

export type UpdateActivityPayload = {
  __typename: "UpdateActivityPayload"
  id: Maybe<Scalars["String"]>
}

/** 更新廠商廣告卡參數 */
export type UpdateAdCardInput = {
  /** 廣告內容 */
  content: InputMaybe<Scalars["String"]>
  id: InputMaybe<Scalars["String"]>
  /** 廣告圖片網址 */
  image: InputMaybe<Scalars["String"]>
  /** 廣告標題 */
  title: InputMaybe<Scalars["String"]>
}

export type UpdateAdCardPayload = {
  __typename: "UpdateAdCardPayload"
  id: Maybe<Scalars["String"]>
}

/** 更新廣告圖片參數 */
export type UpdateAdImageInput = {
  /** 所屬診所 */
  clinicId: InputMaybe<Scalars["String"]>
  id: InputMaybe<Scalars["String"]>
  /** 廣告圖片網址 */
  image: InputMaybe<Scalars["String"]>
  /** 點擊後轉址類型，如：Clinic/Case/Doctor */
  redirectType: InputMaybe<Scalars["String"]>
  /** 排序 */
  sort: Scalars["Int"]
  /** 狀態： true 開啟，false 關閉 */
  status: Scalars["Boolean"]
  /** 點擊後轉址目標識別碼 */
  targetId: InputMaybe<Scalars["String"]>
  /** 標題 */
  title: InputMaybe<Scalars["String"]>
  /** 廣告圖片用途，如：首頁輪播/診所輪播/症例輪播 */
  usageType: InputMaybe<Scalars["String"]>
}

export type UpdateAdImagePayload = {
  __typename: "UpdateAdImagePayload"
  id: Maybe<Scalars["String"]>
}

export type UpdateCaseInput = {
  /** 術後照 */
  afterImage: InputMaybe<Scalars["String"]>
  /** 術後照關鍵字 */
  afterImageText: InputMaybe<Scalars["String"]>
  /** 術前照 */
  beforeImage: InputMaybe<Scalars["String"]>
  /** 術前照關鍵字 */
  beforeImageText: InputMaybe<Scalars["String"]>
  /** 案例分類 */
  categories: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** 案例描述 */
  description: InputMaybe<Scalars["String"]>
  /** 是否被設為熱門案例 */
  hot: Scalars["Boolean"]
  id: InputMaybe<Scalars["String"]>
  /** 病例標題 */
  title: InputMaybe<Scalars["String"]>
}

export type UpdateCasePayload = {
  __typename: "UpdateCasePayload"
  id: Maybe<Scalars["String"]>
}

/** 修改小分類 */
export type UpdateCategoryInput = {
  id: InputMaybe<Scalars["String"]>
  /** 小分類名稱 */
  name: InputMaybe<Scalars["String"]>
  /** 所屬大分類 */
  parent: InputMaybe<Scalars["String"]>
  /** 所屬大分類 */
  topParent: InputMaybe<Scalars["String"]>
}

/** 修改小分類結果 */
export type UpdateCategoryPayload = {
  __typename: "UpdateCategoryPayload"
  id: Maybe<Scalars["String"]>
}

/** 專長資訊 */
export type UpdateClinicCategoryInput = {
  /** 專長分類陣列 */
  categories: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

export type UpdateClinicCategoryPayload = {
  __typename: "UpdateClinicCategoryPayload"
  id: Maybe<Scalars["String"]>
}

export type UpdateClinicContactInput = {
  /** 聯絡人信箱 */
  contactEmail: InputMaybe<Scalars["String"]>
  /** 聯絡人姓名 */
  contactName: InputMaybe<Scalars["String"]>
  /** 聯絡人電話 */
  contactPhone: InputMaybe<Scalars["String"]>
  /** 診所識別碼 */
  id: InputMaybe<Scalars["String"]>
}

export type UpdateClinicContactPayload = {
  __typename: "UpdateClinicContactPayload"
  id: Maybe<Scalars["String"]>
}

/** 更新廣告圖片參數 */
export type UpdateClinicImageInput = {
  /** 所屬診所識別碼 */
  clinicId: InputMaybe<Scalars["String"]>
  id: InputMaybe<Scalars["String"]>
  /** 廣告圖片網址 */
  image: InputMaybe<Scalars["String"]>
  /** 點擊後轉址類型，如：Clinic/Case/Doctor */
  redirectType: InputMaybe<Scalars["String"]>
  /** 排序 */
  sort: Scalars["Int"]
  /** 狀態。true 開啟 false 關閉 */
  status: Scalars["Boolean"]
  /** 點擊後轉址目標識別碼 */
  targetId: InputMaybe<Scalars["String"]>
  /** 標題 */
  title: InputMaybe<Scalars["String"]>
}

export type UpdateClinicImagePayload = {
  __typename: "UpdateClinicImagePayload"
  id: Maybe<Scalars["String"]>
}

export type UpdateClinicInput = {
  /** 診所地址 */
  address: InputMaybe<Scalars["String"]>
  /** 診所小分類 */
  categories: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** 診所縣市 */
  county: InputMaybe<Scalars["String"]>
  /** 診所描述 */
  description: InputMaybe<Scalars["String"]>
  id: InputMaybe<Scalars["String"]>
  /** 診所名稱 */
  name: InputMaybe<Scalars["String"]>
  /** 診所電話 */
  phone: InputMaybe<Scalars["String"]>
  /** 診所鄉鎮市區 */
  town: InputMaybe<Scalars["String"]>
  /** 診所網站網址 */
  web: InputMaybe<Scalars["String"]>
}

export type UpdateClinicOwnerInput = {
  /** 診所識別碼 */
  id: InputMaybe<Scalars["String"]>
  /** 管理員信箱 */
  ownerEmail: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

export type UpdateClinicOwnerPayload = {
  __typename: "UpdateClinicOwnerPayload"
  id: Maybe<Scalars["String"]>
}

export type UpdateClinicPayload = {
  __typename: "UpdateClinicPayload"
  id: Maybe<Scalars["String"]>
}

export type UpdateClinicPaymentInput = {
  /** 診所識別碼 */
  id: InputMaybe<Scalars["String"]>
  /** 最後付費時間。若不傳此值則使用系統時間。 */
  latestPayAt: Scalars["Long"]
  /** 是否已付費 */
  paid: Scalars["Boolean"]
  /** 付費組數 */
  paySets: Scalars["Int"]
}

export type UpdateClinicPaymentPayload = {
  __typename: "UpdateClinicPaymentPayload"
  id: Maybe<Scalars["String"]>
}

export type UpdateDoctorInput = {
  /** 診所識別碼 */
  clinicId: InputMaybe<Scalars["String"]>
  /** 醫師專長，自填 */
  expertise: InputMaybe<Scalars["String"]>
  id: InputMaybe<Scalars["String"]>
  /** 醫師姓名 */
  name: InputMaybe<Scalars["String"]>
  /** 照片 */
  photo: InputMaybe<Scalars["String"]>
  /** 學經歷 */
  resumes: InputMaybe<Scalars["String"]>
  /** 頭銜 */
  title: InputMaybe<Scalars["String"]>
}

export type UpdateDoctorPayload = {
  __typename: "UpdateDoctorPayload"
  id: Maybe<Scalars["String"]>
}

/** 修改貼文 */
export type UpdatePostInput = {
  /** 發文內容 */
  content: InputMaybe<Scalars["String"]>
  id: InputMaybe<Scalars["String"]>
  /** 標題 */
  subject: InputMaybe<Scalars["String"]>
}

/** 修改貼文回覆 */
export type UpdatePostPayload = {
  __typename: "UpdatePostPayload"
  id: Maybe<Scalars["String"]>
}

/** 修改中分類 */
export type UpdateSecondCategoryInput = {
  id: InputMaybe<Scalars["String"]>
  /** 中分類名稱 */
  name: InputMaybe<Scalars["String"]>
  /** 所屬大分類識別碼 */
  topCategoryId: InputMaybe<Scalars["String"]>
}

/** 修改中分類結果 */
export type UpdateSecondCategoryPayload = {
  __typename: "UpdateSecondCategoryPayload"
  id: Maybe<Scalars["String"]>
}

/** 修改大分類 */
export type UpdateTopCategoryInput = {
  id: InputMaybe<Scalars["String"]>
  /** 大分類名稱 */
  name: InputMaybe<Scalars["String"]>
}

/** 修改大分類結果 */
export type UpdateTopCategoryPayload = {
  __typename: "UpdateTopCategoryPayload"
  id: Maybe<Scalars["String"]>
}

export type UpdateUserInput = {
  /** 關注分類 */
  categories: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** 使用者所使用的裝識識別碼，用於接收 firebase 訊息用 */
  clientToken: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** /// 蒐集的病症案例編號，對應 ClinicCase.id */
  collectedCases: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** 使手者電子郵件信箱，必填 */
  email: InputMaybe<Scalars["String"]>
  /** 儲存搜尋條件 */
  filters: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  id: InputMaybe<Scalars["String"]>
  /** 使用者姓名 */
  name: InputMaybe<Scalars["String"]>
  /** 使用者電話 */
  phone: InputMaybe<Scalars["String"]>
}

export type UpdateUserPayload = {
  __typename: "UpdateUserPayload"
  id: Maybe<Scalars["String"]>
}

/** 使用者資料 */
export type User = {
  __typename: "User"
  /** 取得使用者有興趣的小分類 */
  categories: Maybe<Array<Maybe<Category>>>
  /** 使用者使用的裝置識別碼，接收 firebase message 用 */
  clientTokens: Maybe<Array<Maybe<Scalars["String"]>>>
  /** 取得使用者諮詢 */
  consults: Maybe<Array<Maybe<Consult>>>
  /** 使用者電子郵件信箱 */
  email: Maybe<Scalars["String"]>
  /** 儲存搜尋條件 */
  filters: Maybe<Array<Maybe<Scalars["String"]>>>
  /** 物件識別碼 */
  id: Maybe<Scalars["String"]>
  /** 使用者名稱 */
  name: Maybe<Scalars["String"]>
  /** 使用者電話 */
  phone: Maybe<Scalars["String"]>
  replyInbox: Maybe<Array<Maybe<ConsultTopicReply>>>
  /** GCP Firebase 中的識別碼 */
  uid: Maybe<Scalars["String"]>
  /** 取得使用者蒐取病例 */
  userCollectedCases: Maybe<Array<Maybe<ClinicCase>>>
}

/** 使用者資料 */
export type UserFilterInput = {
  and: InputMaybe<Array<UserFilterInput>>
  /** 關注分類 */
  categories: InputMaybe<ListStringOperationFilterInput>
  /** 使用者使用的裝置識別碼，接收 firebase message 用 */
  clientTokens: InputMaybe<ListStringOperationFilterInput>
  /** 蒐集的病症案例編號，對應 ClinicCase.id */
  collectedCases: InputMaybe<ListStringOperationFilterInput>
  /** 使用者電子郵件信箱 */
  email: InputMaybe<StringOperationFilterInput>
  /** 儲存搜尋條件 */
  filters: InputMaybe<ListStringOperationFilterInput>
  /** 物件識別碼 */
  id: InputMaybe<StringOperationFilterInput>
  /** 使用者名稱 */
  name: InputMaybe<StringOperationFilterInput>
  or: InputMaybe<Array<UserFilterInput>>
  /** 使用者電話 */
  phone: InputMaybe<StringOperationFilterInput>
  /** GCP Firebase 中的識別碼 */
  uid: InputMaybe<StringOperationFilterInput>
}

/** 使用者資料 */
export type UserSortInput = {
  /** 使用者電子郵件信箱 */
  email: InputMaybe<SortEnumType>
  /** 物件識別碼 */
  id: InputMaybe<SortEnumType>
  /** 使用者名稱 */
  name: InputMaybe<SortEnumType>
  /** 使用者電話 */
  phone: InputMaybe<SortEnumType>
  /** GCP Firebase 中的識別碼 */
  uid: InputMaybe<SortEnumType>
}

/** A connection to a list of items. */
export type UsersConnection = {
  __typename: "UsersConnection"
  /** A list of edges. */
  edges: Maybe<Array<UsersEdge>>
  /** A flattened list of the nodes. */
  nodes: Maybe<Array<Maybe<User>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type UsersEdge = {
  __typename: "UsersEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node: Maybe<User>
}
