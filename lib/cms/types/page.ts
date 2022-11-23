import { Image } from './image'

export enum BlockType {
  DescriptionBanner = 'DescriptionBanner',
  OrganizationDescription = 'OrganizationDescription',
  TechnologiesBanner = 'TechnologiesBanner',
  OrganizationBanner= 'OrganizationBanner',
  ServicesBanner = 'ServicesBanner',
  AcceleratorBanner = 'AcceleratorBanner',
  OurOffersBanner = 'OurOffersBanner',
  ReviewsSlider = 'ReviewsSlider',
  FeaturedWorkBanner = 'FeaturedWorkBanner',
  NoType = 'NoType',
}

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Link = 'link',
}

export type Link = {
  label: string
  path: string
  buttonType?: ButtonType
}

export type DescriptionBannerData = {
  title: string
  description: string
  button: Link | null
  image: Image | null
}

type DescriptionBanner = {
  type: BlockType.DescriptionBanner
  data: DescriptionBannerData
}

export type OrganizationDescriptionData = {
  text: string
}

type OrganizationDescription = {
  type: BlockType.OrganizationDescription
  data: OrganizationDescriptionData
}

export type TechnologiesBannerData = {
  image: Image | null
  name: string
  work: string
}

type TechnologiesBanner = {
  type: BlockType.TechnologiesBanner
  items: TechnologiesBannerData[]
  isBg: boolean
}

export type OrganizationBannerData = {
  image: Image | null
  title: string
  text: string
  direction: string
  isBg: boolean
  lists: { item: string }[] | null
}

type OrganizationBanner = {
  type: BlockType.OrganizationBanner
  data: OrganizationBannerData
}

export type ServicesBannerData = {
  name: string
  icon: Image | null
}

export type ServicesBannerItem = {
  title: string
  description: string
  image: Image | null
}

type ServicesBanner = {
  type: BlockType.ServicesBanner
  services: ServicesBannerData[]
  items: ServicesBannerItem[]
}

export type AcceleratorBannerData = {
  title: string
  text: string
  button: Link | null
  bgImage: Image | null
}

type AcceleratorBanner = {
  type: BlockType.AcceleratorBanner
  data: AcceleratorBannerData
}

export type OurOffersBannerData = {
  title: string
  text: string
  benefits: { item: string }[]
  button: Link | null
  image: Image | null
}

type OurOffersBanner = {
  type: BlockType.OurOffersBanner
  items: OurOffersBannerData[]
}

export type ReviewsSliderItem = {
  avatar: Image | null
  text: string
  user: string
  company: string
}

export type ReviewsSliderData = {
  title: string
  items: ReviewsSliderItem[]
}

type ReviewsSlider = {
  type: BlockType.ReviewsSlider
  data: ReviewsSliderData
}

export type FeaturedWorkBannerItem = {
  title: string
  description: string
  button: Link | null
  image: Image | null
}

export type FeaturedWorkBannerData = {
  title: string
  items: FeaturedWorkBannerItem[]
}

type FeaturedWorkBanner = {
  type: BlockType.FeaturedWorkBanner
  data: FeaturedWorkBannerData
}

export type PageBlock =
  | DescriptionBanner
  | OrganizationDescription
  | TechnologiesBanner
  | OrganizationBanner
  | ServicesBanner
  | AcceleratorBanner
  | OurOffersBanner
  | ReviewsSlider
  | FeaturedWorkBanner
  | { type: BlockType.NoType }

type PageContent = {
  isExist: boolean
  blocks: PageBlock[]
  image: Image | null
}

export type GetPageContentOperation<T extends PageContent = PageContent> = {
  data: T
  variables: {
    path: string
  }
}

type PageMeta = string

export type GetStaticPagePathsOperation<T extends PageMeta = PageMeta> = {
  data: T[]
  variables: {}
}