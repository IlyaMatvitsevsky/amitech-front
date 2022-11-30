import { GetPrivacyQuery } from '../../../generated/schema';

export type CmsPrivacyItem = NonNullable<NonNullable<NonNullable<NonNullable<GetPrivacyQuery['privacy']>['data']>['attributes']>>

export type PrivacyStructure = {
  privacy: string
}|null

export type GetPrivacyOperation<T extends PrivacyStructure = PrivacyStructure> = {
  data: T
}