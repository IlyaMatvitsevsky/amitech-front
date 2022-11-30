import { CmsConfig, OperationContext } from '@lib/cms/types';
import { GetWorkQuery, GetWorkQueryVariables } from '../../../generated/schema';
import { getWorkQuery } from '@lib/cms/queries/get-work';
import { GetWorkOperation } from '@lib/cms/types/work';
import { normalizeWork } from '@lib/cms/utils/work';

export default function getWorkPageOperation({config}: OperationContext) {
  async function getWorkPage<T extends GetWorkOperation>(
    {
      query = getWorkQuery,
      variables: {name},
      config: cfg,
    }: {
      query?: string
      variables: T['variables']
      config?: Partial<CmsConfig>
      preview?: boolean
    }): Promise<T['data']> {
    try {
      const variables: GetWorkQueryVariables = {
        name: name
      }
      const {
        data: { works },
      } = await config.fetchGraphqlApi<GetWorkQuery>(query, {variables})
      const [work] = works?.data || []
      if (!work) {
        return {
          name: '',
          workBanner: null,
          aboutWork: null,
          contactUsBanner: null,
        }
      }
      return normalizeWork(work.attributes)
    } catch (e) {
      console.error('getWork error', e)
      return {
        name: '',
        workBanner: null,
        aboutWork: null,
        contactUsBanner: null,
      }
    }
  }

  return getWorkPage
}
