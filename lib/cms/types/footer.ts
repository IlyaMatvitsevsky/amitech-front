import { GetFooterQuery } from '../../../generated/schema';

export type CmsFooterItem = NonNullable<NonNullable<NonNullable<NonNullable<GetFooterQuery['footer']>['data']>['attributes']>>

export type CmsFooterIcons = NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<GetFooterQuery['footer']>['data']>['attributes']>['icons']>>

export type CmsFooterLinks = NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<GetFooterQuery['footer']>['data']>['attributes']>['links']>>

export interface IIconItem {
  href: string
  text: string
  url: string
}

export interface ILinkItem {
  text: string
  href: string
}

export type FooterStructure = {
  text: string
  links: ILinkItem[]
  icons: IIconItem[]
}|null

export type GetFooterOperation<T extends FooterStructure = FooterStructure> = {
  data: T
}
