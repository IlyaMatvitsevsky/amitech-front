export type Maybe<T> = T
export type InputMaybe<T> = T
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
  DateTime: any
  JSON: any
  PageBlocksDynamicZoneInput: any
  Upload: any
}

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  contains?: InputMaybe<Scalars['Boolean']>
  containsi?: InputMaybe<Scalars['Boolean']>
  endsWith?: InputMaybe<Scalars['Boolean']>
  eq?: InputMaybe<Scalars['Boolean']>
  eqi?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['Boolean']>
  gte?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  lt?: InputMaybe<Scalars['Boolean']>
  lte?: InputMaybe<Scalars['Boolean']>
  ne?: InputMaybe<Scalars['Boolean']>
  not?: InputMaybe<BooleanFilterInput>
  notContains?: InputMaybe<Scalars['Boolean']>
  notContainsi?: InputMaybe<Scalars['Boolean']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  startsWith?: InputMaybe<Scalars['Boolean']>
}

export type ComponentBlocksAcceleratorBanner = {
  __typename?: 'ComponentBlocksAcceleratorBanner'
  bgImage?: Maybe<UploadFileEntityResponse>
  button?: Maybe<ComponentSharedButton>
  id: Scalars['ID']
  text?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type ComponentBlocksCodeOfConductBanner = {
  __typename?: 'ComponentBlocksCodeOfConductBanner'
  id: Scalars['ID']
  list?: Maybe<Array<Maybe<ComponentSharedList>>>
  title?: Maybe<Scalars['String']>
}

export type ComponentBlocksCodeOfConductBannerListArgs = {
  filters?: InputMaybe<ComponentSharedListFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlocksContactInfoBanner = {
  __typename?: 'ComponentBlocksContactInfoBanner'
  id: Scalars['ID']
  items?: Maybe<Array<Maybe<ComponentContactInfoItemContactInfoItem1>>>
  title?: Maybe<Scalars['String']>
}

export type ComponentBlocksContactInfoBannerItemsArgs = {
  filters?: InputMaybe<ComponentContactInfoItemContactInfoItem1FiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlocksDescriptionBanner = {
  __typename?: 'ComponentBlocksDescriptionBanner'
  button?: Maybe<ComponentSharedButton>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  image?: Maybe<UploadFileEntityResponse>
  title?: Maybe<Scalars['String']>
}

export type ComponentBlocksEngagementModel = {
  __typename?: 'ComponentBlocksEngagementModel'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  items?: Maybe<Array<Maybe<ComponentServicesBannerItemServiceBannerSelectorItem>>>
  title?: Maybe<Scalars['String']>
}

export type ComponentBlocksEngagementModelItemsArgs = {
  filters?: InputMaybe<ComponentServicesBannerItemServiceBannerSelectorItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlocksFeaturedWorkBanner = {
  __typename?: 'ComponentBlocksFeaturedWorkBanner'
  id: Scalars['ID']
  items?: Maybe<Array<Maybe<ComponentFeaturedWorkBannerItemFeaturedWorkBannerItem>>>
  title?: Maybe<Scalars['String']>
}

export type ComponentBlocksFeaturedWorkBannerItemsArgs = {
  filters?: InputMaybe<ComponentFeaturedWorkBannerItemFeaturedWorkBannerItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlocksOrganizationBanner = {
  __typename?: 'ComponentBlocksOrganizationBanner'
  direction?: Maybe<Enum_Componentblocksorganizationbanner_Direction>
  id: Scalars['ID']
  image?: Maybe<UploadFileEntityResponse>
  isBg?: Maybe<Scalars['Boolean']>
  lists?: Maybe<Array<Maybe<ComponentSharedList>>>
  text?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type ComponentBlocksOrganizationBannerListsArgs = {
  filters?: InputMaybe<ComponentSharedListFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlocksOrganizationDescription = {
  __typename?: 'ComponentBlocksOrganizationDescription'
  id: Scalars['ID']
  text?: Maybe<Scalars['String']>
}

export type ComponentBlocksOurOffersBanner = {
  __typename?: 'ComponentBlocksOurOffersBanner'
  id: Scalars['ID']
  items?: Maybe<Array<Maybe<ComponentOurOffersBannerItemOurOffersBannerItem>>>
}

export type ComponentBlocksOurOffersBannerItemsArgs = {
  filters?: InputMaybe<ComponentOurOffersBannerItemOurOffersBannerItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlocksReviewsSliderBanner = {
  __typename?: 'ComponentBlocksReviewsSliderBanner'
  id: Scalars['ID']
  items?: Maybe<Array<Maybe<ComponentReviewsSliderItemReviewsSliderItem>>>
  title?: Maybe<Scalars['String']>
}

export type ComponentBlocksReviewsSliderBannerItemsArgs = {
  filters?: InputMaybe<ComponentReviewsSliderItemReviewsSliderItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlocksServicesBanner = {
  __typename?: 'ComponentBlocksServicesBanner'
  id: Scalars['ID']
  items?: Maybe<Array<Maybe<ComponentServicesBannerItemServiceBannerItem>>>
  services?: Maybe<Array<Maybe<ComponentServicesBannerItemServiceBannerSelectorItem>>>
}

export type ComponentBlocksServicesBannerItemsArgs = {
  filters?: InputMaybe<ComponentServicesBannerItemServiceBannerItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlocksServicesBannerServicesArgs = {
  filters?: InputMaybe<ComponentServicesBannerItemServiceBannerSelectorItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlocksTechnologiesBanner = {
  __typename?: 'ComponentBlocksTechnologiesBanner'
  id: Scalars['ID']
  isBg?: Maybe<Scalars['Boolean']>
  items?: Maybe<Array<Maybe<ComponentTechnologiesBannerItemTechnologiesBannerItem>>>
}

export type ComponentBlocksTechnologiesBannerItemsArgs = {
  filters?: InputMaybe<ComponentTechnologiesBannerItemTechnologiesBannerItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentContactInfoItemContactInfoItem1 = {
  __typename?: 'ComponentContactInfoItemContactInfoItem1'
  icon?: Maybe<UploadFileEntityResponse>
  id: Scalars['ID']
  link?: Maybe<Array<Maybe<ComponentSharedButton>>>
  text?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type ComponentContactInfoItemContactInfoItem1LinkArgs = {
  filters?: InputMaybe<ComponentSharedButtonFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentContactInfoItemContactInfoItem1FiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContactInfoItemContactInfoItem1FiltersInput>>>
  link?: InputMaybe<ComponentSharedButtonFiltersInput>
  not?: InputMaybe<ComponentContactInfoItemContactInfoItem1FiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentContactInfoItemContactInfoItem1FiltersInput>>>
  text?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
}

export type ComponentFeaturedWorkBannerItemFeaturedWorkBannerItem = {
  __typename?: 'ComponentFeaturedWorkBannerItemFeaturedWorkBannerItem'
  button?: Maybe<ComponentSharedButton>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  image?: Maybe<UploadFileEntityResponse>
  title?: Maybe<Scalars['String']>
}

export type ComponentFeaturedWorkBannerItemFeaturedWorkBannerItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFeaturedWorkBannerItemFeaturedWorkBannerItemFiltersInput>>>
  button?: InputMaybe<ComponentSharedButtonFiltersInput>
  description?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentFeaturedWorkBannerItemFeaturedWorkBannerItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentFeaturedWorkBannerItemFeaturedWorkBannerItemFiltersInput>>>
  title?: InputMaybe<StringFilterInput>
}

export type ComponentOurOffersBannerItemOurOffersBannerItem = {
  __typename?: 'ComponentOurOffersBannerItemOurOffersBannerItem'
  benefits?: Maybe<Array<Maybe<ComponentSharedList>>>
  button?: Maybe<ComponentSharedButton>
  id: Scalars['ID']
  image?: Maybe<UploadFileEntityResponse>
  text?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type ComponentOurOffersBannerItemOurOffersBannerItemBenefitsArgs = {
  filters?: InputMaybe<ComponentSharedListFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentOurOffersBannerItemOurOffersBannerItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentOurOffersBannerItemOurOffersBannerItemFiltersInput>>>
  benefits?: InputMaybe<ComponentSharedListFiltersInput>
  button?: InputMaybe<ComponentSharedButtonFiltersInput>
  not?: InputMaybe<ComponentOurOffersBannerItemOurOffersBannerItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentOurOffersBannerItemOurOffersBannerItemFiltersInput>>>
  text?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
}

export type ComponentReviewsSliderItemReviewsSliderItem = {
  __typename?: 'ComponentReviewsSliderItemReviewsSliderItem'
  avatar?: Maybe<UploadFileEntityResponse>
  company?: Maybe<Scalars['String']>
  id: Scalars['ID']
  text?: Maybe<Scalars['String']>
  user?: Maybe<Scalars['String']>
}

export type ComponentReviewsSliderItemReviewsSliderItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentReviewsSliderItemReviewsSliderItemFiltersInput>>>
  company?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentReviewsSliderItemReviewsSliderItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentReviewsSliderItemReviewsSliderItemFiltersInput>>>
  text?: InputMaybe<StringFilterInput>
  user?: InputMaybe<StringFilterInput>
}

export type ComponentSeoMetaRepeatable = {
  __typename?: 'ComponentSeoMetaRepeatable'
  content?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
}

export type ComponentSeoMetaRepeatableFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSeoMetaRepeatableFiltersInput>>>
  content?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentSeoMetaRepeatableFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentSeoMetaRepeatableFiltersInput>>>
}

export type ComponentSeoMetaRepeatableInput = {
  content?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
}

export type ComponentSeoSeo = {
  __typename?: 'ComponentSeoSeo'
  id: Scalars['ID']
  meta?: Maybe<Array<Maybe<ComponentSeoMetaRepeatable>>>
  metaDescription?: Maybe<Scalars['String']>
  metaImage?: Maybe<UploadFileEntityResponse>
  metaTitle?: Maybe<Scalars['String']>
  preventIndexing?: Maybe<Scalars['Boolean']>
  structureData?: Maybe<Scalars['JSON']>
}

export type ComponentSeoSeoMetaArgs = {
  filters?: InputMaybe<ComponentSeoMetaRepeatableFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentSeoSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSeoSeoFiltersInput>>>
  meta?: InputMaybe<ComponentSeoMetaRepeatableFiltersInput>
  metaDescription?: InputMaybe<StringFilterInput>
  metaTitle?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentSeoSeoFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentSeoSeoFiltersInput>>>
  preventIndexing?: InputMaybe<BooleanFilterInput>
  structureData?: InputMaybe<JsonFilterInput>
}

export type ComponentSeoSeoInput = {
  id?: InputMaybe<Scalars['ID']>
  meta?: InputMaybe<Array<InputMaybe<ComponentSeoMetaRepeatableInput>>>
  metaDescription?: InputMaybe<Scalars['String']>
  metaImage?: InputMaybe<Scalars['ID']>
  metaTitle?: InputMaybe<Scalars['String']>
  preventIndexing?: InputMaybe<Scalars['Boolean']>
  structureData?: InputMaybe<Scalars['JSON']>
}

export type ComponentServicesBannerItemServiceBannerItem = {
  __typename?: 'ComponentServicesBannerItemServiceBannerItem'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  image?: Maybe<UploadFileEntityResponse>
  title?: Maybe<Scalars['String']>
}

export type ComponentServicesBannerItemServiceBannerItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServicesBannerItemServiceBannerItemFiltersInput>>>
  description?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentServicesBannerItemServiceBannerItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentServicesBannerItemServiceBannerItemFiltersInput>>>
  title?: InputMaybe<StringFilterInput>
}

export type ComponentServicesBannerItemServiceBannerSelectorItem = {
  __typename?: 'ComponentServicesBannerItemServiceBannerSelectorItem'
  icon?: Maybe<UploadFileEntityResponse>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
}

export type ComponentServicesBannerItemServiceBannerSelectorItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServicesBannerItemServiceBannerSelectorItemFiltersInput>>>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentServicesBannerItemServiceBannerSelectorItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentServicesBannerItemServiceBannerSelectorItemFiltersInput>>>
}

export type ComponentSharedButton = {
  __typename?: 'ComponentSharedButton'
  buttonType?: Maybe<Enum_Componentsharedbutton_Buttontype>
  href?: Maybe<Scalars['String']>
  id: Scalars['ID']
  label?: Maybe<Scalars['String']>
  linkType?: Maybe<Enum_Componentsharedbutton_Linktype>
  page?: Maybe<PageEntityResponse>
}

export type ComponentSharedButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedButtonFiltersInput>>>
  buttonType?: InputMaybe<StringFilterInput>
  href?: InputMaybe<StringFilterInput>
  label?: InputMaybe<StringFilterInput>
  linkType?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentSharedButtonFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentSharedButtonFiltersInput>>>
  page?: InputMaybe<PageFiltersInput>
}

export type ComponentSharedButtonInput = {
  buttonType?: InputMaybe<Enum_Componentsharedbutton_Buttontype>
  href?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  label?: InputMaybe<Scalars['String']>
  linkType?: InputMaybe<Enum_Componentsharedbutton_Linktype>
  page?: InputMaybe<Scalars['ID']>
}

export type ComponentSharedIcon = {
  __typename?: 'ComponentSharedIcon'
  href?: Maybe<Scalars['String']>
  icon?: Maybe<UploadFileEntityResponse>
  id: Scalars['ID']
}

export type ComponentSharedIconFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedIconFiltersInput>>>
  href?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentSharedIconFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentSharedIconFiltersInput>>>
}

export type ComponentSharedIconInput = {
  href?: InputMaybe<Scalars['String']>
  icon?: InputMaybe<Scalars['ID']>
  id?: InputMaybe<Scalars['ID']>
}

export type ComponentSharedLink = {
  __typename?: 'ComponentSharedLink'
  href?: Maybe<Scalars['String']>
  id: Scalars['ID']
  text?: Maybe<Scalars['String']>
}

export type ComponentSharedLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedLinkFiltersInput>>>
  href?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentSharedLinkFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentSharedLinkFiltersInput>>>
  text?: InputMaybe<StringFilterInput>
}

export type ComponentSharedLinkInput = {
  href?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  text?: InputMaybe<Scalars['String']>
}

export type ComponentSharedList = {
  __typename?: 'ComponentSharedList'
  id: Scalars['ID']
  item?: Maybe<Scalars['String']>
}

export type ComponentSharedListFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedListFiltersInput>>>
  item?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentSharedListFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentSharedListFiltersInput>>>
}

export type ComponentTechnologiesBannerItemTechnologiesBannerItem = {
  __typename?: 'ComponentTechnologiesBannerItemTechnologiesBannerItem'
  id: Scalars['ID']
  image?: Maybe<UploadFileEntityResponse>
  name?: Maybe<Scalars['String']>
  work?: Maybe<Scalars['String']>
}

export type ComponentTechnologiesBannerItemTechnologiesBannerItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentTechnologiesBannerItemTechnologiesBannerItemFiltersInput>>>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentTechnologiesBannerItemTechnologiesBannerItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentTechnologiesBannerItemTechnologiesBannerItemFiltersInput>>>
  work?: InputMaybe<StringFilterInput>
}

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  contains?: InputMaybe<Scalars['DateTime']>
  containsi?: InputMaybe<Scalars['DateTime']>
  endsWith?: InputMaybe<Scalars['DateTime']>
  eq?: InputMaybe<Scalars['DateTime']>
  eqi?: InputMaybe<Scalars['DateTime']>
  gt?: InputMaybe<Scalars['DateTime']>
  gte?: InputMaybe<Scalars['DateTime']>
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  lt?: InputMaybe<Scalars['DateTime']>
  lte?: InputMaybe<Scalars['DateTime']>
  ne?: InputMaybe<Scalars['DateTime']>
  not?: InputMaybe<DateTimeFilterInput>
  notContains?: InputMaybe<Scalars['DateTime']>
  notContainsi?: InputMaybe<Scalars['DateTime']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  startsWith?: InputMaybe<Scalars['DateTime']>
}

export enum Enum_Componentblocksorganizationbanner_Direction {
  Revers = 'revers',
  Row = 'row',
}

export enum Enum_Componentsharedbutton_Buttontype {
  Link = 'Link',
  Primary = 'Primary',
  Secondary = 'Secondary',
}

export enum Enum_Componentsharedbutton_Linktype {
  Email = 'Email',
  Page = 'Page',
  Phone = 'Phone',
  Url = 'URL',
}

export type Error = {
  __typename?: 'Error'
  code: Scalars['String']
  message?: Maybe<Scalars['String']>
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  contains?: InputMaybe<Scalars['Float']>
  containsi?: InputMaybe<Scalars['Float']>
  endsWith?: InputMaybe<Scalars['Float']>
  eq?: InputMaybe<Scalars['Float']>
  eqi?: InputMaybe<Scalars['Float']>
  gt?: InputMaybe<Scalars['Float']>
  gte?: InputMaybe<Scalars['Float']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  lt?: InputMaybe<Scalars['Float']>
  lte?: InputMaybe<Scalars['Float']>
  ne?: InputMaybe<Scalars['Float']>
  not?: InputMaybe<FloatFilterInput>
  notContains?: InputMaybe<Scalars['Float']>
  notContainsi?: InputMaybe<Scalars['Float']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  startsWith?: InputMaybe<Scalars['Float']>
}

export type Footer = {
  __typename?: 'Footer'
  createdAt?: Maybe<Scalars['DateTime']>
  icons?: Maybe<Array<Maybe<ComponentSharedIcon>>>
  links?: Maybe<Array<Maybe<ComponentSharedLink>>>
  publishedAt?: Maybe<Scalars['DateTime']>
  text?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type FooterIconsArgs = {
  filters?: InputMaybe<ComponentSharedIconFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type FooterLinksArgs = {
  filters?: InputMaybe<ComponentSharedLinkFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type FooterEntity = {
  __typename?: 'FooterEntity'
  attributes?: Maybe<Footer>
  id?: Maybe<Scalars['ID']>
}

export type FooterEntityResponse = {
  __typename?: 'FooterEntityResponse'
  data?: Maybe<FooterEntity>
}

export type FooterInput = {
  icons?: InputMaybe<Array<InputMaybe<ComponentSharedIconInput>>>
  links?: InputMaybe<Array<InputMaybe<ComponentSharedLinkInput>>>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  text?: InputMaybe<Scalars['String']>
}

export type GenericMorph =
  | ComponentBlocksAcceleratorBanner
  | ComponentBlocksCodeOfConductBanner
  | ComponentBlocksContactInfoBanner
  | ComponentBlocksDescriptionBanner
  | ComponentBlocksEngagementModel
  | ComponentBlocksFeaturedWorkBanner
  | ComponentBlocksOrganizationBanner
  | ComponentBlocksOrganizationDescription
  | ComponentBlocksOurOffersBanner
  | ComponentBlocksReviewsSliderBanner
  | ComponentBlocksServicesBanner
  | ComponentBlocksTechnologiesBanner
  | ComponentContactInfoItemContactInfoItem1
  | ComponentFeaturedWorkBannerItemFeaturedWorkBannerItem
  | ComponentOurOffersBannerItemOurOffersBannerItem
  | ComponentReviewsSliderItemReviewsSliderItem
  | ComponentSeoMetaRepeatable
  | ComponentSeoSeo
  | ComponentServicesBannerItemServiceBannerItem
  | ComponentServicesBannerItemServiceBannerSelectorItem
  | ComponentSharedButton
  | ComponentSharedIcon
  | ComponentSharedLink
  | ComponentSharedList
  | ComponentTechnologiesBannerItemTechnologiesBannerItem
  | Footer
  | Header
  | I18NLocale
  | Page
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser

export type Header = {
  __typename?: 'Header'
  buttons?: Maybe<Array<Maybe<ComponentSharedButton>>>
  createdAt?: Maybe<Scalars['DateTime']>
  links?: Maybe<Array<Maybe<ComponentSharedButton>>>
  logo?: Maybe<UploadFileEntityResponse>
  logoUrl?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type HeaderButtonsArgs = {
  filters?: InputMaybe<ComponentSharedButtonFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type HeaderLinksArgs = {
  filters?: InputMaybe<ComponentSharedButtonFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type HeaderEntity = {
  __typename?: 'HeaderEntity'
  attributes?: Maybe<Header>
  id?: Maybe<Scalars['ID']>
}

export type HeaderEntityResponse = {
  __typename?: 'HeaderEntityResponse'
  data?: Maybe<HeaderEntity>
}

export type HeaderInput = {
  buttons?: InputMaybe<Array<InputMaybe<ComponentSharedButtonInput>>>
  links?: InputMaybe<Array<InputMaybe<ComponentSharedButtonInput>>>
  logo?: InputMaybe<Scalars['ID']>
  logoUrl?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
}

export type I18NLocale = {
  __typename?: 'I18NLocale'
  code?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity'
  attributes?: Maybe<I18NLocale>
  id?: Maybe<Scalars['ID']>
}

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse'
  data?: Maybe<I18NLocaleEntity>
}

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection'
  data: Array<I18NLocaleEntity>
  meta: ResponseCollectionMeta
}

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  code?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<I18NLocaleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  contains?: InputMaybe<Scalars['ID']>
  containsi?: InputMaybe<Scalars['ID']>
  endsWith?: InputMaybe<Scalars['ID']>
  eq?: InputMaybe<Scalars['ID']>
  eqi?: InputMaybe<Scalars['ID']>
  gt?: InputMaybe<Scalars['ID']>
  gte?: InputMaybe<Scalars['ID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  lt?: InputMaybe<Scalars['ID']>
  lte?: InputMaybe<Scalars['ID']>
  ne?: InputMaybe<Scalars['ID']>
  not?: InputMaybe<IdFilterInput>
  notContains?: InputMaybe<Scalars['ID']>
  notContainsi?: InputMaybe<Scalars['ID']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  startsWith?: InputMaybe<Scalars['ID']>
}

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  contains?: InputMaybe<Scalars['Int']>
  containsi?: InputMaybe<Scalars['Int']>
  endsWith?: InputMaybe<Scalars['Int']>
  eq?: InputMaybe<Scalars['Int']>
  eqi?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  ne?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<IntFilterInput>
  notContains?: InputMaybe<Scalars['Int']>
  notContainsi?: InputMaybe<Scalars['Int']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  startsWith?: InputMaybe<Scalars['Int']>
}

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  contains?: InputMaybe<Scalars['JSON']>
  containsi?: InputMaybe<Scalars['JSON']>
  endsWith?: InputMaybe<Scalars['JSON']>
  eq?: InputMaybe<Scalars['JSON']>
  eqi?: InputMaybe<Scalars['JSON']>
  gt?: InputMaybe<Scalars['JSON']>
  gte?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  lt?: InputMaybe<Scalars['JSON']>
  lte?: InputMaybe<Scalars['JSON']>
  ne?: InputMaybe<Scalars['JSON']>
  not?: InputMaybe<JsonFilterInput>
  notContains?: InputMaybe<Scalars['JSON']>
  notContainsi?: InputMaybe<Scalars['JSON']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  startsWith?: InputMaybe<Scalars['JSON']>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>
  createPage?: Maybe<PageEntityResponse>
  createUploadFile?: Maybe<UploadFileEntityResponse>
  createUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteFooter?: Maybe<FooterEntityResponse>
  deleteHeader?: Maybe<HeaderEntityResponse>
  deletePage?: Maybe<PageEntityResponse>
  deleteUploadFile?: Maybe<UploadFileEntityResponse>
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>
  /** Register a user */
  register: UsersPermissionsLoginPayload
  removeFile?: Maybe<UploadFileEntityResponse>
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateFileInfo: UploadFileEntityResponse
  updateFooter?: Maybe<FooterEntityResponse>
  updateHeader?: Maybe<HeaderEntityResponse>
  updatePage?: Maybe<PageEntityResponse>
  updateUploadFile?: Maybe<UploadFileEntityResponse>
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  upload: UploadFileEntityResponse
}

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']
  password: Scalars['String']
  passwordConfirmation: Scalars['String']
}

export type MutationCreatePageArgs = {
  data: PageInput
}

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput
}

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput
}

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

export type MutationDeletePageArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>
  files: Array<InputMaybe<Scalars['Upload']>>
  ref?: InputMaybe<Scalars['String']>
  refId?: InputMaybe<Scalars['ID']>
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationRemoveFileArgs = {
  id: Scalars['ID']
}

export type MutationResetPasswordArgs = {
  code: Scalars['String']
  password: Scalars['String']
  passwordConfirmation: Scalars['String']
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']
  info?: InputMaybe<FileInfoInput>
}

export type MutationUpdateFooterArgs = {
  data: FooterInput
}

export type MutationUpdateHeaderArgs = {
  data: HeaderInput
}

export type MutationUpdatePageArgs = {
  data: PageInput
  id: Scalars['ID']
}

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput
  id: Scalars['ID']
}

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput
  id: Scalars['ID']
}

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
  id: Scalars['ID']
}

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
  id: Scalars['ID']
}

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>
  file: Scalars['Upload']
  info?: InputMaybe<FileInfoInput>
  ref?: InputMaybe<Scalars['String']>
  refId?: InputMaybe<Scalars['ID']>
}

