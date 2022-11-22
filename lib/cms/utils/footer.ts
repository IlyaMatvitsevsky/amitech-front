import {
  CmsFooterLinks,
  CmsFooterIcons,
  CmsFooterItem,
  FooterStructure, IIconItem, ILinkItem,
} from '@lib/cms/types/footer';
import { filterEdges } from '@lib/cms/utils/array';

export const normalizeFooter = (item?: CmsFooterItem): FooterStructure => {
  if (!item) {
    return null
  }
  const { text: rawText, icons, links } = item
  const text = rawText || ''
  const newIcons = normalizedFooterIcons(icons)
  const newLinks = normalizedFooterLinks(links)
  return {
    text,
    icons: newIcons,
    links: newLinks
  }
}

const normalizedFooterIcons = (items?: CmsFooterIcons): IIconItem[] => {
  if(!items) {
    return [] as IIconItem[]
  }
  return filterEdges(items).map(item => {
    const { icon, href: rawHref } = item
    const href = rawHref || ''
    const text = icon?.data?.attributes?.alternativeText || ''
    const url = `${process.env.STRAPI_FILE_URL}${icon?.data?.attributes?.url}` || ''
    return {
      href,
      text,
      url
    }
  })
}

const normalizedFooterLinks = (items?: CmsFooterLinks): ILinkItem[] => {
  if(!items) {
    return [] as ILinkItem[]
  }
  return filterEdges(items).map(item => {
    const { text: rawText, href: rawHref } = item
    const href = rawHref || ''
    const text = rawText || ''
    return {
      href,
      text
    }
  })
}
