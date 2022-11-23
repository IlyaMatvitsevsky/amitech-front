import type { GetPageContentOperation } from '../types/page'
import { CmsConfig, OperationContext, OperationOptions } from '../types'
import { getPageContentQuery } from '../queries/get-page-content'
import { GetPageContentQuery, GetPageContentQueryVariables } from '../../../generated/schema';
import { filterEdges } from '@lib/cms/utils/array';
import { contentHandler, normalizeImage } from '@lib/cms/utils/page';

export default function getPageContentOperation({config}: OperationContext) {
  async function getPageContent<T extends GetPageContentOperation>(opts: {
    variables: T['variables']
    config?: Partial<CmsConfig>
    preview?: boolean
  }): Promise<T['data']>

  async function getPageContent<T extends GetPageContentOperation>(
    opts: {
      variables: T['variables']
      config?: Partial<CmsConfig>
      preview?: boolean
    } & OperationOptions
  ): Promise<T['data']>

  async function getPageContent<T extends GetPageContentOperation>(
    {
      query = getPageContentQuery,
      variables: { path },
    }: {
      query?: string
      variables: T['variables']
      config?: Partial<CmsConfig>
      preview?: boolean
    }): Promise<T['data']> {
    try {
      const variables: GetPageContentQueryVariables = {
        path,
      }

      const {
        data: {pages},
      } = await config.fetchGraphqlApi<GetPageContentQuery>(query, {variables})
      const [page] = pages?.data || []

      if (!page) {
        return {
          isExist: false,
          blocks: [],
          image: null
        }
      }

      const blocks = page.attributes?.blocks || []
      const image = page.attributes?.image ?  normalizeImage(page.attributes?.image) : null
      const noNullableContent = filterEdges(blocks)

      return {
        isExist: true,
        blocks: noNullableContent.map((item) => contentHandler.normalizeBlock(item)),
        image
      }
    } catch {
      return {
        isExist: false,
        blocks: [],
        image: null
      }
    }
  }

  return getPageContent
}