export type Page = {
  __typename?: 'Page'
  blocks?: Maybe<Array<Maybe<PageBlocksDynamicZone>>>
  createdAt?: Maybe<Scalars['DateTime']>
  image?: Maybe<UploadFileEntityResponse>
  path?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  seo?: Maybe<ComponentSeoSeo>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type PageBlocksDynamicZone =
  | ComponentBlocksAcceleratorBanner
  | ComponentBlocksCodeOfConductBanner
  | ComponentBlocksContactInfoBanner
  | ComponentBlocksDescriptionBanner
  | ComponentBlocksEngagementModel
  | ComponentBlocksFeaturedWorkBanner
  | ComponentBlocksOrganizationBanner
  | ComponentBlocksOrganizationDescription
  | ComponentBlocksOurOffersBanner
  | ComponentBlocksReviewsSliderBanner
  | ComponentBlocksServicesBanner
  | ComponentBlocksTechnologiesBanner
  | Error

export type PageEntity = {
  __typename?: 'PageEntity'
  attributes?: Maybe<Page>
  id?: Maybe<Scalars['ID']>
}

export type PageEntityResponse = {
  __typename?: 'PageEntityResponse'
  data?: Maybe<PageEntity>
}

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection'
  data: Array<PageEntity>
  meta: ResponseCollectionMeta
}

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<PageFiltersInput>
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>
  path?: InputMaybe<StringFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  seo?: InputMaybe<ComponentSeoSeoFiltersInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type PageInput = {
  blocks?: InputMaybe<Array<Scalars['PageBlocksDynamicZoneInput']>>
  image?: InputMaybe<Scalars['ID']>
  path?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  seo?: InputMaybe<ComponentSeoSeoInput>
  title?: InputMaybe<Scalars['String']>
}

