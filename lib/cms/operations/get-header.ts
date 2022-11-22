import { CmsConfig, OperationContext } from '@lib/cms/types';
import { GetHeaderOperation } from '@lib/cms/types/header';
import { getHeaderQuery } from '@lib/cms/queries/header';
import { GetHeaderQuery } from '../../../generated/schema';
import { normalizeHeader } from '@lib/cms/utils/header';

export default function getHeaderOperation({ config }: OperationContext) {
  async function getHeader<T extends GetHeaderOperation>(
    {
      query = getHeaderQuery,
    }: {
      query?: string
      config?: Partial<CmsConfig>
      preview?: boolean
    }): Promise<T['data']> {
    try {
      const {
        data: { header },
      } = await config.fetchGraphqlApi<GetHeaderQuery>(query)
      if ( !header?.data ) {
        return null
      }
      const items = header?.data?.attributes
      return normalizeHeader(items)
    } catch ( e ) {
      console.error('getHeader error', e)
      return null
    }
  }

  return getHeader
}
