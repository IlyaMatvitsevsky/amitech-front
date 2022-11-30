import { GetWorkQuery } from '../../../generated/schema';
import { Image } from '@lib/cms/types/image';
import { Link } from '@lib/cms/types/page';

export type CmsWorkItem = NonNullable<NonNullable<GetWorkQuery['works']>['data'][0]>
export type CmsWorkItemAttributes = NonNullable<NonNullable<NonNullable<GetWorkQuery['works']>['data'][0]>['attributes']>


type WorkBannerType = {
  items: {
    name: string
    work: string
    image: Image|null
  }[]
  images: Image[]|null
}

type AboutWorkType = {
  title: string
  description: string
}

export type ContactUsBanner = {
  title: string
  description: string
  button: Link|null
}

export type WorkStructure = {
  name: string
  workBanner: WorkBannerType[]|null
  aboutWork: AboutWorkType|null
  contactUsBanner: ContactUsBanner|null
}

export type GetWorkOperation<T extends WorkStructure = WorkStructure> = {
  data: T
  variables: {
    name: string
  }
}
