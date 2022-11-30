import { CmsPrivacyItem, PrivacyStructure } from '@lib/cms/types/privacy';

export const normalizePrivacy = (item?: CmsPrivacyItem): PrivacyStructure => {
  if (!item) {
    return null
  }
  const { privacy: rawText } = item
  const privacy = rawText || ''
  return {
    privacy
  }
}

