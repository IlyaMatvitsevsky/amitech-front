import { CmsConfig, OperationContext } from '@lib/cms/types';
import { GetFooterOperation } from '@lib/cms/types/footer';
import { GetFooterQuery } from '../../../generated/schema';
import { getFooterQuery } from '@lib/cms/queries/get-footer';
import { normalizeFooter } from '@lib/cms/utils/footer';

export default function getFooterOperation({ config }: OperationContext) {
  async function getFooter<T extends GetFooterOperation>(
    {
      query = getFooterQuery,
    }: {
      query?: string
      config?: Partial<CmsConfig>
      preview?: boolean
    }): Promise<T['data']> {
    try {
      const {
        data: { footer },
      } = await config.fetchGraphqlApi<GetFooterQuery>(query)
      if ( !footer?.data ) {
        return null
      }
      const items = footer?.data?.attributes
      return normalizeFooter(items)
    } catch ( e ) {
      console.error('getFooter error', e)
      return null
    }
  }

  return getFooter
}