export type Pagination = {
  __typename?: 'Pagination'
  page: Scalars['Int']
  pageCount: Scalars['Int']
  pageSize: Scalars['Int']
  total: Scalars['Int']
}

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
  start?: InputMaybe<Scalars['Int']>
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query'
  footer?: Maybe<FooterEntityResponse>
  header?: Maybe<HeaderEntityResponse>
  i18NLocale?: Maybe<I18NLocaleEntityResponse>
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>
  me?: Maybe<UsersPermissionsMe>
  page?: Maybe<PageEntityResponse>
  pages?: Maybe<PageEntityResponseCollection>
  uploadFile?: Maybe<UploadFileEntityResponse>
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>
  uploadFolder?: Maybe<UploadFolderEntityResponse>
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>
}

export type QueryFooterArgs = {
  publicationState?: InputMaybe<PublicationState>
}

export type QueryHeaderArgs = {
  publicationState?: InputMaybe<PublicationState>
}

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta'
  pagination: Pagination
}

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  containsi?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  eq?: InputMaybe<Scalars['String']>
  eqi?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  ne?: InputMaybe<Scalars['String']>
  not?: InputMaybe<StringFilterInput>
  notContains?: InputMaybe<Scalars['String']>
  notContainsi?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type UploadFile = {
  __typename?: 'UploadFile'
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  ext?: Maybe<Scalars['String']>
  formats?: Maybe<Scalars['JSON']>
  hash: Scalars['String']
  height?: Maybe<Scalars['Int']>
  mime: Scalars['String']
  name: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<GenericMorph>>>
  size: Scalars['Float']
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  width?: Maybe<Scalars['Int']>
}

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity'
  attributes?: Maybe<UploadFile>
  id?: Maybe<Scalars['ID']>
}

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse'
  data?: Maybe<UploadFileEntity>
}

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection'
  data: Array<UploadFileEntity>
  meta: ResponseCollectionMeta
}

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  caption?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  ext?: InputMaybe<StringFilterInput>
  folder?: InputMaybe<UploadFolderFiltersInput>
  folderPath?: InputMaybe<StringFilterInput>
  formats?: InputMaybe<JsonFilterInput>
  hash?: InputMaybe<StringFilterInput>
  height?: InputMaybe<IntFilterInput>
  id?: InputMaybe<IdFilterInput>
  mime?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  previewUrl?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  provider_metadata?: InputMaybe<JsonFilterInput>
  size?: InputMaybe<FloatFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
  width?: InputMaybe<IntFilterInput>
}

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  ext?: InputMaybe<Scalars['String']>
  folder?: InputMaybe<Scalars['ID']>
  folderPath?: InputMaybe<Scalars['String']>
  formats?: InputMaybe<Scalars['JSON']>
  hash?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Int']>
  mime?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  previewUrl?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  provider_metadata?: InputMaybe<Scalars['JSON']>
  size?: InputMaybe<Scalars['Float']>
  url?: InputMaybe<Scalars['String']>
  width?: InputMaybe<Scalars['Int']>
}

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection'
  data: Array<UploadFileEntity>
}

