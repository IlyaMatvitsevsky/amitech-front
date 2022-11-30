import { CmsConfig, OperationContext } from '@lib/cms/types';
import { GetPrivacyOperation } from '@lib/cms/types/privacy';
import { getPrivacyQuery } from '@lib/cms/queries/get-privacy';
import { GetPrivacyQuery } from '../../../generated/schema';
import { normalizePrivacy } from '@lib/cms/utils/privacy';

export default function getPrivacyOperation({ config }: OperationContext) {
  async function getPrivacy<T extends GetPrivacyOperation>(
    {
      query = getPrivacyQuery,
    }: {
      query?: string
      config?: Partial<CmsConfig>
      preview?: boolean
    }): Promise<T['data']> {
    try {
      const {
        data: { privacy },
      } = await config.fetchGraphqlApi<GetPrivacyQuery>(query)
      if ( !privacy?.data ) {
        return null
      }
      const items = privacy?.data?.attributes
      return normalizePrivacy(items)
    } catch ( e ) {
      console.error('getPrivacy error', e)
      return null
    }
  }

  return getPrivacy
}
