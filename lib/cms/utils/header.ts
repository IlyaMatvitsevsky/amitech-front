import { CmsHeaderButtons, CmsHeaderItem, HeaderStructure } from '@lib/cms/types/header';
import { filterEdges } from '@lib/cms/utils/array';
import { normalizeImage } from '@lib/cms/utils/page';
import { ButtonType, Link } from '@lib/cms/types/page';

const normalizeButtonType = (array?: CmsHeaderButtons): Link[] => {
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
    buttons: normalizeButtonType(buttons),
    links: normalizeButtonType(links)
  }
}