export type UploadFolder = {
  __typename?: 'UploadFolder'
  children?: Maybe<UploadFolderRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']>
  files?: Maybe<UploadFileRelationResponseCollection>
  name: Scalars['String']
  parent?: Maybe<UploadFolderEntityResponse>
  path: Scalars['String']
  pathId: Scalars['Int']
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity'
  attributes?: Maybe<UploadFolder>
  id?: Maybe<Scalars['ID']>
}

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse'
  data?: Maybe<UploadFolderEntity>
}

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection'
  data: Array<UploadFolderEntity>
  meta: ResponseCollectionMeta
}

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  children?: InputMaybe<UploadFolderFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  files?: InputMaybe<UploadFileFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFolderFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  parent?: InputMaybe<UploadFolderFiltersInput>
  path?: InputMaybe<StringFilterInput>
  pathId?: InputMaybe<IntFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  parent?: InputMaybe<Scalars['ID']>
  path?: InputMaybe<Scalars['String']>
  pathId?: InputMaybe<Scalars['Int']>
}

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection'
  data: Array<UploadFolderEntity>
}

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']
  password: Scalars['String']
  provider?: Scalars['String']
}

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: Maybe<Scalars['String']>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  blocked?: Maybe<Scalars['Boolean']>
  confirmed?: Maybe<Scalars['Boolean']>
  email?: Maybe<Scalars['String']>
  id: Scalars['ID']
  role?: Maybe<UsersPermissionsMeRole>
  username: Scalars['String']
}

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
}

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  action: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity'
  attributes?: Maybe<UsersPermissionsPermission>
  id?: Maybe<Scalars['ID']>
}

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection'
  data: Array<UsersPermissionsPermissionEntity>
}

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']
  password: Scalars['String']
  username: Scalars['String']
}

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  name: Scalars['String']
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  type?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>
}

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity'
  attributes?: Maybe<UsersPermissionsRole>
  id?: Maybe<Scalars['ID']>
}

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse'
  data?: Maybe<UsersPermissionsRoleEntity>
}

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection'
  data: Array<UsersPermissionsRoleEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  type?: InputMaybe<Scalars['String']>
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  blocked?: Maybe<Scalars['Boolean']>
  confirmed?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['DateTime']>
  email: Scalars['String']
  provider?: Maybe<Scalars['String']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']>
  username: Scalars['String']
}

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity'
  attributes?: Maybe<UsersPermissionsUser>
  id?: Maybe<Scalars['ID']>
}

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse'
  data?: Maybe<UsersPermissionsUserEntity>
}

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection'
  data: Array<UsersPermissionsUserEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  blocked?: InputMaybe<BooleanFilterInput>
  confirmationToken?: InputMaybe<StringFilterInput>
  confirmed?: InputMaybe<BooleanFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  email?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsUserFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  password?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  resetPasswordToken?: InputMaybe<StringFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  username?: InputMaybe<StringFilterInput>
}

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>
  confirmationToken?: InputMaybe<Scalars['String']>
  confirmed?: InputMaybe<Scalars['Boolean']>
  email?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  resetPasswordToken?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['ID']>
  username?: InputMaybe<Scalars['String']>
}

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection'
  data: Array<UsersPermissionsUserEntity>
}

