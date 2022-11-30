import { CmsWorkItemAttributes, ContactUsBanner, WorkStructure } from '@lib/cms/types/work';
import { filterEdges } from '@lib/cms/utils/array';
import { normalizeButtonLink, normalizeImage, normalizeImages } from '@lib/cms/utils/page';

export const normalizeWork = (item?: CmsWorkItemAttributes): WorkStructure => {
  if (!item) {
    return {
      name: '',
      workBanner: null,
      aboutWork: null,
      contactUsBanner: null,
    }
  }
  const { workBanner, aboutWork, contactUsBanner, name: rawText } = item
  const name = rawText || ''
  const banner = filterEdges(workBanner).map((item) => {
    return {
      items: filterEdges(item.items).map((element) => {
        return {
          name: element.name || '',
          work: element.work || '',
          image: element.image ? normalizeImage(element.image) : null
        }
      }),
      images: item.images ? normalizeImages(item.images) : null
    }
  })

  const contactBanner: ContactUsBanner|null = contactUsBanner ? {
    title: contactUsBanner?.title || '',
    description: contactUsBanner?.description || '',
    button: contactUsBanner?.button ? normalizeButtonLink(contactUsBanner?.button) : null
  } : null
  return {
    name,
    workBanner: banner,
    aboutWork: {
      title: aboutWork?.title || '',
      description: aboutWork?.description || ''
    },
    contactUsBanner: contactBanner
  }
}