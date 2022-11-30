import { ButtonFragment, GetPageContentQuery, ImageFragment, ImagesFragment } from 'generated/schema';
import { BlockType, ButtonType, Link, PageBlock } from '../types/page';
import { Image } from '../types/image';
import { filterEdges } from '@lib/cms/utils/array';
import { normalizeButtonsType } from '@lib/cms/utils/header';

type Data = NonNullable<NonNullable<GetPageContentQuery['pages']>['data'][0]>

type CmsContentBlock = NonNullable<NonNullable<Data['attributes']>['blocks']>[0]

const normalizeButtonType = (type: string) => {
  if(type === 'Primary') {
    return ButtonType.Primary
  }
  if(type === 'Secondary') {
    return ButtonType.Secondary
  }
  if(type === 'Link') {
    return ButtonType.Link
  }
  if(type === 'Contact') {
    return ButtonType.Contact
  }
}

export const normalizeButtonLink = (
  button: ButtonFragment,
): Link => {
  const label = button.label || ''
  let path = button.href || ''
  return {
    buttonType: normalizeButtonType(button?.buttonType || 'Primary'),
    label,
    path,
  }
}

export const normalizeImage = (image: ImageFragment): Image => ({
  url: `${process.env.STRAPI_FILE_URL}${image.data?.attributes?.url || ''}`,
  // url: image.data?.attributes?.url || '',
  altText: image.data?.attributes?.alternativeText || '',
  height: image && image.data ? image.data.attributes?.height : null,
  width: image && image.data ? image.data.attributes?.width : null,
})

export const normalizeImages = (images: ImagesFragment): Image[] => {
  return images.data.map((image) => ({
    url: `${process.env.STRAPI_FILE_URL}${image.attributes?.url || ''}`,
    // url: image.data?.attributes?.url || '',
    altText: image.attributes?.alternativeText || '',
    height: image && image ? image.attributes?.height : null,
    width: image && image ? image.attributes?.width : null,
  }))
}

type NormalizeBlock<T> = (block: T) => PageBlock

type CreateContentBlockHandler = <T extends Omit<CmsContentBlock, 'id'>>(params: {
  normalizeBlock: NormalizeBlock<T&CmsContentBlock>
}) => {
  normalizeBlock: typeof params.normalizeBlock
}

const createContentBlockHandler: CreateContentBlockHandler = (params) => {
  const { normalizeBlock } = params
  return {
    normalizeBlock,
  }
}

const descriptionBannerBlock = createContentBlockHandler<{
  __typename: 'ComponentBlocksDescriptionBanner',
}>({
  normalizeBlock: (contentBlock) => {
    const { image, button, title, description } = contentBlock
    return {
      type: BlockType.DescriptionBanner,
      data: {
        title: title || '',
        description: description || '',
        button: button ? normalizeButtonLink(button) : null,
        image: image ? normalizeImage(image) : null,
      }
    }
  }
})

const organizationDescriptionBlock = createContentBlockHandler<{
  __typename: 'ComponentBlocksOrganizationBanner',
}>({
  normalizeBlock: (contentBlock) => {
    const { text } = contentBlock
    return {
      type: BlockType.OrganizationDescription,
      data: {
        text: text || '',
      },
    }
  }
})

const technologiesBannerBlock = createContentBlockHandler<{
  __typename: 'ComponentBlocksTechnologiesBanner',
}>({
  normalizeBlock: (contentBlock) => {
    const { items, isBg } = contentBlock
    return {
      type: BlockType.TechnologiesBanner,
      isBg: isBg || false,
      items: filterEdges(items).map(({ image, name, work }) => ({
        image: image ? normalizeImage(image) : null,
        name: name || '',
        work: work || ''
      }))
    }
  }
})

const organizationBannerBlock = createContentBlockHandler<{
  __typename: 'ComponentBlocksOrganizationBanner',
}>({
  normalizeBlock: (contentBlock) => {
    const { title, text, lists, image, direction, isBg } = contentBlock
    return {
      type: BlockType.OrganizationBanner,
      data: {
        title: title || '',
        text: text || '',
        isBg: isBg || false,
        direction: direction || 'row',
        lists: lists ? filterEdges(lists).map(({ item }) => ({item: item || ''})) : null ,
        image: image ? normalizeImage(image) : null,
      }
    }
  }
})

const servicesBannerBlock = createContentBlockHandler<{
  __typename: 'ComponentBlocksServicesBanner',
}>({
  normalizeBlock: (contentBlock) => {
    const { services, items } = contentBlock
    return {
      type: BlockType.ServicesBanner,
      services: filterEdges(services).map(({ name, icon }) => ({
        name: name || '',
        icon: icon ? normalizeImage(icon) : null,
      })),
      items: filterEdges(items).map(({ image, description, title }) => ({
        title: title || '',
        description: description || '',
        image: image ? normalizeImage(image) : null,
      }))
    }
  }
})

const acceleratorBannerBlock = createContentBlockHandler<{
  __typename: 'ComponentBlocksAcceleratorBanner',
}>({
  normalizeBlock: (contentBlock) => {
    const { text, title, button, bgImage } = contentBlock
    return {
      type: BlockType.AcceleratorBanner,
      data: {
        text: text || '',
        title: title || '',
        bgImage: bgImage ? normalizeImage(bgImage) : null,
        button: button ? normalizeButtonLink(button) : null,
      }
    }
  }
})