export type ButtonFragment = {
  __typename?: 'ComponentSharedButton'
  id: string
  label?: string
  linkType?: Enum_Componentsharedbutton_Linktype
  href?: string
  buttonType?: Enum_Componentsharedbutton_Buttontype
  page?: {
    __typename: 'PageEntityResponse'
    data?: { __typename?: 'PageEntity'; attributes?: { __typename?: 'Page'; title?: string; path?: string } }
  }
}

export type ImageFragment = {
  __typename?: 'UploadFileEntityResponse'
  data?: {
    __typename?: 'UploadFileEntity'
    attributes?: { __typename?: 'UploadFile'; alternativeText?: string; url: string; width?: number; height?: number }
  }
}

export type GetFooterQueryVariables = Exact<{ [key: string]: never }>

export type GetFooterQuery = {
  __typename?: 'Query'
  footer?: {
    __typename?: 'FooterEntityResponse'
    data?: {
      __typename?: 'FooterEntity'
      attributes?: {
        __typename?: 'Footer'
        text?: string
        links?: Array<{ __typename?: 'ComponentSharedLink'; text?: string; href?: string }>
        icons?: Array<{
          __typename?: 'ComponentSharedIcon'
          href?: string
          icon?: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              attributes?: {
                __typename?: 'UploadFile'
                alternativeText?: string
                url: string
                width?: number
                height?: number
              }
            }
          }
        }>
      }
    }
  }
}

