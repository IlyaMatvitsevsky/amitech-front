import { CmsHeaderButtons, CmsHeaderItem, HeaderStructure } from '@lib/cms/types/header';
import { filterEdges } from '@lib/cms/utils/array';
import { normalizeImage } from '@lib/cms/utils/page';
import { ButtonType, Link } from '@lib/cms/types/page';

export const normalizeButtonsType = (array?: CmsHeaderButtons): Link[] => {
  return filterEdges(array).map(({ buttonType, label, href, linkType, page }) => {
    if ( linkType === 'Page' ) {
      return {
        buttonType:
          buttonType === 'Primary'
            ? ButtonType.Primary
            : ButtonType.Secondary,
        path: page?.data?.attributes?.path || '/',
        label: label || '',
      }
    }
    if( linkType === 'Email' ) {
      return {
        buttonType: ButtonType.Contact,
        label: label || '',
        path: `mailto:${href}` || '',
      }
    }
    if( linkType === 'Phone' ) {
      return {
        buttonType: ButtonType.Contact,
        label: label || '',
        path: `tel:${href}` || '',
      }
    }
    return {
      buttonType:
        buttonType === 'Primary'
          ? ButtonType.Primary
          : ButtonType.Secondary,
      label: label || '',
      path: href || '',
    }
  })
}

export const normalizeHeader = (item?: CmsHeaderItem): HeaderStructure => {
  if (!item) {
    return null
  }
  const { buttons, logo, logoUrl: rawLogoUrl, links } = item
  const logoUrl = rawLogoUrl || ''
  return {
    logoUrl,
    logo: logo ? normalizeImage(logo) : null,
    buttons: normalizeButtonsType(buttons),
    links: normalizeButtonsType(links)
  }
}
