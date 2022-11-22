import { GetHeaderQuery } from '../../../generated/schema';
import { Image } from '@lib/cms/types/image';
import { Link } from '@lib/cms/types/page';

export type CmsHeaderItem = NonNullable<NonNullable<NonNullable<NonNullable<GetHeaderQuery['header']>['data']>['attributes']>>

export type CmsHeaderButtons = NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<GetHeaderQuery['header']>['data']>['attributes']>['buttons']>>

export type HeaderStructure = {
  logoUrl: string
  logo: Image | null
  buttons: Link[]
  links: Link[]
}|null

export type GetHeaderOperation<T extends HeaderStructure = HeaderStructure> = {
  data: T
}