export type GetPageContentQueryVariables = Exact<{
  path?: InputMaybe<Scalars['String']>
}>

export type GetPageContentQuery = {
  __typename?: 'Query'
  pages?: {
    __typename?: 'PageEntityResponseCollection'
    data: Array<{
      __typename?: 'PageEntity'
      attributes?: {
        __typename?: 'Page'
        title?: string
        path?: string
        image?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: {
              __typename?: 'UploadFile'
              alternativeText?: string
              url: string
              width?: number
              height?: number
            }
          }
        }
        blocks?: Array<
          | {
              __typename: 'ComponentBlocksAcceleratorBanner'
              title?: string
              text?: string
              button?: {
                __typename?: 'ComponentSharedButton'
                id: string
                label?: string
                linkType?: Enum_Componentsharedbutton_Linktype
                href?: string
                buttonType?: Enum_Componentsharedbutton_Buttontype
                page?: {
                  __typename: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: { __typename?: 'Page'; title?: string; path?: string }
                  }
                }
              }
              bgImage?: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  attributes?: {
                    __typename?: 'UploadFile'
                    alternativeText?: string
                    url: string
                    width?: number
                    height?: number
                  }
                }
              }
            }
          | {
              __typename: 'ComponentBlocksCodeOfConductBanner'
              title?: string
              list?: Array<{ __typename?: 'ComponentSharedList'; item?: string }>
            }
          | {
              __typename: 'ComponentBlocksContactInfoBanner'
              title?: string
              items?: Array<{
                __typename?: 'ComponentContactInfoItemContactInfoItem1'
                title?: string
                text?: string
                link?: Array<{
                  __typename?: 'ComponentSharedButton'
                  id: string
                  label?: string
                  linkType?: Enum_Componentsharedbutton_Linktype
                  href?: string
                  buttonType?: Enum_Componentsharedbutton_Buttontype
                  page?: {
                    __typename: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: { __typename?: 'Page'; title?: string; path?: string }
                    }
                  }
                }>
                icon?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    attributes?: {
                      __typename?: 'UploadFile'
                      alternativeText?: string
                      url: string
                      width?: number
                      height?: number
                    }
                  }
                }
              }>
            }
          | {
              __typename: 'ComponentBlocksDescriptionBanner'
              title?: string
              description?: string
              button?: {
                __typename?: 'ComponentSharedButton'
                id: string
                label?: string
                linkType?: Enum_Componentsharedbutton_Linktype
                href?: string
                buttonType?: Enum_Componentsharedbutton_Buttontype
                page?: {
                  __typename: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: { __typename?: 'Page'; title?: string; path?: string }
                  }
                }
              }
              image?: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  attributes?: {
                    __typename?: 'UploadFile'
                    alternativeText?: string
                    url: string
                    width?: number
                    height?: number
                  }
                }
              }
            }
          | {
              __typename: 'ComponentBlocksEngagementModel'
              title?: string
              description?: string
              items?: Array<{
                __typename?: 'ComponentServicesBannerItemServiceBannerSelectorItem'
                name?: string
                icon?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    attributes?: {
                      __typename?: 'UploadFile'
                      alternativeText?: string
                      url: string
                      width?: number
                      height?: number
                    }
                  }
                }
              }>
            }
          | {
              __typename: 'ComponentBlocksFeaturedWorkBanner'
              title?: string
              items?: Array<{
                __typename?: 'ComponentFeaturedWorkBannerItemFeaturedWorkBannerItem'
                title?: string
                description?: string
                button?: {
                  __typename?: 'ComponentSharedButton'
                  id: string
                  label?: string
                  linkType?: Enum_Componentsharedbutton_Linktype
                  href?: string
                  buttonType?: Enum_Componentsharedbutton_Buttontype
                  page?: {
                    __typename: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: { __typename?: 'Page'; title?: string; path?: string }
                    }
                  }
                }
                image?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    attributes?: {
                      __typename?: 'UploadFile'
                      alternativeText?: string
                      url: string
                      width?: number
                      height?: number
                    }
                  }
                }
              }>
            }
          | {
              __typename: 'ComponentBlocksOrganizationBanner'
              title?: string
              text?: string
              direction?: Enum_Componentblocksorganizationbanner_Direction
              isBg?: boolean
              lists?: Array<{ __typename?: 'ComponentSharedList'; item?: string }>
              image?: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  attributes?: {
                    __typename?: 'UploadFile'
                    alternativeText?: string
                    url: string
                    width?: number
                    height?: number
                  }
                }
              }
            }
          | { __typename: 'ComponentBlocksOrganizationDescription'; text?: string }
          | {
              __typename: 'ComponentBlocksOurOffersBanner'
              items?: Array<{
                __typename?: 'ComponentOurOffersBannerItemOurOffersBannerItem'
                title?: string
                text?: string
                benefits?: Array<{ __typename?: 'ComponentSharedList'; item?: string }>
                button?: {
                  __typename?: 'ComponentSharedButton'
                  id: string
                  label?: string
                  linkType?: Enum_Componentsharedbutton_Linktype
                  href?: string
                  buttonType?: Enum_Componentsharedbutton_Buttontype
                  page?: {
                    __typename: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: { __typename?: 'Page'; title?: string; path?: string }
                    }
                  }
                }
                image?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    attributes?: {
                      __typename?: 'UploadFile'
                      alternativeText?: string
                      url: string
                      width?: number
                      height?: number
                    }
                  }
                }
              }>
            }
          | {
              __typename: 'ComponentBlocksReviewsSliderBanner'
              title?: string
              items?: Array<{
                __typename?: 'ComponentReviewsSliderItemReviewsSliderItem'
                text?: string
                user?: string
                company?: string
                avatar?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    attributes?: {
                      __typename?: 'UploadFile'
                      alternativeText?: string
                      url: string
                      width?: number
                      height?: number
                    }
                  }
                }
              }>
            }
          | {
              __typename: 'ComponentBlocksServicesBanner'
              services?: Array<{
                __typename?: 'ComponentServicesBannerItemServiceBannerSelectorItem'
                name?: string
                icon?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    attributes?: {
                      __typename?: 'UploadFile'
                      alternativeText?: string
                      url: string
                      width?: number
                      height?: number
                    }
                  }
                }
              }>
              items?: Array<{
                __typename?: 'ComponentServicesBannerItemServiceBannerItem'
                title?: string
                description?: string
                image?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    attributes?: {
                      __typename?: 'UploadFile'
                      alternativeText?: string
                      url: string
                      width?: number
                      height?: number
                    }
                  }
                }
              }>
            }
          | {
              __typename: 'ComponentBlocksTechnologiesBanner'
              isBg?: boolean
              items?: Array<{
                __typename?: 'ComponentTechnologiesBannerItemTechnologiesBannerItem'
                name?: string
                work?: string
                image?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    attributes?: {
                      __typename?: 'UploadFile'
                      alternativeText?: string
                      url: string
                      width?: number
                      height?: number
                    }
                  }
                }
              }>
            }
          | { __typename: 'Error' }
        >
      }
    }>
  }
}