const ourOffersBannerBlock = createContentBlockHandler<{
  __typename: 'ComponentBlocksOurOffersBanner',
}>({
  normalizeBlock: (contentBlock) => {
    const { items } = contentBlock
    return {
      type: BlockType.OurOffersBanner,
      items: filterEdges(items).map(({ text, image, button, title, benefits }) => ({
        text: text || '',
        title: title || '',
        image: image ? normalizeImage(image) : null,
        button: button ? normalizeButtonLink(button) : null,
        benefits: filterEdges(benefits || []).map(({item}) => ({item: item || ''}))
      }))
    }
  }
})

const reviewsSliderBannerBlock = createContentBlockHandler<{
  __typename: 'ComponentBlocksReviewsSliderBanner',
}>({
  normalizeBlock: (contentBlock) => {
    const { title, items } = contentBlock
    return {
      type: BlockType.ReviewsSlider,
      data: {
        title: title || '',
        items: filterEdges(items || []).map(({ text, avatar, user, company }) => ({
          text: text || '',
          user: user || '',
          company: company || '',
          avatar: avatar ? normalizeImage(avatar) : null
        }))
      }
    }
  }
})

const featuredWorkBannerBlock = createContentBlockHandler<{
  __typename: 'ComponentBlocksFeaturedWorkBanner',
}>({
  normalizeBlock: (contentBlock) => {
    const { title, items } = contentBlock
    return {
      type: BlockType.FeaturedWorkBanner,
      data: {
        title: title || '',
        items: filterEdges(items || []).map(({ image, button, title, description }) => ({
          title: title || '',
          description: description || '',
          image: image ? normalizeImage(image) : null,
          button: button ? normalizeButtonLink(button) : null
        }))
      }
    }
  }
})

const engagementModelBlock = createContentBlockHandler<{
  __typename: 'ComponentBlocksEngagementModel',
}>({
  normalizeBlock: (contentBlock) => {
    const { title, description, items } = contentBlock
    return {
      type: BlockType.EngagementModel,
      data: {
        title: title || '',
        description: description || '',
        items: filterEdges(items || []).map(({ name, icon }) => ({
          name: name || '',
          icon: icon ? normalizeImage(icon) : null,
        }))
      }
    }
  }
})

const codeOfConductBannerBlock = createContentBlockHandler<{
  __typename: 'ComponentBlocksCodeOfConductBanner',
}>({
  normalizeBlock: (contentBlock) => {
    const { title, list } = contentBlock
    return {
      type: BlockType.CodeOfConductBanner,
      data: {
        title: title || '',
        list: filterEdges(list || []).map(({ item }) => ({
          item: item || '',
        }))
      }
    }
  }
})

const contactInfoBannerBlock = createContentBlockHandler<{
  __typename: 'ComponentBlocksContactInfoBanner',
}>({
  normalizeBlock: (contentBlock) => {
    const { title, items } = contentBlock
    return {
      type: BlockType.ContactInfoBanner,
      data: {
        title: title || '',
        items: filterEdges(items || []).map(({ text, title, icon, link }) => ({
          title: title || '',
          text: text || '',
          icon: icon ? normalizeImage(icon) : null,
          link: link ? normalizeButtonsType(link) : null
        }))
      }
    }
  }
})

const errorBlock = createContentBlockHandler<{
  __typename: 'Error',
}>({
  normalizeBlock: () => {
    return {
      type: BlockType.NoType,
    }
  }
})


const blockHandlers = {
  ComponentBlocksDescriptionBanner: descriptionBannerBlock,
  ComponentBlocksOrganizationDescription: organizationDescriptionBlock,
  ComponentBlocksTechnologiesBanner: technologiesBannerBlock,
  ComponentBlocksOrganizationBanner: organizationBannerBlock,
  ComponentBlocksServicesBanner: servicesBannerBlock,
  ComponentBlocksAcceleratorBanner: acceleratorBannerBlock,
  ComponentBlocksOurOffersBanner: ourOffersBannerBlock,
  ComponentBlocksReviewsSliderBanner: reviewsSliderBannerBlock,
  ComponentBlocksFeaturedWorkBanner: featuredWorkBannerBlock,
  ComponentBlocksEngagementModel: engagementModelBlock,
  ComponentBlocksCodeOfConductBanner: codeOfConductBannerBlock,
  ComponentBlocksContactInfoBanner: contactInfoBannerBlock,
  Error: errorBlock,
}

type BlocksHandlers = typeof blockHandlers

const createContentHandler = (
  {
    blockHandlersMap,
  }: {
    blockHandlersMap: BlocksHandlers
  }) => {
  const normalizeBlock = (
    contentBlock: CmsContentBlock,
    // loadedData: LoadedData
  ): PageBlock => {
    // as any to avoid TS2590 Type error: Expression produces a union type that is too complex to represent.
    const blockHandler = blockHandlersMap[contentBlock.__typename] as any
    if ( blockHandler ) {
      return blockHandler.normalizeBlock(contentBlock as any)
    }
    return {
      type: BlockType.NoType,
    }
  }
  return {
    normalizeBlock,
  }
}

export const contentHandler = createContentHandler({
  blockHandlersMap: blockHandlers,
})