export type GetHeaderQueryVariables = Exact<{ [key: string]: never }>

export type GetHeaderQuery = {
  __typename?: 'Query'
  header?: {
    __typename?: 'HeaderEntityResponse'
    data?: {
      __typename?: 'HeaderEntity'
      attributes?: {
        __typename?: 'Header'
        logoUrl?: string
        links?: Array<{
          __typename?: 'ComponentSharedButton'
          id: string
          label?: string
          linkType?: Enum_Componentsharedbutton_Linktype
          href?: string
          buttonType?: Enum_Componentsharedbutton_Buttontype
          page?: {
            __typename: 'PageEntityResponse'
            data?: { __typename?: 'PageEntity'; attributes?: { __typename?: 'Page'; title?: string; path?: string } }
          }
        }>
        buttons?: Array<{
          __typename?: 'ComponentSharedButton'
          id: string
          label?: string
          linkType?: Enum_Componentsharedbutton_Linktype
          href?: string
          buttonType?: Enum_Componentsharedbutton_Buttontype
          page?: {
            __typename: 'PageEntityResponse'
            data?: { __typename?: 'PageEntity'; attributes?: { __typename?: 'Page'; title?: string; path?: string } }
          }
        }>
        logo?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: {
              __typename?: 'UploadFile'
              alternativeText?: string
              url: string
              width?: number
              height?: number
            }
          }
        }
      }
    }
  }
}
